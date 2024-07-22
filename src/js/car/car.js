import "../../scss/car/carinfo.scss";

const styleEl = document.createElement("style");
styleEl.innerText = "";

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
import Swiper from "swiper";
import "swiper/css";
styleEl.innerText +=
  ".swiper-wrapper { transition-timing-function: linear !important }";
import {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Thumbs,
} from "swiper/modules";

const logoBlocks = document.querySelectorAll(".tiker__block");
const tiket1 = document.querySelector(".marquee__tiker-1");
const tiket2 = document.querySelector(".marquee__tiker-2");

if (tiket1 && tiket2) {
  logoBlocks.forEach((block) => {
    block.addEventListener("mouseover", () => {
      tiket1.style.animationPlayState = "paused";
      tiket2.style.animationPlayState = "paused";
    });

    block.addEventListener("mouseout", () => {
      tiket1.style.animationPlayState = "running";
      tiket2.style.animationPlayState = "running";
    });
  });
} else {
  console.error("tiket1 or tiket2 is not found in the DOM");
}

const selects = document.querySelectorAll(".select__info");

selects.forEach((select) => {
  const trigger = select.querySelector(".trigger"); // Исправлено: добавил класс

  select.addEventListener("click", () => {
    // Сначала закрываем все активные селекты
    selects.forEach((activeSelect) => {
      if (
        activeSelect !== select &&
        activeSelect.classList.contains("active")
      ) {
        activeSelect.classList.remove("active");
      }
    });

    // Затем переключаем состояние текущего селекта
    select.classList.toggle("active");
  });
});

const swiperSimular = new Swiper(".swiper-simular", {
  modules: [Navigation, Autoplay],
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  // centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: ".simular-next",
    prevEl: ".simular-prev",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    1650: {
      centeredSlides: true,
      slidesPerView: 4,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 3,
    },

    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
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

var swiper2 = new Swiper(".mySwiper2", {
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

// hover nav

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

  speed: 2600,
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
      // slidesPerView: 3.8,
    },

    // 1330: {
    //   slidesPerView: 8,
    // },

    // 1280: {
    //   slidesPerView: 7,
    // },

    // 1200: {
    //   slidesPerView: 7,
    // },
    // 1120: {
    //   slidesPerView: 6.5,
    // },
    // 1120: {
    //   slidesPerView: 6,
    // },
    // 930: {
    //   slidesPerView: 5,
    // },
    // 840: {
    //   slidesPerView: 4.5,
    // },
    // 760: {
    //   slidesPerView: 4,
    // },
    // 630: {
    //   slidesPerView: 3.5,
    // },
    // 560: {
    //   slidesPerView: 3,
    // },
    // 400: {
    //   slidesPerView: 2.5,
    // },
    // 320: {
    //   slidesPerView: 1.5,
    // },
  },
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

document.querySelector("head").append(styleEl);
