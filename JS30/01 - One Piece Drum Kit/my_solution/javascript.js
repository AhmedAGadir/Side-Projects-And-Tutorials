
// good but can be improved upon

const keyCodes = [65,83,68,70,71,72,74,75,76]

window.addEventListener('keydown', event => {
	if (!keyCodes.includes(event.keyCode))
		return;
	else play(event.keyCode)
})

Array.from(document.querySelectorAll('.drum')).forEach(drum => {
  drum.addEventListener('click', () => play(drum.getAttribute('data-key')))
})

function play(keyCode){
	let drum = document.querySelector(`div[data-key='${keyCode}']`)
	// could have just used drum.add('active') but wanted to play around a bit
	let classes = drum.className.split();
	classes.push('active');
	drum.className = classes.join(' ');

	let removeActive = setTimeout(() => {
		drum.classList.remove('active');
	}, 50);

	let sound = document.querySelector(`audio[data-key='${keyCode}']`)
	sound.currentTime = 0;
	sound.play();
}


