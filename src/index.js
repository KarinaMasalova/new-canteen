import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use(Navigation);

window.addEventListener('load', () => {
  const swiper = new Swiper('.swiper-container', {    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',    
    },
    slidesPerView: 4,
    spaceBetween: 30,
  });

  const swiperFeedback = new Swiper('.swiper__container', {    
    navigation: {
      nextEl: '.swiper__button_next',
      prevEl: '.swiper__button_prev',    
    },
  });
})
