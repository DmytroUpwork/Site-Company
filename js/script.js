$(document).on( "ready", function(){
  // Смена цвета иконок бокового меню при скролле 
  


  $(window).on("scroll", function () {

    var winScrollTop = $(this).scrollTop();

    function colorMenu() {
      var target1 = $(".blue-circle-voucher");
      var target2 = $(".sec-form");
      var targetPos1 = target1.offset().top;
      var targetPos2 = target2.offset().top;
      var winHeight = $(window).height();
      var winScrollBottom1 = $(this).scrollTop() - winHeight - $(target1).height();
      var winScrollBottom2 = $(this).scrollTop() - winHeight - $(target2).height();
      var scrollToElem1 = targetPos1 - winHeight;
      var scrollToElem2 = targetPos2 - winHeight;
      if ( (winScrollTop > scrollToElem1 && winScrollBottom1 < scrollToElem1) || (winScrollTop > scrollToElem2 && winScrollBottom2 < scrollToElem2) ) {
        $(".icon-svg").attr("class", "icon-svg active-color-svg");
        $(".navbar-toggler span").addClass("active-color");
        $(".decor-line").attr("class", "decor-line active-color");
      } 
      else {
        $(".icon-svg").attr("class", "icon-svg");
        $(".navbar-toggler span").removeClass("active-color");
        $(".decor-line").attr("class", "decor-line");
      }
    }
    function butMenuHideShow() {
      if (window.innerWidth > 992) {
        if (winScrollTop > 100) {
          $(".navbar-toggler").addClass("but-navbar-z-index");
        } else {
          $(".navbar-toggler").removeClass("but-navbar-z-index");
        }
      } else {
        $(".navbar-toggler span").attr("class", "");
      }
    }
    function onScroll() {
      var top = window.pageYOffset;
      if (scroll < top) {
        $(".decor-line").addClass("active-animate-svg-bottom");
        $(".menu-collapse").removeClass("menu-collapse-active");
        $(".navbar-toggler").removeClass("navbar-toggler-active");
      } else if (scroll > top) {
        $(".decor-line").addClass("active-animate-svg-top");
        $(".menu-collapse").removeClass("menu-collapse-active");
        $(".navbar-toggler").removeClass("navbar-toggler-active");
      }
      
      scroll = top;
    }

    // Вызовы функций
    colorMenu();
    butMenuHideShow();
    onScroll();
  });

 




  // Код закрытия и открытия меню при нажатии на элемент + его скрытие при клике на документ
  function menuHideShow() {
    $(".navbar-toggler").click(function (e) {
      $(this).addClass("navbar-toggler-active");
      var $menu_toggle = $(".menu-collapse");
      if ($menu_toggle.attr("class", "menu-collapse")) {
        $menu_toggle.addClass("menu-collapse-active");
        var firstClick = true;
        $(document).bind("click.myEvent", function (e) {
          if (!firstClick && $(e.target).closest(".menu-collapse").length == 0) {
            $menu_toggle.removeClass("menu-collapse-active");
            $(".navbar-toggler").removeClass("navbar-toggler-active");
            $(document).unbind("click.myEvent");
          }
          firstClick = false;
        });
      }
      e.preventDefault();
    });
  };

  menuHideShow();
  


  
  // Слайдер
  $(".center").slick({
    centerMode: true,
    centerPadding: "50px",
    variableWidth: true,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
    ],
  });







});

