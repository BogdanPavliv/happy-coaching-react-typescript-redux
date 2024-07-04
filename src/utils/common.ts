// Оголошуємо інтерфейс для типізації
interface BreakpointSettings {
  slidesPerView: number;
  spaceBetween: number;
}

interface SliderTestimonialsSettings {
  slidesPerView: number;
  spaceBetween: number;
  breakpoints: {
    [key: number]: BreakpointSettings;
  };
}

// Типізуємо об'єкт sliderTestimonialsSettings
export const sliderTestimonialsSettings: SliderTestimonialsSettings = {
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 37,
    },
  },
};

// Типізуємо об'єкт sliderTestimonialsSettings
export const sliderTestimonialsSettings2: SliderTestimonialsSettings = {
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 37,
    },
  },
};
