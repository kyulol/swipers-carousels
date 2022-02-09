/**
 * import main Paper Onboarding function
 */
import PaperOnboarding from './paper-onboarding';
/**
 * import Paper Onboarding styles
 */
import './paper-onboarding.scss';
/**
 * Custom local styles
 */
import './main.scss';

/**
 * Paper onboarding element
 */
const paperOnboardingEl = document.querySelector('.paper-onboarding');

/**
 * Init paper onboarding
 *
 * first argument: pass .paper-onboarding element
 * second argument: pass swiper direction: 'vertical' or 'horizontal'
 */
PaperOnboarding(paperOnboardingEl, 'vertical');
