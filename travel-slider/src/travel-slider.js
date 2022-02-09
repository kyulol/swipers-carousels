// eslint-disable-next-line
import Swiper, { Keyboard, Mousewheel } from 'swiper';

export default function createTravelSlider(el) {
  const planetEl = el.querySelector('.travel-slider-planet');
  const citiesEl = el.querySelector('.travel-slider-cities');
  const swiperEl = el.querySelector('.swiper');
  const slides = el.querySelectorAll('.swiper-slide');

  if (citiesEl) {
    citiesEl.classList.add(
      `travel-slider-cities-${slides.length > 4 ? '8' : '4'}`,
    );
  }

  const travelSwiper = new Swiper(swiperEl, {
    modules: [Keyboard, Mousewheel],
    speed: 600,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 24,
    watchSlidesProgress: true,
    keyboard: true,
    mousewheel: true,

    breakpoints: {
      512: {
        spaceBetween: 32,
      },
      1024: {
        spaceBetween: 64,
      },
    },
    on: {
      progress(s, progress) {
        if (!planetEl) return;
        const max =
          s.slides.length > 4 ? 360 - (8 - s.slides.length + 1) * 45 : 270;
        planetEl.style.transform = `translate(-50%, -50%) rotate(${
          max * -progress
        }deg)`;
      },
      setTransition(s, duration) {
        if (!planetEl) return;
        planetEl.style.transitionDuration = `${duration}ms`;
      },
    },
  });

  return travelSwiper;
}
