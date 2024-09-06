// import "../../scss/index/landing.scss";
import "/src/js/custom/faq/faq.js";
import "../custom/slider-simular/sliderSimular";

const styleEl = document.createElement("style");
styleEl.innerText = "";

import Swiper from "swiper";
import {
  Autoplay,
  Navigation,
  Pagination,
  FreeMode,
  Mousewheel,
} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
styleEl.innerText +=
  ".swiper-wrapper { transition-timing-function: linear !important }";

const swiperBrands = new Swiper(".brands_swiper", {
  // Optional parameters
  // direction: 'vertical',
  modules: [Autoplay, FreeMode, Mousewheel],

  speed: 7000,
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  easing: "linear",
  mousewheel: true,
  spaceBetween: 30,
  breakpoints: {
    1920: {
      slidesPerView: 7,
    },

    1350: {
      slidesPerView: 6,
    },
    920: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
      // centeredSlides: true,
    },
  },
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

document.querySelector("head").append(styleEl);
