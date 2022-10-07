new Swiper('.swiper', {
    // loop: true,
    navigation: {
        nextEl: '.portfolio__arrow_right',
        prevEl: '.portfolio__arrow_left',
      },
      breakpoints: {
        480: {
            grid: {
                fill: 'row',
                rows: 2,
              },
            },
          // when window width is >= 768px
        768: {
            grid: {
                fill: 'row',
                rows: 2,
              },
             slidesPerView: 2,
            },

      }
  });