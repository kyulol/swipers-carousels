/**
 * import main Triple Slider function
 */
import createTripleSlider from './triple-slider';
/**
 * import Triple Slider styles
 */
import './triple-slider.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Triple Slider element
 */
const sliderEl = document.querySelector('.triple-slider');

/**
 * Init Triple Slider
 *
 * argument: pass .triple-slider element
 */
createTripleSlider(sliderEl);
