$(document).on( "ready", function(){  
  
  // Смена цвета иконок бокового меню при скролле
  var target1 = $(".blue-circle-voucher");
  var target2 = $(".sec-form");
  var targetPos1 = target1.offset().top;
  var targetPos2 = target2.offset().top;
  var winHeight = $(window).height();
  var scrollToElem1 = targetPos1 - winHeight;
  var scrollToElem2 = targetPos2 - winHeight;
  $(window).on("scroll", function () {
    var winScrollTop = $(this).scrollTop();
    var winScrollBottom1 = $(this).scrollTop() - $(window).height() - $(target1).height();
    var winScrollBottom2 = $(this).scrollTop() - $(window).height() - $(target2).height();
    if (winScrollTop > scrollToElem1 && winScrollBottom1 < scrollToElem1 || winScrollTop > scrollToElem2) {
      $(".icon-svg").attr("class", "icon-svg active-color-svg");
      $(".decor-line, .navbar-toggler-icon").addClass("active-color");
    } else {
      $(".icon-svg").attr("class", "icon-svg");
      $(".decor-line, .navbar-toggler-icon").removeClass("active-color");
    }
  });
 


  // Слайдер
  $(".center").slick({
    centerMode: true,
    centerPadding: "50px",
    variableWidth: true,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });


});

