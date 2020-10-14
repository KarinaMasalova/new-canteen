import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use(Navigation);

const HAMBURGER = document.querySelector('.hamburger');
const NAV = document.querySelector('.navigation');
const NAV_ITEMS = document.querySelectorAll('.navigation__item');

HAMBURGER.addEventListener('click', (event) => {
  if (NAV.classList.contains('navigation_active')) {
    HAMBURGER.classList.toggle('hamburger_active');
    HAMBURGER.classList.add('hamburger_inactive');
    NAV.classList.toggle('navigation_active');
  } else {
    HAMBURGER.classList.remove('hamburger_inactive');
    HAMBURGER.classList.toggle('hamburger_active');
    NAV.classList.toggle('navigation_active');
  }

  if(!NAV.classList.contains('navigation_dropped')) {
    NAV.classList.toggle('navigation_dropped');
    NAV_ITEMS.forEach((item) => item.classList.add('navigation__item_dropped'));

  } else {
    NAV.classList.toggle('navigation_dropped');
    NAV_ITEMS.forEach((item) => item.classList.remove('navigation__item_dropped'));
  }
});

window.addEventListener('load', () => {
  const swiper1 = new Swiper('.swiper1', {    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',    
    },
    breakpoints: {
      1170: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      440: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 11,
      },
    }
  });

  const swiper2 = new Swiper('.swiper2', {    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})
