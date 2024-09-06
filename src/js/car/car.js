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
import "../../scss/car/carinfo.scss";
// import '/src/js/custom/faq/faq.js';
import "../../js/custom/faq/faq";
import "../custom/slider-simular/sliderSimular";

const styleEl = document.createElement("style");
styleEl.innerText = "";

styleEl.innerText +=
  ".swiper-wrapper { transition-timing-function: linear !important }";

import "swiper/css/pagination";

const share = document.querySelector(".icon-share");

const hidden = document.querySelector(".hidden");

document.addEventListener("click", () => {
  hidden.classList.remove("active");
});

share.addEventListener("click", (e) => {
  e.stopPropagation();
  hidden.classList.toggle("active");
});

hidden.addEventListener("click", (e) => {
  e.stopPropagation();
});

// swiper

// resize

function alignCarTextHeight() {
  const carTextElements = document.querySelectorAll(".car-text");

  let maxHeight = 0;

  // Находим максимальную высоту среди всех элементов `.car-text`
  carTextElements.forEach((element) => {
    const elementHeight = element.offsetHeight;
    if (elementHeight > maxHeight) {
      maxHeight = elementHeight;
    }
  });

  // Устанавливаем максимальную высоту для всех элементов `.car-text`
  carTextElements.forEach((element) => {
    element.style.height = maxHeight + "px";
  });
}

function handleResize() {
  alignCarTextHeight();
}

// Вызываем функцию при загрузке страницы
window.addEventListener("load", alignCarTextHeight);

// Дополнительно:
// Вызываем функцию при изменении размера окна, чтобы подстроиться под изменения
window.addEventListener("resize", handleResize);

const swiperBrands = new Swiper(".marquee", {
  // Optional parameters
  // direction: 'vertical',
  modules: [Autoplay, Mousewheel, FreeMode],

  speed: 7000,
  loop: true,
  centeredSlides: true,
  // slidesPerView: 3,
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  easing: "linear",
  mousewheel: true,
  // spaceBetween: 10,
  breakpoints: {
    1400: {
      slidesPerView: 3.8,
    },

    1330: {
      slidesPerView: 8,
    },

    1280: {
      slidesPerView: 7,
    },

    1200: {
      slidesPerView: 7,
    },
    1120: {
      slidesPerView: 6.5,
    },
    1120: {
      slidesPerView: 6,
    },
    930: {
      slidesPerView: 5,
    },
    840: {
      slidesPerView: 4.5,
    },
    760: {
      slidesPerView: 4,
    },
    630: {
      slidesPerView: 3.5,
    },
    560: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2.5,
    },
    320: {
      slidesPerView: 1.5,
    },
  },
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

document.querySelector("head").append(styleEl);

var swiper = new Swiper(".thumb-swiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    520: {
      slidesPerView: 4,
    },
    319: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});

var swiper2 = new Swiper(".main-swiper", {
  modules: [Thumbs, Navigation],
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

const slider = document.querySelector(".mySwiper2");

const next = document.querySelector(".swiper-button-next");
const prev = document.querySelector(".swiper-button-prev");

slider.addEventListener("mouseover", () => {
  next.classList.add("hover");
  prev.classList.add("hover");
});

slider.addEventListener("mouseleave", () => {
  next.classList.remove("hover");
  prev.classList.remove("hover");
});

document.addEventListener("DOMContentLoaded", () => {
  const locations = document.querySelectorAll(
    ".company__locations-items .location"
  );
  const showMoreBtn = document.querySelector(".show-more");
  const container = document.querySelector(".company__locations-items");

  // Показываем только первые 3 элемента
  locations.forEach((location, index) => {
    if (index > 2) {
      location.classList.remove("show");
    } else {
      location.classList.add("show");
    }
  });

  container.style.maxHeight = "40px"; // Ограничиваем высоту до трех элементов
  showMoreBtn.textContent = "Показать больше";
  showMoreBtn.classList.remove("hide");

  // Обработчик клика на кнопку
  showMoreBtn.addEventListener("click", () => {
    if (showMoreBtn.textContent === "Показать больше") {
      // Сначала изменяем высоту контейнера
      container.style.maxHeight = `${container.scrollHeight}px`;

      // Запускаем анимацию для показа всех элементов
      setTimeout(() => {
        locations.forEach((location) => {
          location.classList.add("show");
        });
      }, 100); // Задержка должна совпадать с длительностью перехода max-height

      // Меняем текст кнопки на "Скрыть"
      showMoreBtn.textContent = "Скрыть";
      showMoreBtn.classList.add("hide");
    } else {
      // Сначала убираем все элементы, кроме первых трех
      locations.forEach((location, index) => {
        if (index > 2) {
          location.classList.remove("show");
        }
      });

      // Меняем текст кнопки на "Показать больше"
      showMoreBtn.textContent = "Показать больше";
      showMoreBtn.classList.remove("hide");

      container.style.maxHeight = "40px";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const pluses = document.querySelectorAll(".pluses__block");
  const showMoreBtn = document.getElementById("show-more");
  const container = document.querySelector(".pluses");

  // Изначально показываем только первые 3 элемента
  pluses.forEach((plus, index) => {
    if (index > 2) {
      plus.classList.remove("show");
    } else {
      plus.classList.add("show");
    }
  });

  // Ограничиваем высоту контейнера до трех элементов
  container.style.maxHeight = "45px"; // Эта высота должна соответствовать высоте трех элементов

  // Обработчик клика на кнопку "Показать все"
  showMoreBtn.addEventListener("click", () => {
    const isExpanded = showMoreBtn.textContent.trim() === "Скрыть";

    if (isExpanded) {
      // Скрываем все элементы, кроме первых трех
      pluses.forEach((plus, index) => {
        if (index > 2) {
          plus.classList.remove("show");
        }
      });

      // Устанавливаем ограничение высоты контейнера
      container.style.maxHeight = "45px";

      // Меняем текст кнопки обратно на "Показать все"
      showMoreBtn.textContent = "Показать все";
    } else {
      // Показываем все элементы
      pluses.forEach((plus) => {
        plus.classList.add("show");
      });

      // Убираем ограничение высоты контейнера
      container.style.maxHeight = `${container.scrollHeight}px`;

      // Меняем текст кнопки на "Скрыть"
      showMoreBtn.textContent = "Скрыть";
    }
  });
});
