/**
 * import Swiper and its styles
 */
import Swiper, { Pagination } from 'swiper';
import 'swiper/scss'; // eslint-disable-line
import 'swiper/scss/pagination'; // eslint-disable-line
/**
 * import main Panorama effect plugin
 */
import Panorama from './panorama';
/**
 * import Panorama effect styles
 */
import './panorama.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Init Swiper with Panorama effect
 */
const swiper = new Swiper('.panorama-slider .swiper', {
  // pass Panorama module
  modules: [Pagination, Panorama],
  // enable "panorama" effect
  effect: 'panorama',
  slidesPerView: 1.5,
  loop: true,
  loopedSlides: 10,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
  // panorama effect parameters
  panorama: {
    depth: 150,
    rotate: 45,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      panorama: {
        rotate: 35,
        depth: 150,
      },
    },
    640: {
      slidesPerView: 3,
      panorama: {
        rotate: 30,
        depth: 150,
      },
    },
    1024: {
      slidesPerView: 4,
      panorama: {
        rotate: 30,
        depth: 200,
      },
    },
    1200: {
      slidesPerView: 5,
      panorama: {
        rotate: 25,
        depth: 250,
      },
    },
  },
});
console.log(swiper);
