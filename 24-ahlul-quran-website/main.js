// ========= SANDWHICH BUTTON ==========

let sandwhichButton = document.getElementById('sandwhich');
let toggle = true;

sandwhichButton.addEventListener('click', () => {

    sandwhichButton.className = (toggle) ? 'open' : 'close';
    toggle = !toggle;

    let ulclassList = document.querySelector('nav ul').classList;
    ulclassList.contains('visible') ? ulclassList.remove('visible') : ulclassList.add('visible');
});

// ========= V SHAPED DIV RESPONSIVE DESIGN ==========

const ALL_V_STYLES_SELECTORS = [
    '#enrollment-wrap .v-styling',
    '#programme-info-wrap .v-styling',
    '#upcoming-events-wrap .v-styling',
    '#testimonials-wrap .v-styling'
]

document.addEventListener('DOMContentLoaded', resizeVStyles)
window.addEventListener('resize', resizeVStyles)

function resizeVStyles() {
    let mainWidth = document.querySelector('main').offsetWidth;

    ALL_V_STYLES_SELECTORS.forEach(selector => {
        document.querySelector(selector).style.borderLeftWidth = mainWidth / 2 + 'px';
        document.querySelector(selector).style.borderRightWidth = mainWidth / 2 + 'px';
    })
}


// ======== SWIPER ==============
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        // when window width is <= 425px
        425: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// ============ SCROLL ANIMATION =======

window.addEventListener('scroll', () => {
    let logo = document.querySelector('#logo');
    let navLinks = document.querySelectorAll('header nav ul li');
    let navButtonWrap = document.querySelector('header nav .button-wrap');

    if (window.pageYOffset > 25) {
        if ([...logo.classList].includes('top')) {
            logo.classList.remove('top');
            [...navLinks].forEach(link => link.classList.remove('top'))
            navButtonWrap.classList.remove('top')
        }
    } else {
        if (![...logo.classList].includes('top')) {
            logo.classList.add('top');
            [...navLinks].forEach(link => link.classList.add('top'));
            navButtonWrap.classList.add('top');
        }
    }
})