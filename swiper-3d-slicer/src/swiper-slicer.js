// eslint-disable-next-line
import Swiper, { EffectCube } from 'swiper';

export const createRatioSlicer = (slicerEl) => {
  // Number of slides, tweak according to your requirements
  const TOTAL_SLIDES = 4;
  // Offset ratio, used in "progress offset" variant
  const OFFSET_RATIO = 1.5;

  const swiperElements = slicerEl.querySelectorAll('.swiper');
  const swipers = [];

  // Init all slicer swipers
  swiperElements.forEach((el, index) => {
    const swiper = new Swiper(el, {
      modules: [EffectCube],
      effect: 'cube',
      grabCursor: true,
      allowTouchMove: index === 0,
      touchEventsTarget: 'container',
      cubeEffect: {
        shadow: index === swiperElements.length - 1,
      },
    });
    swipers.push(swiper);
  });

  const primarySwiper = swipers[0];
  const secondarySwipers = swipers.filter((swiper) => swiper !== primarySwiper);
  const progressPerSlide = 1 / (TOTAL_SLIDES - 1);

  // Modify and set secondary Swipers based on primary Swiper progress
  primarySwiper.on('progress', (_, progress) => {
    secondarySwipers.forEach((secondarySwiper, secondaryIndex) => {
      const slideStartProgress =
        Math.floor(progress / progressPerSlide) * progressPerSlide;
      const thisProgress = progress - slideStartProgress;
      const ratio = OFFSET_RATIO * (1 + secondaryIndex);
      const normalized =
        (thisProgress / progressPerSlide) ** ratio * progressPerSlide;
      const newProgress = slideStartProgress + normalized;
      secondarySwiper.setProgress(newProgress);
    });
  });
  // Set secondary Swipers transition
  primarySwiper.on('setTransition', (_, duration) => {
    secondarySwipers.forEach((secondarySwiper) => {
      secondarySwiper.setTransition(duration);
    });
  });
};

export const createDelaySlicer = (slicerEl) => {
  // Secondary swipers delay (in ms)
  const DELAY = 50;

  const swiperElements = slicerEl.querySelectorAll('.swiper');
  const swipers = [];

  // Init all slicer swipers
  swiperElements.forEach((el, index) => {
    const swiper = new Swiper(el, {
      modules: [EffectCube],
      effect: 'cube',
      grabCursor: true,
      allowTouchMove: index === 0,
      touchEventsTarget: 'container',
      cubeEffect: {
        shadow: index === swiperElements.length - 1,
      },
    });
    swipers.push(swiper);
  });

  const primarySwiper = swipers[0];
  const secondarySwipers = swipers.filter((swiper) => swiper !== primarySwiper);

  // Modify and set secondary Swipers based on primary Swiper progress
  primarySwiper.on('progress', (_, progress) => {
    secondarySwipers.forEach((secondarySwiper, secondaryIndex) => {
      setTimeout(() => {
        secondarySwiper.setProgress(progress);
      }, DELAY * (secondaryIndex + 1));
    });
  });
  // Set secondary Swipers transition
  primarySwiper.on('setTransition', (_, duration) => {
    secondarySwipers.forEach((secondarySwiper, secondaryIndex) => {
      setTimeout(() => {
        secondarySwiper.setTransition(duration);
      }, DELAY * (secondaryIndex + 1));
    });
  });
};
