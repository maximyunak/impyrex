import '../../scss/index/landing.scss';

const styleEl = document.createElement('style');
styleEl.innerText = '';

import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, FreeMode, Mousewheel } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
styleEl.innerText += '.swiper-wrapper { transition-timing-function: linear !important }';

// init Swiper:
const swiper = new Swiper('#car-slider', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
});

const swiperBig = new Swiper('#special-offers', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  loop: true,
  navigation: {
    nextEl: '.btn-next-big',
    prevEl: '.btn-prev-big',
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

const swiperBrands = new Swiper('.brands_swiper', {
  // Optional parameters
  // direction: 'vertical',
  modules: [Autoplay, FreeMode, Mousewheel],

  speed: 2600,
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  easing: 'linear',
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

const selects = document.querySelectorAll('.faq__select');

selects.forEach((select) => {
  select.addEventListener('click', () => {
    // Проверяем, активен ли селект
    if (select.classList.contains('active')) {
      // Если активен, скрываем его
      select.classList.remove('active');
    } else {
      // Если не активен, скрываем все остальные и активируем текущий
      selects.forEach((active) => {
        active.classList.remove('active');
      });
      select.classList.add('active');
    }
  });
});

const likes = document.querySelectorAll('.swiper-mini-like');

likes.forEach((like) => {
  like.addEventListener('click', () => {
    like.classList.toggle('active');
  });
});

document.querySelector('head').append(styleEl);
