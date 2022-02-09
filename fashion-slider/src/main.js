/**
 * import main Fashion Slider function
 */
import createFashionSlider from './fashion-slider';
/**
 * import Fashion Slider styles
 */
import './fashion-slider.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Fashion Slider element
 */
const sliderEl = document.querySelector('.fashion-slider');

/**
 * Init Fashion Slider
 *
 * argument: pass .fashion-slider element
 */
createFashionSlider(sliderEl);
