import '../../scss/utils/app.scss';
import '/src/js/_jquery';

const modalTriggers = document.querySelectorAll('.with-modal');
let activeModal = null; // Переменная для отслеживания активного модального окна

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    // loginModalLg.classList.remove('active');
    loginModal.classList.remove('active');

    const modal = trigger.querySelector('.modal');
    const triangle = trigger.querySelector('.triangle');

    // Если есть активное модальное окно, закрыть его
    if (activeModal && activeModal !== modal) {
      activeModal.classList.remove('active');
      activeModal.previousElementSibling.querySelector('.triangle').classList.remove('active');
    }

    modal.classList.toggle('active');
    triangle.classList.toggle('active');

    // Обновить activeModal
    activeModal = modal.classList.contains('active') ? modal : null;

    const modalListItems = trigger.querySelectorAll('.modal ul li');

    modalListItems.forEach((item) => {
      item.addEventListener('click', () => {
        modalListItems.forEach((modalItem) => {
          modalItem.classList.remove('active');
        });

        const title = trigger.querySelector('h3');
        title.innerHTML = item.querySelector('h3').textContent;

        item.classList.add('active');
      });
    });
  });
});

const loginModal = document.querySelector('.login__modal');

const loginModalTrigger = document.querySelector('.login__modal-trigger');

// const modalRows = loginModal.querySelectorAll('.modal__row');

loginModalTrigger.addEventListener('click', () => {
  loginModal.classList.toggle('active');

  modalTriggers.forEach((trigger) => {
    const modal = trigger.querySelector('.modal');
    const triangle = trigger.querySelector('.triangle');

    modal.classList.remove('active');
    triangle.classList.remove('active');
  });
});

let selectedLanguage = null;
let selectedMoney = null;

const languages = document.querySelectorAll('.language');
const moneys = document.querySelectorAll('.money');

// Изначально выбираем первый язык и валюту
selectedLanguage = languages[0];
selectedMoney = moneys[0];
selectedLanguage.classList.add('active');
selectedMoney.classList.add('active');

languages.forEach((lang) => {
  lang.addEventListener('click', () => {
    // Сбрасываем active со всех языков
    languages.forEach((l) => l.classList.remove('active'));

    selectedLanguage = lang;
    lang.classList.add('active');
  });
});

moneys.forEach((money) => {
  money.addEventListener('click', () => {
    // Сбрасываем active со всех валют
    moneys.forEach((m) => m.classList.remove('active'));

    selectedMoney = money;
    money.classList.add('active');
  });
});

const menu = document.querySelector('.menu');

const navbar = document.querySelector('.nav-ul');

const navBackground = document.querySelector('.nav-background');

menu.addEventListener('click', (e) => {
  e.stopPropagation();
  navbar.classList.toggle('active');
  menu.classList.toggle('active');
  navBackground.classList.toggle('active');
  document.body.classList.toggle('active');
});

navbar.addEventListener('click', (e) => {
  e.stopPropagation();
});

languages.forEach((lang) => {
  lang.addEventListener('click', () => {
    // Сбрасываем active со всех языков
    languages.forEach((l) => l.classList.remove('active'));

    selectedLanguage = lang;
    lang.classList.add('active');
  });
});

moneys.forEach((money) => {
  money.addEventListener('click', () => {
    // Сбрасываем active со всех валют
    moneys.forEach((m) => m.classList.remove('active'));

    selectedMoney = money;
    money.classList.add('active');
  });
});

// media

const message = document.querySelector('.visible');

const media = document.querySelector('.social__media');

message.addEventListener('click', () => {
  media.classList.toggle('active');
});

// body

document.body.addEventListener('click', () => {
  navbar.classList.remove('active');
  menu.classList.remove('active');
  navBackground.classList.remove('active');
});

document.body.addEventListener('click', (e) => {
  // Проверка, что клик был не по модальному окну и не по триггеру
  if (
    !e.target.closest('.modal') &&
    !e.target.closest('.modal-trigger') &&
    !e.target.closest('.login__modal-trigger') &&
    !e.target.closest('.login__modal')
  ) {
    // Скрываем все активные модальные окна
    if (loginModal.classList.contains('active')) {
      loginModal.classList.remove('active');
    }

    if (activeModal) {
      activeModal.classList.remove('active');
      activeModal.previousElementSibling.querySelector('.triangle').classList.remove('active');
      activeModal = null; // Сбрасываем активное модальное окно
    }
  }
});

const mobileModals = document.querySelectorAll('.with-modal-lg');

mobileModals.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const dropdown = trigger.querySelector('.mobile-dropdown');
    const triangle = trigger.querySelector('.triangle');

    triangle.classList.toggle('active');
    dropdown.classList.toggle('active');
  });
});

const mobileMoney = document.querySelectorAll('.money-dropdown');
mobileMoney.forEach((money) => {
  money.addEventListener('click', () => {
    // Close all other dropdowns
    mobileMoney.forEach((otherDropdown) => {
      if (otherDropdown !== money) {
        otherDropdown.classList.remove('active');
      }
    });

    // Toggle the clicked dropdown
    money.classList.toggle('active');
  });
});
