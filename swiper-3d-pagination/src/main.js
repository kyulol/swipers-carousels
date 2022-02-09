/**
 * import main Swiper Slicer functions
 */
import createSwiperCubes from './swiper-cubes';
/**
 * import Swiper Slicer styles
 */
import './swiper-cubes.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Create ratio slicer, pass .swiper-all-cubes HTML element and main Swiper's effect to the function
 */
createSwiperCubes(document.querySelector('.swiper-all-cubes'), 'cube');
/**
 * Create ratio slicer, pass .swiper-coverflow-cubes HTML element and main Swiper's effect to the function
 */
createSwiperCubes(
  document.querySelector('.swiper-coverflow-cubes'),
  'coverflow',
);
