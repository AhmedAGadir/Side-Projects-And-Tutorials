let typeArray;
let doubleDamageInfo;
let numberOfPokemon;
let doubleDamageFrmArray;
let displayedPokemon;

// error handling
let audio = document.querySelector('audio');
function handleError(error) {
	console.log(error) 
	document.getElementById('output-header').innerHTML = '';
	document.getElementById('loader').innerHTML = ``;
	document.querySelector('#output .card-columns').innerHTML = ``;
	document.querySelector('.error.container').style.display = 'flex';
	     		
	if (error.message == 'error: not found') {
		document.querySelector('.error h2').textContent = error.message.toUpperCase();
		document.querySelector('.error p').innerHTML = `you made pikachu cry! <br>Make sure that all your type inputs are included in the list below: <br><br> <strong>${arrToStr(typeArray)}</strong>`;
	} else {
		document.querySelector('.error h2').textContent = error.message.toUpperCase();
		// fix this message (below) - sometimes it's not applicable 
		document.querySelector('.error p').innerHTML = `We're experiencing some issues :( ... pikachu feels for you`;
	}

	audio.currentTime = 42.7;
	audio.play();
}

// init     --- temp solution otherwise: https://crossorigin.me
let init = {
	headers: {'content-type': 'application/json'},
	mode: 'cors',
}


window.addEventListener('DOMContentLoaded', () => {	

	//loading pokemon image
	document.querySelector('img.loading-pokemon').src = `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('00' +  (Math.floor(Math.random()*806)+1)).slice(-3)}.png` 

	// remove loading screen
	function removeLoadingScreen() {
		setTimeout(()=> {
			document.querySelector('.loading-screen').style.display = 'none';
			document.querySelector('.wrap1').style.display = 'initial';
			document.querySelector('.form-group input').focus();
		},5000)
	}
 	
 	removeLoadingScreen()
  

	// get pokemon types
	let p1 = new Promise((resolve, reject) => {
		if (!localStorage.getItem('typeArray')) {
			fetch(`https://pokeapi.co/api/v2/type/`, init)
			.then(res => {
				if (res.ok) return res.json();
				else throw new Error(`${res.status}: ${res.statusText}`)
			}, err => {
				throw new Error(`${err.name}: ${err.message}`)
			})
			.then(data => {
				typeArray = data.results.map(type => type.name);
				localStorage.setItem('typeArray', JSON.stringify(typeArray));
				console.log('typeArray added to local storage: ', typeArray);
				resolve(typeArray)
			})
			.catch(error => {
				reject(error)
			})
		} else {
			typeArray = JSON.parse(localStorage.getItem('typeArray'));
			console.log('typeArray already in local storage: ', typeArray);
			resolve(typeArray)
		}
	})

	// get damage info
	if (!localStorage.getItem('doubleDamageInfo')) {
		p1.then(typeArray => {
			let promiseArray = typeArray.map(type => {
				return fetch(`https://pokeapi.co/api/v2/type/${type}`, init)
				.then(res => {
					if (res.ok) return res.json();
					else throw new Error(`${res.status}: ${res.statusText}`)
				}, err => {
					throw new Error(`${err.name}: ${err.message}`)
				})
			})

			return Promise.all(promiseArray);
		})
		.then(data => {
			doubleDamageInfo = data.map(type => {
				return {
					type: type.name,
					dbl_damage_to: type.damage_relations.double_damage_to,
					dbl_damage_from: type.damage_relations.double_damage_from,
				}
			});

			localStorage.setItem('doubleDamageInfo', JSON.stringify(doubleDamageInfo));
			console.log('doubleDamageInfo added to local storage', doubleDamageInfo);
		})
		.catch(error => {
			handleError(error)
		})
	} else {
		doubleDamageInfo = JSON.parse(localStorage.getItem('doubleDamageInfo'));
		console.log('doubleDamageInfo alreay in local storage', doubleDamageInfo);
	}


})

// form submitting 
function arrToStr(arr) {
	let arrClone = arr.map(i => i);

	if (arrClone.length == 1) return `${arrClone[0]}`;
	else if (arrClone.length == 2 ) return `${arrClone[0]} and ${arrClone[1]}`;
	else {
		let a = arrClone.shift();
		return `${a}, ${arrToStr(arrClone)}`
	}
}

document.querySelector('.form-group').addEventListener('submit', event => {
	
	event.preventDefault();

	let input = document.querySelector('#pokemon-types-input');
	let inputArray = input.value.replace(/\s*/g, '').toLowerCase().split(',');
	let inputStr = arrToStr(inputArray);
	
	// reset
	numberOfPokemon = 0;
	doubleDamageFrmArray = [];
	audio.pause();
	input.value = '';
	displayedPokemon = [];
	document.querySelector('.error.container').style.display = 'none';
	document.querySelector('#output .card-columns').innerHTML = '';

	// start search
	document.getElementById('output-header').innerHTML = 
	`<p class='mb-3 text-center'><strong> pokémon which are strong against <span class='text-primary'>${inputStr}</span> types</strong></p>`;
	
	document.getElementById('loader').innerHTML =
	`<p> hold on, this could take a minute.... </p>
	<img src='images/loader.svg' class='my-2'>`

	let errorFound = false;

	inputArray.forEach(input => {
		
		if (!typeArray.includes(input)) {
			let error = new Error('error: not found');
			handleError(error);
			errorFound = true;
			return;
		}
		for (let data of doubleDamageInfo) {
			if (input == data.type) doubleDamageFrmArray.push(data.dbl_damage_from);
		}
	})

	if (!errorFound) {
		doubleDamageFrmArray = doubleDamageFrmArray.reduce((a,b) => a.concat(b)).map(i => i.name);
		doubleDamageFrmArray = Array.from(new Set(doubleDamageFrmArray));
		// https://stackoverflow.com/questions/38373364/the-best-way-to-remove-duplicate-strings-in-an-array
		doubleDamageFrmArray = doubleDamageFrmArray.map(type => { 
			return fetch(`https://pokeapi.co/api/v2/type/${type}`, init)
			.then(res => {
				if (res.ok) return res.json(); 
				else throw new Error(`${res.status}: ${res.statusText}`)
			}, err => {
				throw new Error(`${err.name}: ${err.message}`)
			})
		})
		
		Promise.all(doubleDamageFrmArray)
		.then(data => data.map(data => data.pokemon))
		.then(data => {
			doubleDamageFrmArray = data;
			addPokemon(16);
		})
		.catch(err => handleError(err))
	}
})

function addPokemon(n) {
	let pokemonArray = [];

	for (let i = 0; i < n; i++) {
		let r1 = doubleDamageFrmArray[Math.floor(Math.random() * doubleDamageFrmArray.length)];
		let r2 = r1[Math.floor(Math.random() * r1.length)].pokemon;

		// disallow duplicate pokemon 
		if (displayedPokemon.map(p => p.name).includes(r2.name)) {
			i--;
			continue;
		} else {
			pokemonArray.push(r2);
			displayedPokemon.push(r2);
		}
	}

	Promise.all(pokemonArray.map(pokemon => { 
			return fetch(pokemon.url, init)
			.then(res => {
				if (res.ok) return res.json(); 
				else throw new Error(`${res.status}: ${res.statusText}`)
			}, err => {
				throw new Error(`${err.name}: ${err.message}`)
			})
		})
	)
	.then(pokemonArray => {
		let cards = '';

		pokemonArray.forEach((pokemon, ind) => {
			console.log(pokemon)
			let types = '';
			let dbl_dmg_to = [];

			pokemon.types.forEach(type => {
				types += (pokemon.types.indexOf(type) !== pokemon.types.length-1) ? `${type.type.name}, ` : ` ${type.type.name}`;

				doubleDamageInfo.forEach(item => {
					if (item.type == type.type.name) {
						dbl_dmg_to.push(item.dbl_damage_to);
					}
				})
			})

			dbl_dmg_to = dbl_dmg_to.reduce((a,b) => a.concat(b)).reduce((a, b) => {
				if (!a.name.split(', ').includes(b.name)) {
					return {name: `${a.name}, ${b.name}`}
				} else {
					return {name: a.name}
				}
			})

			let abilities = '';
			pokemon.abilities.forEach(ability => {
				abilities += (pokemon.abilities.indexOf(ability) !== pokemon.abilities.length-1) ? `${ability.ability.name}, ` : ` ${ability.ability.name}`
			})

			let stats = '';
			pokemon.stats.forEach(stat => {
				stats += (pokemon.stats.indexOf(stat) !== pokemon.stats.length-1) ? `<br>${stat.stat.name}: ${stat.base_stat}` : `<br>${stat.stat.name}: ${stat.base_stat}`
			})

			let r3 = Math.floor(Math.random() * pokemon.types.length);
			let backgroundImg = (typeArray.includes(pokemon.types[r3].type.name)) ? pokemon.types[r3].type.name : 'colorless';

			cards += `
				<div class='card' style="background-image: url('images/${backgroundImg}.png')">
					<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('00' + pokemon.id).slice(-3)}.png" class='card-img-top'>								
					<div class='card-body'>
						<ul class=list-group> 
							<li class='list-group-item text-primary'>name: ${pokemon.name}</li>
							<li class='list-group-item text-warning'>types: ${types}</li>
							<li class='list-group-item text-info'>abilities: ${abilities}</li>
							<li class='list-group-item text-success'>base stats: ${stats}</li>
							<li class='list-group-item text-danger'>double damage to: ${dbl_dmg_to.name} types</li>
						</ul>
					</div>	
				</div>
			`					
			if (ind == pokemonArray.length - 1) {
				document.getElementById('loader').innerHTML = ``;
			    window.addEventListener('scroll', addMorePokemon);
				numberOfPokemon += n;
				document.querySelector('#output .card-columns').innerHTML += cards;			
			}
		})
	})
	.catch(error => handleError(error))
}

// add more pokemon to the page on scrolling
window.addEventListener('scroll', addMorePokemon);

function addMorePokemon(e) {
	if ((pageYOffset + innerHeight)/document.body.scrollHeight >= 0.9 && numberOfPokemon < 80) {
		window.removeEventListener('scroll', addMorePokemon);
		addPokemon(8);
		document.getElementById('loader').innerHTML = `<img src='images/loader.svg' class='my-2 loading-more'>`;
	}
}