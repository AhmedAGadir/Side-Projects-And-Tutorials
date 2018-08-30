$(document).ready(function() {

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

	var tabs = $('.form-container > div');
	var button = $('form button');

	$('form > div:not(.visible)').hide();

	$(button).click(function() {
		// move on to the next tab (as long as the last tab is not currently active)
		var lastTab = $(tabs).last();

		if (!$('.active').is(lastTab)) {
			$('.active').next().click();
			// note: returning false in jQuery is the same as e.preventDefault();
			return false;
		} 
	});

	tabs.click(function() {
		
		// do nothing if the active tab is clicked
		if (!$(this).hasClass('active')) {
			
			// change highlighted tab
			$('.active').removeClass('active');			
			$(this).addClass('active');

			// if the last tab is active, change the button to a submit type
			if ($(this).is($(tabs).last())) {
				$(button).attr('type','submit');
				$(button).text('Submit');
			} else {
				$(button).attr('type','button');
				$(button).text('Next');
			}


			// form animation using jQuery
			var duration = 300;

			// slide the current section of the form out
			$('.visible')
				.css({left: 0})
			 	.fadeOut(duration)
			 	.animate({left: -400}, {duration: duration, queue: false})
			 	.removeClass('visible')

			// slide the desired section of the form in
			var id = $(this).text().toLowerCase().replace(/\s/,'');

			$('#'+id)
				.css({left: 400})
				.fadeIn(duration)
				.animate({left: 0}, {duration: duration, queue: false})
				.addClass('visible')

		}
	})

	$('form').on('submit', function() {
		console.log('Submitted')
	})
	
})
