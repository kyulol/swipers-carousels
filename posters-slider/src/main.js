/**
 * import main Posters Slider function
 */
import createPostersSlider from './posters-slider';
/**
 * import Posters Slider styles
 */
import './posters-slider.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Posters Slider element
 */
const sliderEl = document.querySelector('.posters-slider');

/**
 * Init Posters Slider
 *
 * argument: pass .posters-slider element
 */
createPostersSlider(sliderEl);
