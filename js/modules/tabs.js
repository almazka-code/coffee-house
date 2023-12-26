const tabsButtons = document.querySelectorAll('.menu__btn');
const tabsItems = document.querySelectorAll('.menu__group');

tabsButtons.forEach(item => {
  item.addEventListener('click', () => {
    let currentButton = item;
    let tabId = currentButton.getAttribute('data-tab');
    let currentTabItem = document.querySelector(tabId);

    if( !currentButton.classList.contains('menu__btn--active') ) {
      tabsButtons.forEach((item) => {
          item.classList.remove('menu__btn--active');
      });

      currentButton.classList.add('menu__btn--active');

      tabsItems.forEach((item) => {
          item.classList.remove('menu__group--active');
      });

      currentTabItem.classList.add('menu__group--active');
    }
  })
});