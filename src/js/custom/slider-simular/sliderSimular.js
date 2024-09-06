import "./sliderSimular.scss";
import Swiper from "swiper";
import "swiper/css";

import {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

// // hover nav

const swiperBig = new Swiper("#special-offers", {
  // configure Swiper to use modules
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: ".simular-next",
    prevEl: ".simular-prev",
  },
  slidesPerView: 3,

  breakpoints: {
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    890: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
    },
    660: {
      slidesPerView: 2,
      // centeredSlides: true,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

const likes = document.querySelectorAll(".swiper-mini-like");

likes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("active");
  });
});

const swipercars = new Swiper("#car-slider", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  nested: true,
});
document.addEventListener("DOMContentLoaded", function () {
  // Function to set equal heights
  function setEqualHeight() {
    // Get all slider slides
    const slides = document.querySelectorAll(".swiper-mini-info");

    // Reset heights to allow re-calculation
    slides.forEach((slide) => (slide.style.height = "auto"));

    // Find the maximum height
    let maxHeight = 0;
    slides.forEach((slide) => {
      const slideHeight = slide.offsetHeight;
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight;
      }
    });

    // Set all slides to the maximum height
    slides.forEach((slide) => (slide.style.height = `${maxHeight}px`));
  }

  // Run the function initially
  setEqualHeight();

  // Re-run the function whenever the window is resized
  window.addEventListener("resize", setEqualHeight);

  // Also run the function after Swiper initialization
  // const swiper = new Swiper(".swiper-container", {
  //   // your Swiper options here
  //   on: {
  //     init: function () {
  //       setEqualHeight();
  //     },
  //     slideChange: function () {
  //       setEqualHeight();
  //     },
  //   },
  // });
});
