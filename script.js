import Swiper from '../vendor/package/swiper-bundle.min.mjs';
// код для первого слайдера

const swiperContainer = document.querySelector('.swiper');
const swiperContainer2 = document.querySelector('.swiper2');
const swiperContainer3 = document.querySelector('.swiper3');
const swiperContainer4 = document.querySelector('.swiper4');
const swiperContainer5 = document.querySelector('.swiper5');
const swiperContainer6 = document.querySelector('.swiper6');

document.addEventListener(
    'DOMContentLoaded',
    () => {
        slider();
        slider2();
        slider3();
        slider4();
        slider5();
        slider6();
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

// код для третьего слайдера
const slider3 = () => {
  if (!swiperContainer3) {
      return ;
  };

  const swiper = new Swiper(swiperContainer3, {
    direction: 'horizontal',
    slidesPerView: 3,
    observer: true,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    }
  });
}

const slider4 = () => {
  if (!swiperContainer4) {
      return ;
  };

  const swiper = new Swiper(swiperContainer4, {
    direction: 'horizontal',
    slidesPerView: 4,
    observer: true,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    }
  });
}

const slider5 = () => {
  if (!swiperContainer5) {
      return ;
  };

  const swiper = new Swiper(swiperContainer5, {
    direction: 'horizontal',
    slidesPerView: 4,
    observer: true,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next5',
      prevEl: '.swiper-button-prev5',
    }
  });
}

const slider6 = () => {
  if (!swiperContainer6) {
      return ;
  };

  const swiper = new Swiper(swiperContainer6, {
    direction: 'horizontal',
    slidesPerView: 4,
    observer: true,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next6',
      prevEl: '.swiper-button-prev6',
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