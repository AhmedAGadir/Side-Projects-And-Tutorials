// SWIPER 

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
	    // when window width is <= 425px
	    425: {
	      slidesPerView: 1,
	      spaceBetween: 10
	    },
	    // when window width is <= 768px
	    768: {
	      slidesPerView: 2,
	    },

	  }
});

// FORM

let tabs = Array.from(document.querySelectorAll('.form-container > div'));
let formDivs = Array.from(document.querySelectorAll('form > div'));
let formButton = document.querySelector('form button');

tabs.forEach(tab => tab.addEventListener('click', e => {

	// change the color of the tabs
	tabs.forEach(t => {
		if (t == tab) t.classList.add('active');
		else t.classList.remove('active')
	})

	// show relevant part of form
	formDivs.forEach(div => div.classList.remove('visible'));
	let id = e.target.textContent.toLowerCase().replace(/\s/,'');
	document.getElementById(id).classList.add('visible');
	
	// animation to have display: none; after animating out 
	formDivs.forEach(div => {
		if (!div.classList.contains('visible')) setTimeout(() => div.style.display = 'none', 500);
		else div.style.display = 'block';
	});

	// if the last tab is open, the button type is changed to 'submit'
	// this design allows us to easily add more sections to the form
	if (e.target == tabs[tabs.length - 1]) {
		formButton.textContent = 'Submit';
	} else {
		formButton.textContent = 'Next';
	}
}))

formButton.addEventListener('click', e => {
	// if the button is clicked, move to the next tab (not applicable if the last tab is open)
	if (e.target.textContent == 'Next') {
		e.preventDefault();
		let currentTab = document.querySelector('.form-container > div.active');
		let nextTab = currentTab.nextElementSibling;
		nextTab.click();
	}
})

// initialize
window.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.form-container > div').click();
})