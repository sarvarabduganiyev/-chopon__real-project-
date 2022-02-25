const mobileMenu = document.querySelector(".mobileMenu");
const svg = document.querySelector(".menuSvg");

svg.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  document.querySelector("body").classList.toggle("overflow-hidden");
})

// ====
const windowWidth = window.screen.availWidth;
console.log(windowWidth);

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 3,
  spaceBetween: 50,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 480px
    900: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1166: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  // slidesPerGroup: 3,
  loop: true,
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


