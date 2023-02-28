export class Slider {
  constructor()
  {
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 690px
        690: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
        },
        // when window width is >= 999px
        999: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        }
      }
    });
  }
}
