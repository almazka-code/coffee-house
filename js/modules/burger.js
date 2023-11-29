const burger = document.querySelector('.burger');
const menuBurger = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.nav__link');

const toggleMenu = function () {
  burger.classList.toggle('burger--active');
  menuBurger.classList.toggle('header__nav--active');
}

burger.addEventListener('click', () => {
  toggleMenu();
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menuBurger.classList.remove('header__nav--active');
  });
});