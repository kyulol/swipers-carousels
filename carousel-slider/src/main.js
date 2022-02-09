/**
 * import main Carousel Slider function
 */
import createCarouselSlider from './carousel-slider';
/**
 * import Carousel Slider styles
 */
import './carousel-slider.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Carousel Slider element
 */
const sliderEl = document.querySelector('.carousel-slider');

/**
 * Init Carousel Slider
 *
 * argument: pass .carousel-slider element
 */
createCarouselSlider(sliderEl);
