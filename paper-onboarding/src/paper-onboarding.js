// eslint-disable-next-line
import Swiper, { EffectCreative, Pagination } from 'swiper';

export default function PaperOnboarding(el, direction = 'horizontal') {
  let fillContainer;
  const fillEls = [];

  const createFills = () => {
    fillContainer = document.createElement('div');
    fillContainer.classList.add('paper-onboarding-fills');
    el.prepend(fillContainer);
    el.querySelectorAll('.swiper-slide').forEach((slideEl) => {
      const color = slideEl.getAttribute('data-paper-bg-color') || '#000';
      const fillEl = document.createElement('div');
      fillEl.classList.add('paper-onboarding-fill');
      fillEl.style.backgroundColor = color;
      fillContainer.appendChild(fillEl);
      fillEls.push(fillEl);
    });
  };
  const calcFillSize = () => {
    const { offsetWidth, offsetHeight } = el;

    const radius = ((offsetWidth / 2) ** 2 + (offsetHeight / 2) ** 2) ** 0.5;
    fillContainer.style.width = `${radius * 4}px`;
    fillContainer.style.height = `${radius * 4}px`;
    fillContainer.style.marginLeft =
      direction === 'vertical' ? `-${radius * 2}px` : `-${radius}px`;
    fillContainer.style.marginTop =
      direction === 'vertical' ? `-${radius}px` : `-${radius * 2}px`;
  };
  const onTranslate = (swiper) => {
    const { slides } = swiper;

    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = 1 - Math.max(Math.min(Math.abs(slideProgress), 1), 0);

      if (slideProgress < 0) {
        fillEls[i].style.transform = `scale(${progress})`;
      } else {
        fillEls[i].style.transform = `scale(1)`;
      }
    }
  };
  const onTransition = (swiper, duration) => {
    fillEls.forEach((fillEl) => {
      // eslint-disable-next-line
      fillEl.style.transitionDuration = `${duration}ms`;
    });
  };

  createFills();
  calcFillSize();
  window.addEventListener('resize', calcFillSize);

  const onboardingSwiper = new Swiper(el.querySelector('.swiper'), {
    modules: [Pagination, EffectCreative],
    effect: 'creative',
    direction,
    speed: 500,
    resistanceRatio: 0,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    creativeEffect: {
      progressMultiplier: 2,
      prev: {
        opacity: 0,
        translate: direction === 'vertical' ? [0, -128, 0] : [-128, 0, 0],
      },
      next: {
        opacity: 0,
        translate: direction === 'vertical' ? [0, 128, 0] : [128, 0, 0],
      },
    },
    on: {
      setTranslate: onTranslate,
      setTransition: onTransition,
    },
  });
  return onboardingSwiper;
}
