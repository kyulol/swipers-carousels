/**
 * import main Travel Slider function
 */
import createTravelSlider from './travel-slider';
/**
 * import Travel Slider styles
 */
import './travel-slider.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Travel Slider element
 */
const sliderEl = document.querySelector('.travel-slider');

/**
 * Init Travel Slider
 *
 * argument: pass .travel-slider element
 */
createTravelSlider(sliderEl);
