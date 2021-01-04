$(document).on( "ready", function(){  
  
  // Смена цвета иконок бокового меню при скролле
  var target = $(".blue-circle-voucher");
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).on("scroll", function () {
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
  });
  


  // Слайдер
  $(".center").slick({
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });


});

