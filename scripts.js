const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    728: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
