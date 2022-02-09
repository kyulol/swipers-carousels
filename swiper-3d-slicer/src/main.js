/**
 * import main Swiper Slicer functions
 */
import { createRatioSlicer, createDelaySlicer } from './swiper-slicer';
/**
 * import Swiper Slicer styles
 */
import './swiper-slicer.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Create ratio slicer, pass .swiper-slicer HTML element to the function
 */
createRatioSlicer(document.querySelector('.swiper-ratio-slicer'));

/**
 * Create delay slicer, pass .swiper-slicer HTML element to the function
 */
createDelaySlicer(document.querySelector('.swiper-delay-slicer'));
