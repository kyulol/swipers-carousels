// eslint-disable-next-line
import Swiper, { EffectCreative } from 'swiper';

export default function createSpringSlider(el, extendParams = {}) {
  // main swiper el
  const swiperEl = el.querySelector('.swiper');

  let previousProgress = 0;
  let isTouched = false;

  const resetDelay = (swiper) => {
    swiper.slides.forEach((slideEl) => {
      slideEl.style.transitionDelay = '0ms';
    });
  };

  // init main swiper
  const swiper = new Swiper(swiperEl, {
    effect: 'creative',
    speed: 720,
    followFinger: false,
    ...extendParams,
    modules: [EffectCreative, ...(extendParams.modules || [])],
    creativeEffect: {
      limitProgress: 100,
      prev: {
        translate: ['-100%', 0, 0],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    on: {
      ...(extendParams.on || {}),
      touchStart(...args) {
        isTouched = true;
        if (extendParams.on && extendParams.on.touchStart) {
          extendParams.on.touchStart(...args);
        }
      },
      touchEnd(...args) {
        isTouched = false;
        if (extendParams.on && extendParams.on.touchStart) {
          extendParams.on.touchEnd(...args);
        }
      },
      // eslint-disable-next-line
      progress(swiper, progress) {
        if (isTouched) return;
        if (extendParams.on && extendParams.on.progress) {
          extendParams.on.progress(swiper, progress);
        }
        const direction = swiper.progress > previousProgress ? 'next' : 'prev';
        previousProgress = swiper.progress;
        const delay = swiper.params.speed / 16;
        const visibleIndexes = swiper.visibleSlidesIndexes;
        const firstIndex = visibleIndexes[0];
        const lastIndex = visibleIndexes[visibleIndexes.length - 1];
        const setDelay = (slideEl, slideIndex) => {
          if (direction === 'next' && slideIndex >= firstIndex) {
            slideEl.style.transitionDelay = `${
              (slideIndex - firstIndex + 1) * delay
            }ms`;
          } else if (direction === 'prev' && slideIndex <= lastIndex + 1) {
            slideEl.style.transitionDelay = `${
              (lastIndex - slideIndex + 1) * delay
            }ms`;
          } else {
            slideEl.style.transitionDelay = `${0}ms`;
          }
        };
        swiper.slides.forEach((slideEl, slideIndex) => {
          if (swiper.animating) {
            slideEl.style.transitionDelay = '0ms';
            requestAnimationFrame(() => {
              setDelay(slideEl, slideIndex);
            });
          } else {
            setDelay(slideEl, slideIndex);
          }
        });
      },
    },
  });

  swiper.on('transitionEnd resize touchStart', () => {
    resetDelay(swiper);
  });

  return swiper;
}
