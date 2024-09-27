// Переменные
const carousel = document.querySelector('.carousel__wrap');
const carouselList = document.querySelector('.carousel__list');
const carouselSlides = document.querySelectorAll('.carousel__slide');

const carouselBtnPrev = document.querySelector('.carousel__button-wrap--prev');
const carouselBtnNext = document.querySelector('.carousel__button-wrap--next');

const paginationButtons = document.querySelectorAll('.carousel__progress');

let carouselIndex = 0;
let carouselWidth = carousel.offsetWidth;

// Перемотка карусели вперед, нажатие правой кнопки-стрелки
carouselBtnNext.addEventListener('click', nextSlide);

// Перемотка карусели назад, нажатие левой кнопки-стрелки
carouselBtnPrev.addEventListener('click', prevSlide);

function prevSlide() {
  carouselIndex--;

  if (carouselIndex < 0) {
    carouselIndex = carouselSlides.length -1;
  }
  moveSlide();
  updatePagination(carouselIndex);
}

function nextSlide() {
  carouselIndex++;

  if (carouselIndex >= carouselSlides.length) {
    carouselIndex = 0;
  }
  moveSlide();
  updatePagination(carouselIndex);
}

function moveSlide() {
  carouselList.style.transform = `translateX(${-carouselIndex * carouselWidth}px)`;
}

function updatePagination(index) {
  paginationButtons.forEach((btn, btnIndex) => {
      btnIndex === index ? btn.classList.add('carousel__progress--active') : btn.classList.remove('carousel__progress--active');
  });
}

//Автоматическое перелистывание слайдов
// setInterval(() => {
//   nextSlide()
// }, 5000);

let interval;

// Приостановка выполнения setInterval
function pauseInterval() {
  clearInterval(interval);
}

// Возобновление выполнения setInterval
function restartInterval() {
  interval = setInterval(() => {
    nextSlide();
  }, 5000);
}
// Обработчик события наведения курсора на кнопку
carousel.addEventListener('mouseenter', pauseInterval);

// Обработчик события убирания курсора с кнопки
carousel.addEventListener('mouseleave', restartInterval);

// Запуск интервала при загрузке страницы
restartInterval();

// touch event
carouselList.addEventListener('touchstart', function (e) {
  handelTouchStart(e);
  pauseInterval();
}, false);

carouselList.addEventListener('touchmove', handelTouchMove, false);

carouselList.addEventListener('touchend', function () {
  slideMove();
  restartInterval();
}, false);

let x1;
let x2;
let xDiff;

function handelTouchStart(e) {
  e.preventDefault();
  const firstTouch = e.touches[0];
  x1 = firstTouch.clientX;
}

function handelTouchMove(e) {
  if (!x1) {
    return false;
  }
  x2 = e.touches[0].clientX;
  xDiff = x2 - x1;
}

function slideMove() {
  if (xDiff < 0) {
    nextSlide();
  }
  if (xDiff > 0) {
    prevSlide();
  }

  x1 = null;
  x2 = null;
  xDiff = null;
}