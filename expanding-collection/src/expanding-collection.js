// eslint-disable-next-line
import Swiper from 'swiper';

export default function createExpandingCollection(el) {
  const swiperEl = el.querySelector('.swiper');

  const calcOffsets = (slideEl) => {
    const coverEl = slideEl.querySelector('.expanding-collection-cover');
    const contentEl = slideEl.querySelector('.expanding-collection-content');
    if (!contentEl || !coverEl) return;
    const { offsetWidth: coverWidth, offsetHeight: coverHeight } = coverEl;
    slideEl.style.setProperty(
      '--expanding-collection-cover-height',
      `${coverHeight}px`,
    );
    const { offsetHeight: contentHeight, offsetWidth: contentWidth } =
      contentEl;
    const props = {
      '--expanding-collection-scale-x': (coverWidth / contentWidth) * 0.95,
      '--expanding-collection-scale-y': (coverHeight / contentHeight) * 0.95,
    };
    Object.keys(props).forEach((prop) => {
      slideEl.style.setProperty(prop, props[prop]);
    });
  };

  const initEvents = (swiper) => {
    swiper.slides.forEach((slideEl) => {
      const containerEl = slideEl.querySelector(
        '.expanding-collection-container',
      );
      const coverEl = slideEl.querySelector('.expanding-collection-cover');
      const contentEl = slideEl.querySelector('.expanding-collection-content');
      coverEl.expandingCollectionClickHandler = () => {
        if (!contentEl || !slideEl.classList.contains('swiper-slide-active'))
          return;
        containerEl.classList.toggle('expanding-collection-opened');
      };
      coverEl.addEventListener(
        'click',
        coverEl.expandingCollectionClickHandler,
      );
    });
  };
  const removeEvents = (swiper) => {
    swiper.slides.forEach((slideEl) => {
      const coverEl = slideEl.querySelector('.expanding-collection-cover');
      if (coverEl && coverEl.expandingCollectionClickHandler) {
        coverEl.removeEventListener(
          'click',
          coverEl.expandingCollectionClickHandler,
        );
      }
    });
  };

  const swiper = new Swiper(swiperEl, {
    speed: 600,
    resistanceRatio: 0,
    slidesPerView: 'auto',
    centeredSlides: true,
    on: {
      init(s) {
        s.slides.forEach((slideEl) => {
          calcOffsets(slideEl);
        });
        requestAnimationFrame(() => {
          el.classList.add('expanding-collection-initialized');
        });
        initEvents(s);
      },
      slideChange(s) {
        const openedContainerEl = s.wrapperEl.querySelector(
          '.expanding-collection-opened',
        );
        if (openedContainerEl) {
          openedContainerEl.classList.remove('expanding-collection-opened');
        }
      },
      resize(s) {
        el.classList.remove('expanding-collection-initialized');
        s.slides.forEach((slideEl) => {
          calcOffsets(slideEl);
        });
        el.classList.add('expanding-collection-initialized');
      },
      beforeDestroy(s) {
        removeEvents(s);
      },
    },
  });
  return swiper;
}
