/**
 * import Swiper modules and styles
 */
import { Navigation, Pagination } from 'swiper';
/**
 * import main Spring Slider function
 */
import createSpringSlider from './spring-slider';
/**
 * import Spring Slider styles
 */
import './spring-slider.scss';

/**
 * Custom local styles
 */
import './main.scss';

/**
 * Spring Slider element
 */
const sliderEl = document.querySelector('.spring-slider');

/**
 * Init Spring Slider
 *
 * argument: pass .spring-slider element and swiper params
 */
createSpringSlider(sliderEl, {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 1,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
});
