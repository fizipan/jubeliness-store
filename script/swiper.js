var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  preloadImages: false,
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hideOnClick: true,
  },
  breakpoints: {
    365: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
