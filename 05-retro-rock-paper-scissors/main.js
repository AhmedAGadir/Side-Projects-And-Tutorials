let choices = document.querySelectorAll('.choices img');
let result_outcome = document.querySelector('.result-outcome');
let result_winner = document.querySelector('.result-winner');
let user_score = document.querySelector('#user-score');
let comp_score = document.querySelector('#computer-score');


choices.forEach(choice => choice.addEventListener('click', play));

function play(event) {
	let user_choice = event.target.alt;
	let comp_choice = generateCompChoice();
	console.log('user choice: ' + user_choice, '. computer choice: ' + comp_choice);
	if (user_choice === comp_choice) draw(user_choice);
	else switch (user_choice) {
		case 'rock': comp_choice === 'scissors'? win(user_choice) : lose(user_choice);
		break;
		case 'paper': comp_choice === 'rock'? win(user_choice) : lose(user_choice);
		break;
		case 'scissors': comp_choice === 'paper'? win(user_choice) : lose(user_choice);
	}
}

function generateCompChoice() {
	let rand_index = Math.floor(Math.random() * 3);
	let choices = ['rock', 'paper', 'scissors'];
	return choices[rand_index];
}

function draw(user_choice) {
	result_outcome.textContent = `${user_choice} draws with ${user_choice}`;
	result_winner.textContent = 'Its a tie.';
}

function win(user_choice) {
	getOutcome(user_choice, 'win');
	result_winner.textContent = 'You win!!';
	user_score.textContent = Number(user_score.textContent) + 1;
}

function lose(user_choice) {
	getOutcome(user_choice, 'lose')
	result_winner.textContent = 'You Lose :('
	comp_score.textContent = Number(comp_score.textContent) + 1;
}

function getOutcome(user_choice, outcome) {
	if (outcome == 'win') {
		switch (user_choice) {
			case 'rock': result_outcome.textContent = 'rock crushes scissors';
			break;
			case 'paper': result_outcome.textContent = 'paper covers rock';
			break;
			case 'scissors': result_outcome.textContent = 'scissors cuts paper';
		}
	} else if (outcome == 'lose') {
		switch (user_choice) {
			case 'rock': result_outcome.textContent = 'paper covers rock';
			break;
			case 'paper': result_outcome.textContent = 'scissors cuts paper';
			break;
			case 'scissors': result_outcome.textContent = 'rock crushes scissors';		
		}
	}
}

// button styling

let button = document.querySelector('button');

button.addEventListener('click', reset);

function reset() {
	user_score.textContent = '0';
	comp_score.textContent = '0';
	result_outcome.textContent = '...';
	result_winner.textContent = '...';
}

 button.addEventListener('mouseover', colorOn);
 button.addEventListener('mouseout', colorOff);

function colorOn() {
 	if (user_score.textContent === comp_score.textContent) 
 		styleButton('black', 'url(images/border-img-hover.png)')
 	else if (user_score.textContent > comp_score.textContent) 
 		styleButton('#00FF21', 'url(images/border-img-winning.png)')
 	else if (user_score.textContent < comp_score.textContent) 
 		styleButton('#FF0000', 'url(images/border-img-losing.png)');	
}

function styleButton(background_color, backgroud_url) {
 	button.style.color = 'white';
	button.style.background = background_color;
	button.style.borderImageSource = backgroud_url;
	button.style.borderImageSlice = '9';
 	button.style.marginTop = '25px';
 	button.style.cursor = 'pointer';
}

function colorOff() {
 	button.style.background = '#edeff2';
 	button.style.color = 'black';
 	button.style.borderImageSource = 'url(images/border-img.png)';
 	button.style.borderImageSlice = '9';
 	button.style.marginTop = '20px';
 	button.style.cursor = 'default';
}

// header styling

let heading = document.getElementsByTagName('h1')[0];

heading.addEventListener('mouseover',() => {
	heading.style.cssText = 'cursor: default; filter: contrast(200%);';
})

heading.addEventListener('mouseout',() => {
	heading.style.cssText = 'transition: 0.2s all smooth; cursor: ;';
});

window.addEventListener('click', () => {
	document.querySelector('audio').play();
	document.querySelector('audio').loop = true;
})









