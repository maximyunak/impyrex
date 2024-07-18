import '../../scss/partner/partner.scss';
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
