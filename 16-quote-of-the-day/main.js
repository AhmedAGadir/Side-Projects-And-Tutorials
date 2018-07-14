// ================ PAGE THEME =====

const themes = ['dodgerblue', '#ff4359'];
let selectedTheme;

if (localStorage.getItem('theme')) {
	let previousTheme = JSON.parse(localStorage.getItem('theme'));
	selectedTheme = themes.filter(theme => theme !== previousTheme)[0];
} else {
	selectedTheme = themes[Math.floor(Math.random() * themes.length)];
}

localStorage.setItem('theme', JSON.stringify(selectedTheme));


// ================ INSPIRATION-BUTTON =====

let inspirationButton = document.querySelector('.inspiration button');


let borderImgURLs = {
	'border-img-dodgerblue.png': 'https://res.cloudinary.com/ahmedagadir/image/upload/v1531359917/quote-of-the-day/border-img-dodgerblue.png',
	'border-img-ff4359.png': 'https://res.cloudinary.com/ahmedagadir/image/upload/v1531359917/quote-of-the-day/border-img-ff4359.png',
}

inspirationButton.style.backgroundColor = selectedTheme;
inspirationButton.style.borderImageSource = 'url(' + borderImgURLs['border-img-' + selectedTheme.replace('#','') + '.png' ] + ')';

console.log(inspirationButton.style.borderImageSource)


inspirationButton.addEventListener('click', () => {	
	fetch('http://quotes.rest/qod.json')
	.then(res => res.json())
	.then(data => data.contents.quotes[0])
	.then(data => {
		document.querySelector('.inspiration .quote-text').textContent = data.quote;
		document.querySelector('.inspiration .quote-footer').textContent = ` - ${data.author}`;
		document.querySelector('.inspiration .api-reference').style.display = 'block';
		inspirationButton.style.display = 'none';
	})
	.catch(err => console.log(err))

})

