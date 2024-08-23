import '../../scss/car/carinfo.scss';
// import '/src/js/custom/faq/faq.js';

const styleEl = document.createElement('style');
styleEl.innerText = '';

import 'swiper/css/pagination';

const share = document.querySelector('.icon-share');

const hidden = document.querySelector('.hidden');

document.addEventListener('click', () => {
  hidden.classList.remove('active');
});

share.addEventListener('click', (e) => {
  e.stopPropagation();
  hidden.classList.toggle('active');
});

hidden.addEventListener('click', (e) => {
  e.stopPropagation();
});

// swiper
import Swiper from 'swiper';
import 'swiper/css';
styleEl.innerText += '.swiper-wrapper { transition-timing-function: linear !important }';
import { Autoplay, FreeMode, Mousewheel, Navigation, Pagination, Thumbs } from 'swiper/modules';

var swiper = new Swiper('.mySwiper', {
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

var swiper2 = new Swiper('.mySwiper2', {
  modules: [Thumbs, Navigation],
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

// hover nav

const slider = document.querySelector('.mySwiper2');

const next = document.querySelector('.swiper-button-next');
const prev = document.querySelector('.swiper-button-prev');

slider.addEventListener('mouseover', () => {
  next.classList.add('hover');
  prev.classList.add('hover');
});

slider.addEventListener('mouseleave', () => {
  next.classList.remove('hover');
  prev.classList.remove('hover');
});

// resize

function alignCarTextHeight() {
  const carTextElements = document.querySelectorAll('.car-text');

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
    element.style.height = maxHeight + 'px';
  });
}

function handleResize() {
  alignCarTextHeight();
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', alignCarTextHeight);

// Дополнительно:
// Вызываем функцию при изменении размера окна, чтобы подстроиться под изменения
window.addEventListener('resize', handleResize);

const swiperBrands = new Swiper('.marquee', {
  // Optional parameters
  // direction: 'vertical',
  modules: [Autoplay, Mousewheel, FreeMode],

  speed: 7000,
  loop: true,
  centeredSlides: true,
  // slidesPerView: 3,
  slidesPerView: 'auto',
  spaceBetween: 20,
  freeMode: true,
  easing: 'linear',
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

document.querySelector('head').append(styleEl);

const swiperBig = new Swiper('#special-offers', {
  // configure Swiper to use modules
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.simular-next',
    prevEl: '.simular-prev',
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

const likes = document.querySelectorAll('.swiper-mini-like');

likes.forEach((like) => {
  like.addEventListener('click', () => {
    like.classList.toggle('active');
  });
});

const swipercars = new Swiper('#car-slider', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  nested: true,
});

// const logoBlocks = document.querySelectorAll('.logo-block');
// // const tiket1 = document.querySelector('.brands-1');
// // const tiket2 = document.querySelector('.brands-2');

// logoBlocks.forEach((block) => {
//   block.addEventListener('mouseover', () => {
//     tiket1.style.animationPlayState = 'paused';
//     // tiket2.style.animationPlayState = 'paused';
//   });

//   block.addEventListener('mouseout', () => {
//     tiket1.style.animationPlayState = 'running';
//     // tiket2.style.animationPlayState = 'running';
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const locations = document.querySelectorAll('.company__locations-items .location');
  const showMoreBtn = document.querySelector('.show-more');
  const container = document.querySelector('.company__locations-items');

  // Показываем только первые 3 элемента
  locations.forEach((location, index) => {
    if (index > 2) {
      location.classList.remove('show');
    } else {
      location.classList.add('show');
    }
  });

  container.style.maxHeight = '40px'; // Ограничиваем высоту до трех элементов
  showMoreBtn.textContent = 'Показать больше';
  showMoreBtn.classList.remove('hide');

  // Обработчик клика на кнопку
  showMoreBtn.addEventListener('click', () => {
    if (showMoreBtn.textContent === 'Показать больше') {
      // Сначала изменяем высоту контейнера
      container.style.maxHeight = `${container.scrollHeight}px`;

      // Запускаем анимацию для показа всех элементов
      setTimeout(() => {
        locations.forEach((location) => {
          location.classList.add('show');
        });
      }, 100); // Задержка должна совпадать с длительностью перехода max-height

      // Меняем текст кнопки на "Скрыть"
      showMoreBtn.textContent = 'Скрыть';
      showMoreBtn.classList.add('hide');
    } else {
      // Сначала убираем все элементы, кроме первых трех
      locations.forEach((location, index) => {
        if (index > 2) {
          location.classList.remove('show');
        }
      });

      // Меняем текст кнопки на "Показать больше"
      showMoreBtn.textContent = 'Показать больше';
      showMoreBtn.classList.remove('hide');

      container.style.maxHeight = '40px';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const pluses = document.querySelectorAll('.pluses__block');
  const showMoreBtn = document.getElementById('show-more');
  const container = document.querySelector('.pluses');

  // Показываем только первые 3 элемента
  pluses.forEach((plus, index) => {
    if (index > 2) {
      plus.classList.remove('show');
    } else {
      plus.classList.add('show');
    }
  });

  // Ограничиваем высоту контейнера до трех элементов
  container.style.maxHeight = '45px'; // Задайте нужную высоту

  // Обработчик клика на кнопку
  showMoreBtn.addEventListener('click', () => {
    if (showMoreBtn.textContent === 'Показать все') {
      // Сначала изменяем высоту контейнера
      container.style.maxHeight = `${container.scrollHeight}px`;

      // Запускаем анимацию для показа всех элементов
      pluses.forEach((plus) => {
        plus.classList.add('show');
      });

      // Меняем текст кнопки на "Скрыть"
      showMoreBtn.textContent = 'Скрыть';
    } else {
      // Сначала убираем все элементы, кроме первых трех
      pluses.forEach((plus, index) => {
        if (index > 2) {
          plus.classList.remove('show');
        }
      });

      // Меняем текст кнопки на "Показать все"
      showMoreBtn.textContent = 'Показать все';

      // Сбрасываем высоту контейнера
      container.style.maxHeight = '45px';
    }
  });
});
