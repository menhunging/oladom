addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  if (currentScroll > 0) {
    $(".header").addClass("fixed");
    $(".sidebar").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
    $(".sidebar").removeClass("fixed");
  }
});

$(document).ready(function () {
  // if ($(".burger").length > 0) {
  //   let menu = $(".header-new-bottom");
  //   let burger = $(".burger");
  //   let burgerСlose = $(".btn-close");
  //   let body = $("body");
  //   burger.on("click", function () {
  //     if (menu.hasClass("opened")) {
  //       closeMenu();
  //     } else {
  //       burger.addClass("opened");
  //       menu.addClass("opened").slideDown();
  //       body.addClass("hidden");
  //       $(document).mouseup(function (e) {
  //         if (
  //           !menu.is(e.target) &&
  //           menu.has(e.target).length === 0 &&
  //           !burger.is(e.target)
  //         ) {
  //           closeMenu();
  //         }
  //       });
  //     }
  //   });
  //   burgerСlose.on("click", function () {
  //     closeMenu();
  //   });
  //   function closeMenu() {
  //     burger.removeClass("opened");
  //     menu.removeClass("opened").slideUp();
  //     body.removeClass("hidden");
  //     $(document).off("mouseup");
  //   }
  // }

  // if ($(".faq").length > 0) {
  //   $(".faq-head").on("click", function () {
  //     $(this).toggleClass("opened").next(".faq-body").stop().slideToggle();
  //   });
  // }

  // if ($(".slider-hot").length > 0) {
  //   const swiper = new Swiper(".slider-hot", {
  //     slidesPerView: 4,
  //     spaceBetween: 16,
  //     watchSlidesProgress: true,
  //     loop: false,
  //     navigation: {
  //       prevEl: ".hot-deals .swiperBtnPrev",
  //       nextEl: ".hot-deals .swiperBtnNext",
  //     },
  //     breakpoints: {
  //       0: {
  //         slidesPerView: 1.25,
  //         spaceBetween: 16,
  //       },
  //       390: {
  //         slidesPerView: 1.5,
  //         spaceBetween: 16,
  //       },
  //       768: {
  //         slidesPerView: 2,
  //         spaceBetween: 16,
  //       },
  //       1024: {
  //         slidesPerView: 3,
  //         spaceBetween: 16,
  //       },
  //       1280: {
  //         slidesPerView: 4,
  //         spaceBetween: 16,
  //       },
  //     },
  //   });
  // }
  // if ($(".slider-attractions").length > 0) {
  //   const sliders = document.querySelectorAll(".slider-attractions");
  //   let mySwipers = [];
  //   function sliderinit() {
  //     sliders.forEach((slider, index) => {
  //       let prev = $(slider).closest(".attractions").find(".swiperBtnPrev")[0];
  //       let next = $(slider).closest(".attractions").find(".swiperBtnNext")[0];
  //       if (!slider.swiper) {
  //         mySwipers[index] = new Swiper(slider, {
  //           slidesPerView: 4,
  //           spaceBetween: 16,
  //           watchSlidesProgress: true,
  //           loop: false,
  //           navigation: {
  //             prevEl: prev,
  //             nextEl: next,
  //           },
  //           on: {
  //             init: function (swiper) {},
  //             slideChange: function (swiper) {},
  //           },
  //           breakpoints: {
  //             0: {
  //               slidesPerView: 1.2,
  //               spaceBetween: 16,
  //               grid: {
  //                 rows: 2,
  //                 fill: "row",
  //               },
  //             },
  //             390: {
  //               slidesPerView: 2,
  //               spaceBetween: 18,
  //               grid: {
  //                 rows: 2,
  //                 fill: "row",
  //               },
  //             },
  //             768: {
  //               slidesPerView: 3,
  //               spaceBetween: 16,
  //             },
  //             1024: {
  //               slidesPerView: 4,
  //               spaceBetween: 16,
  //             },
  //             1280: {
  //               slidesPerView: 4,
  //               spaceBetween: 16,
  //             },
  //           },
  //         });
  //       } else {
  //         return;
  //       }
  //     });
  //   }
  //   sliders.length && sliderinit();
  // }

  if ($(".selectric").length > 0) {
    $(".selectric").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".grettings-slider").length > 0) {
    $(".grettings").hover(function () {
      $(".grettings").addClass("anim-paused");
    });

    $(".grettings").mouseleave(function () {
      $(".grettings").removeClass("anim-paused");
    });

    const swiperGrettings = new Swiper(".grettings-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      on: {
        init: function (swiper) {},
        slideChange: function (swiper) {},
      },
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
    });

    swiperGrettings.el.addEventListener("mouseenter", () => {
      swiperGrettings.autoplay.stop();
    });

    swiperGrettings.el.addEventListener("mouseleave", () => {
      swiperGrettings.autoplay.start();
    });
  }

  if ($(".our-projects__slider").length > 0) {
    const swiperGrettings = new Swiper(".our-projects__slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
      // loop: true,
      // effect: "fade",
      // fadeEffect: { crossFade: true },
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      on: {
        init: function (swiper) {},
        slideChange: function (swiper) {},
      },
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
    });
  }

  if ($(".product-slider").length > 0) {
    const swiperProduct = new Swiper(".product-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
    });
  }

  if ($(".slider-media").length > 0) {
    const swiperGrettings = new Swiper(".slider-media", {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
      // loop: true,
      // effect: "fade",
      // fadeEffect: { crossFade: true },
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
    });
  }

  if ($(".marquee-block__slider").length > 0) {
    const swiper = new Swiper(".marquee-block__slider", {
      slidesPerView: 1,
      spaceBetween: 32,
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  }

  if ($(".product-market__slider").length > 0) {
    const swiperProductSmall = new Swiper(".product-market__small", {
      slidesPerView: 5,
      spaceBetween: 16,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        390: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 7,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      },
    });

    const swiperMarketProduct = new Swiper(".product-market__slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
      thumbs: {
        swiper: swiperProductSmall,
      },
    });
  }

  if ($(".product-characteristics-row__color").length > 0) {
    $(".product-characteristics-row__color").on("click", function () {
      $(this)
        .toggleClass("opened")
        .next(".product-characteristics-row__color__list")
        .stop()
        .slideToggle();
    });

    $(".product-characteristics-row__change").on("click", function () {
      $(".product-characteristics-row__color").removeClass("opened");
      $(".product-characteristics-row__color__list").stop().slideUp();
    });

    $(document).on("click", function (event) {
      if (
        !$(event.target).closest(
          ".product-characteristics-row__color, .product-characteristics-row__color__list"
        ).length
      ) {
        $(".product-characteristics-row__color").removeClass("opened");
        $(".product-characteristics-row__color__list").stop().slideUp();
      }
    });
  }

  if ($(".product-description__more").length > 0) {
    $(".product-description__more").on("click", function (event) {
      event.preventDefault();
      if ($(this).hasClass("active")) {
        let text = $(this).attr("data-text");
        $(this)
          .removeClass("active")
          .prev(".product-description__text")
          .removeClass("active");
        $(this).text(text);
      } else {
        let text = $(this).attr("data-text-active");
        $(this).text(text);
        $(this)
          .addClass("active")
          .prev(".product-description__text")
          .addClass("active");
      }
    });
  }

  if ($(".product-market__media").length > 0) {
    const swiper = new Swiper(".product-market__media", {
      slidesPerView: 1,
      spaceBetween: 32,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
      },
    });
  }

  if ($(".grettings-market-slider").length > 0) {
    const swiperGrettingsMarket = new Swiper(".grettings-market-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span>0${current}</span> <span class="line"></span> <span>0${total}</span> `;
        },
      },
    });
  }

  if ($(".sortBlock").length > 0) {
    $(".sortBlock").on("click", function () {
      $(this)
        .toggleClass("opened")
        .find(".sortBlock__list")
        .stop()
        .slideToggle();
    });
    $(document).on("click", function (event) {
      if (!$(event.target).closest(".sortBlock").length) {
        $(".sortBlock").removeClass("opened");
        $(".sortBlock__list").stop().slideUp();
      }
    });
  }

  if ($(".filter-head").length > 0) {
    $(".filter-head").on("click", function () {
      $(this).toggleClass("opened").next(".filter-body").stop().slideToggle();
    });
  }

  if ($(".btn-filter").length > 0) {
    $(".btn-filter").on("click", function () {
      $(".filter").toggleClass("opened");
    });

    $(document).on("click", function (event) {
      if (!$(event.target).closest(".btn-filter, .filter").length) {
        $(".filter").removeClass("opened");
      }
    });
  }

  if ($(".faq-block__quest").length > 0) {
    $(".faq-block__quest").on("click", function () {
      $(this).toggleClass("opened").next().stop().slideToggle();
    });
  }

  // if ($(".filter-head").length > 0) {
  //   const filterWrapper = $(".filter-wrapper");
  //   const filter = $(".filter");
  //   const offsetTop = filterWrapper.offset().top - 150;

  //   $(window).on("scroll", function () {
  //     if ($(window).scrollTop() >= offsetTop) {
  //       filter.addClass("fixed");
  //     } else {
  //       filter.removeClass("fixed");
  //     }
  //   });
  // }
});
