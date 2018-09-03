import Swiper from 'swiper';

var swiperInit = function() {

	new Swiper('.swiper-container', {
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

	console.log('swiper initiated')

}


export default swiperInit;