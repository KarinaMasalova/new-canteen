import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use(Navigation);

window.addEventListener('load', () => {
  const swiper = new Swiper('.swiper-container', {    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',    
    },
  });
})
