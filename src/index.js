import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use(Navigation);

const HAMBURGER = document.querySelector('.hamburger');
const NAV = document.querySelector('.navigation');

HAMBURGER.addEventListener('click', (event) => {
  if (NAV.classList.contains('navigation_active')) {
      HAMBURGER.classList.remove('hamburger_active');
      HAMBURGER.classList.add('hamburger_inactive');
      NAV.classList.remove('navigation_active');
  } else {
      HAMBURGER.classList.remove('hamburger_inactive');
      HAMBURGER.classList.add('hamburger_active');
      NAV.classList.add('navigation_active');
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
      768: {
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
