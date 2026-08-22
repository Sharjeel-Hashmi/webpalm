// ==================================================
// * Project Name   :  Web Application & Software Development in Dublin | WebPalm</title>
// * Project Author :  WebPalm
// ==================================================

(function ($) {
  "use strict";

  // Back To Top - Start
  // --------------------------------------------------
  try {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".backtotop:hidden").stop(true, true).fadeIn();
      } else {
        $(".backtotop").stop(true, true).fadeOut();
      }
    });
    $(".scroll").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 0);
      return false;
    });
  } catch (e) {
    console.warn("Back to top init skipped:", e);
  }
  // Back To Top - End
  // --------------------------------------------------

  // preloader - start
  // --------------------------------------------------
  try {
    $(window).on("load", function () {
      $("#preloader").fadeOut("slow", function () {
        $(this).remove();
      });
    });
  } catch (e) {
    console.warn("Preloader init skipped:", e);
  }
  // preloader - end
  // --------------------------------------------------

  // Mobile Menu Button Class Chnage - Start
  // --------------------------------------------------
  try {
    $(".mobile_menu_btn").on("click", function () {
      $(".mobile_menu_btn > i").toggleClass("far fa-bars fa-solid fa-xmark");
    });
  } catch (e) {
    console.warn("Mobile menu button init skipped:", e);
  }
  // Mobile Menu Button Class Chnage - End
  // --------------------------------------------------

  // Sticky Header - Start
  // --------------------------------------------------
  try {
    if ($(".stricky").length) {
      $(".stricky")
        .addClass("original")
        .clone(true)
        .insertAfter(".stricky")
        .addClass("stricked-menu")
        .removeClass("original");
    }
    $(window).on("scroll", function () {
      if ($(".stricked-menu").length) {
        var headerScrollPos = 150;
        var stricky = $(".stricked-menu");
        if ($(window).scrollTop() > headerScrollPos) {
          stricky.addClass("stricky-fixed");
        } else if ($(this).scrollTop() <= headerScrollPos) {
          stricky.removeClass("stricky-fixed");
        }
      }
    });
  } catch (e) {
    console.warn("Sticky header init skipped:", e);
  }
  // Sticky Header - End
  // --------------------------------------------------

  // Filter Elements - Start
  // --------------------------------------------------
  try {
    if ($(".filter_elements_nav > ul > li").length) {
      $(".filter_elements_nav > ul > li").click(function () {
        var filterValue = $(this).attr("data-filter");
        if (filterValue == "all") {
          $(".filter_elements_wrapper > div").show();
        } else {
          $(".filter_elements_wrapper > div")
            .not("." + filterValue)
            .hide();
          $(".filter_elements_wrapper > div")
            .filter("." + filterValue)
            .show();
        }
      });
      $(".filter_elements_nav > ul > li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
      });
    }
  } catch (e) {
    console.warn("Filter elements init skipped:", e);
  }
  // Filter Elements - End
  // --------------------------------------------------

  // Odometer Counter - Start
  // --------------------------------------------------
  try {
    if ($(".odometer").length) {
      jQuery(".odometer").appear(function (e) {
        var odo = jQuery(".odometer");
        odo.each(function () {
          var countNumber = jQuery(this).attr("data-count");
          jQuery(this).html(countNumber);
        });
      });
    }
  } catch (e) {
    console.warn("Odometer counter init skipped:", e);
  }
  // Odometer Counter - End
  // --------------------------------------------------

  // Pricing Toggle Button - Start
  // --------------------------------------------------
  try {
    if ($(".pricing_toggle_btn > button").length) {
      $(".pricing_toggle_btn > button").on("click", function () {
        $(this).toggleClass("active");
        $(".pricing_block").toggleClass("active");
      });
    }
  } catch (e) {
    console.warn("Pricing toggle init skipped:", e);
  }
  // Pricing Toggle Button - End
  // --------------------------------------------------

  // Videos & Images popup - Start
  // --------------------------------------------------
  try {
    if ($(".video_btn").length) {
      $(".video_btn").magnificPopup({
        type: "iframe",
        preloader: false,
        removalDelay: 160,
        mainClass: "mfp-fade",
        fixedContentPos: false,
      });
    }
    if ($(".zoom-gallery").length) {
      $(".zoom-gallery").magnificPopup({
        delegate: ".popup_image",
        type: "image",
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: "mfp-with-zoom mfp-img-mobile",
        gallery: {
          enabled: true,
        },
        zoom: {
          enabled: true,
          duration: 300,
          opener: function (element) {
            return element.find("img");
          },
        },
      });
    }
  } catch (e) {
    console.warn("Magnific popup init skipped:", e);
  }
  // Videos & Images popup - End
  // --------------------------------------------------

  // Wow JS - Start
  // --------------------------------------------------
  try {
    if ($(".wow").length && typeof WOW !== "undefined") {
      var wow = new WOW({
        animateClass: "animated",
        offset: 100,
        mobile: true,
        duration: 1000,
      });
      wow.init();
    }
  } catch (e) {
    console.warn("WOW init skipped:", e);
  }
  // Wow JS - End
  // --------------------------------------------------

  // Progress Bar - Start
  // --------------------------------------------------
  try {
    if (
      document.getElementById("business_growth") &&
      typeof CircularProgressBar !== "undefined"
    ) {
      const bgGlobalProgress = {
        index: 58,
        speed: 100,
        round: true,
        strokeBottom: 5,
        colorSlice: "#FF6D00",
        colorCircle: "#f1f1f1",
      };
      const bgCircle = new CircularProgressBar(
        "business_growth",
        bgGlobalProgress
      );
      bgCircle.initial();
    }
  } catch (e) {
    console.warn("Circular progress bar init skipped:", e);
  }
  // Progress Bar - End
  // --------------------------------------------------

  // Background Parallax - Start
  // --------------------------------------------------
  try {
    if ($(".parallaxie").length) {
      $(".parallaxie").parallaxie({
        speed: 0.5,
        offset: 0,
      });
    }
  } catch (e) {
    console.warn("Parallax init skipped:", e);
  }
  // Background Parallax - End
  // --------------------------------------------------

  // Client Logo Carousel - Start
  // --------------------------------------------------
  try {
    if ($(".client_logo_carousel").length) {
      var swiperClientLogo = new Swiper(".client_logo_carousel", {
        loop: true,
        speed: 2000,
        freeMode: true,
        centeredSlides: true,
        allowTouchMove: true,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
        breakpoints: {
          376: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1025: {
            slidesPerView: 7,
          },
        },
      });
    }
  } catch (e) {
    console.warn("Client logo carousel init skipped:", e);
  }
  // Client Logo Carousel - End
  // --------------------------------------------------

  // Portfolio Carousel - Start
  // --------------------------------------------------
  try {
    if ($(".portfolio_carousel").length) {
      var swiperPortfolio = new Swiper(".portfolio_carousel", {
        loop: true,
        speed: 400,
        spaceBetween: 30,
        allowTouchMove: true,
        centeredSlides: true,
        pagination: {
          el: ".portfolio-swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1025: {
            slidesPerView: 2,
          },
        },
      });
    }
  } catch (e) {
    console.warn("Portfolio carousel init skipped:", e);
  }
  // Portfolio Carousel - End
  // --------------------------------------------------

  // Team Carousel - Start
  // --------------------------------------------------
  try {
    if ($(".team_carousel").length) {
      var swiperTeam = new Swiper(".team_carousel", {
        loop: true,
        speed: 800,
        spaceBetween: 30,
        allowTouchMove: true,
        centeredSlides: true,
        pagination: {
          el: ".team-swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          1025: {
            slidesPerView: 3,
          },
        },
      });
    }
  } catch (e) {
    console.warn("Team carousel init skipped:", e);
  }
  // Team Carousel - End
  // --------------------------------------------------

  // Blog 1 Col Carousel - Start
  // --------------------------------------------------
  try {
    if ($(".blog_onecol_carousel").length) {
      var blogOneColCarousel = new Swiper(".blog_onecol_carousel", {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".b1cc-swiper-button-next",
          prevEl: ".b1cc-swiper-button-prev",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".b1cc-swiper-pagination",
          clickable: true,
        },
      });
    }
  } catch (e) {
    console.warn("Blog carousel init skipped:", e);
  }
  // Blog 1 Col Carousel - End
  // --------------------------------------------------

  // Review 1 Col Carousel - Start
  // --------------------------------------------------
  try {
    if ($(".review_onecol_carousel").length) {
      var reviewOneColCarousel = new Swiper(".review_onecol_carousel", {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
          nextEl: ".r1cc-swiper-button-next",
          prevEl: ".r1cc-swiper-button-prev",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
      });
    }
  } catch (e) {
    console.warn("Review carousel init skipped:", e);
  }
  // Review 1 Col Carousel - End
  // --------------------------------------------------

  // Service Pill Carousel - Start
  // --------------------------------------------------
  try {
    if ($(".service_pill_carousel").length) {
      var servicePillCarousel = new Swiper(".service_pill_carousel", {
        loop: true,
        speed: 4000,
        spaceBetween: 20,
        navigation: {
          nextEl: ".spc-swiper-button-next",
          prevEl: ".spc-swiper-button-prev",
        },
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
        breakpoints: {
          321: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1025: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        },
      });
    }
  } catch (e) {
    console.warn("Service pill carousel init skipped:", e);
  }
  // Service Pill Carousel - End
  // --------------------------------------------------

  // Review 4 Col Carousel - Start
  // --------------------------------------------------
  try {
    if ($(".review_4col_carousel").length) {
      var review4ColCarousel = new Swiper(".review_4col_carousel", {
        loop: true,
        speed: 1000,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      });
    }
  } catch (e) {
    console.warn("Review 4-col carousel init skipped:", e);
  }
  // Review 4 Col Carousel - End
  // --------------------------------------------------
})(jQuery);