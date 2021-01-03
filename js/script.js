$(document).on( "ready", function(){  
  
  // Смена цвета иконок бокового меню при скролле
  var target = $(".blue-circle-voucher");
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).on("scroll", (function () {
    var winScrollTop = $(this).scrollTop();
    var winScrollBottom =
      $(this).scrollTop() - $(window).height() - $(target).height();
    if (winScrollTop > scrollToElem && winScrollBottom < scrollToElem) {
      $(".icon-svg").attr("class", "icon-svg active-color-svg");
      // $(".icon-svg").addClass("active-color-svg");
      $(".decor-line, .navbar-toggler-icon").addClass("active-color");
    } else {
      $(".icon-svg").attr("class", "icon-svg");
      // $(".icon-svg").removeClass("active-color-svg");
      $(".decor-line, .navbar-toggler-icon").removeClass("active-color");
    }
  }));
  
  //Карусель =========================================
  $(".owl-carousel").owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    lazyLoad: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60,
      },
      600: {
        items: 1,
        stagePadding: 100,
      },
      1000: {
        items: 1,
        stagePadding: 200,
      },
      1200: {
        items: 1,
        stagePadding: 250,
      },
      1400: {
        items: 1,
        stagePadding: 300,
      },
      1600: {
        items: 1,
        stagePadding: 350,
      },
      1800: {
        items: 1,
        stagePadding: 400,
      },
    },
  });
});

