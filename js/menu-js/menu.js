import '../modules/burger.js';
import { data } from './data.js';
import { Product } from './constructors.js';

const menuWrapper = document.querySelector('.menu__group');
const tabs = document.querySelectorAll('.menu__btn');
const showMoreBtn = document.querySelector('.show-more');
let selectedCategory = '';

// Загрузка страницы
window.onload = () => {
  generateMenu('coffee');
  checkVisibleItems();
};

// Генерация карточек
const generateMenu = (category) => {
  if (!Array.isArray(data)) return;

  const menu = data.filter(el => el.category === category);
  const createdItems = menu.map(el => el = new Product(el).createProduct());

  menuWrapper.innerHTML = '';
  createdItems.forEach(item => menuWrapper.append(item));
};

// Показывать только 4 карточки на мобильных устройствах
function checkVisibleItems() {
  if (document.documentElement.clientWidth <= 768) {
    menuWrapper.classList.add('mobile-version');
    if (document.querySelectorAll('.card').length > 4) {
      showMoreBtn.classList.add('visible');
    } else {
      showMoreBtn.classList.remove('visible');
    }
  } else {
    menuWrapper.classList.remove('mobile-version');
    showMoreBtn.classList.remove('visible');
  }
}

// Перелистывание категорий
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if( !tab.classList.contains('menu__btn--active') ) {
      tabs.forEach((item) => {
        item.classList.remove('menu__btn--active');
      });
    }

    tab.classList.add('menu__btn--active');
    selectedCategory = tab.id;
    generateMenu(selectedCategory);
    checkVisibleItems();
  });
});

// Кнопка показать ещё
showMoreBtn.addEventListener('click', () => {
  menuWrapper.classList.remove('mobile-version');
  showMoreBtn.classList.remove('visible');
});

window.addEventListener('resize', checkVisibleItems);