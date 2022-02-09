/**
 * import main Expanding Collection function
 */
import createExpandingCollection from './expanding-collection';
/**
 * import Expanding Collection styles
 */
import './expanding-collection.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Expanding Collection element
 */
const sliderEl = document.querySelector('.expanding-collection');

/**
 * Init Expanding Collection
 *
 * argument: pass .expanding-collection element
 */
createExpandingCollection(sliderEl);
