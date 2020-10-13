import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use(Navigation);

window.addEventListener('load', () => {
  const swiper1 = new Swiper('.swiper1', {    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',    
    },
    slidesPerView: 4,
    spaceBetween: 30,
  });

  const swiper2 = new Swiper('.swiper2', {    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})
