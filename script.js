import Swiper from './vendor/package/swiper-bundle.min.mjs';

// код для первого слайдера

const swiperContainer = document.querySelector('.swiper');
const swiperContainer2 = document.querySelector('.swiper2');

document.addEventListener(
    'DOMContentLoaded',
    () => {
        slider();
        slider2();
    },
    true
)

const slider = () => {
  if (!swiperContainer) {
      return ;
  };

  const swiper = new Swiper(swiperContainer, {
    direction: 'horizontal',
    slidesPerView: 1,
    observer: true,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}

// код для второго слайдера
const slider2 = () => {
  if (!swiperContainer2) {
      return ;
  };

  const swiper = new Swiper(swiperContainer2, {
    direction: 'horizontal',
    slidesPerView: 7,
    observer: true,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    }
  });
}

// наблюдатель для начала анимации текста

// Создать наблюдателя
const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          entry.target.classList.add('type');
        }
      });
  });

  const observer2 = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          entry.target.classList.add('type2');
        }
      });
  });
  const observer3 = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          entry.target.classList.add('type3');
        }
      });
  });
  const observer4 = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          entry.target.classList.add('type4');
        }
      });
  });
  const observer5 = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          entry.target.classList.add('type5');
        }
      });
  });
  const observer6 = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          entry.target.classList.add('type6');
        }
      });
  });
  
  // Сообщить наблюдателю, какие элементы следует отслеживать
  observer.observe(document.querySelector('.animation'));
  observer2.observe(document.querySelector('.animation2'));
  observer3.observe(document.querySelector('.animation3'));
  observer4.observe(document.querySelector('.animation4'));
  observer5.observe(document.querySelector('.animation5'));
  observer6.observe(document.querySelector('.animation6'));


export {slider};