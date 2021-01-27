$(document).on( "ready", function(){
  // Смена цвета иконок бокового меню при скролле

  $(window).on("scroll", function () {
    var winScrollTop = $(this).scrollTop();
    function colorMenu() {
      if (window.innerWidth > 992) {
        var target1 = $(".blue-circle-voucher");
        var target2 = $(".sec-form");
        var targetPos1 = target1.offset().top;
        var targetPos2 = target2.offset().top;
        var winHeight = $(window).height();
        var winScrollBottom1 =
          $(this).scrollTop() - winHeight - $(target1).height();
        var winScrollBottom2 =
          $(this).scrollTop() - winHeight - $(target2).height();
        var scrollToElem1 = targetPos1 - winHeight;
        var scrollToElem2 = targetPos2 - winHeight;
        if (
          (winScrollTop > scrollToElem1 && winScrollBottom1 < scrollToElem1) ||
          (winScrollTop > scrollToElem2 && winScrollBottom2 < scrollToElem2)
        ) {
          $(".icon-svg").attr("class", "icon-svg active-color-svg");
          $(".navbar-toggler span").addClass("active-color");
          $(".decor-line").attr("class", "decor-line active-color");
        } else {
          $(".icon-svg").attr("class", "icon-svg");
          $(".navbar-toggler span").removeClass("active-color");
          $(".decor-line").attr("class", "decor-line");
        }
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
      } else if (scroll > top) {
        $(".decor-line").addClass("active-animate-svg-top");
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
          if (
            !firstClick &&
            $(e.target).closest(".menu-collapse").length == 0
          ) {
            $menu_toggle.removeClass("menu-collapse-active");
            $(".navbar-toggler").removeClass("navbar-toggler-active");
            $(document).unbind("click.myEvent");
          }
          firstClick = false;
        });
        $(".nav-link").on("click", function () {
          $menu_toggle.removeClass("menu-collapse-active");
          $(".navbar-toggler").removeClass("navbar-toggler-active");
          $(document).unbind("click.myEvent");
        });
      }
      e.preventDefault();
    });
  }
  menuHideShow();

  // Плавная прокрутка якорей
  $("a[href*='#']").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top,
        },
        777
      );
    e.preventDefault();
    return false;
  });

  // Меню для скачивания брифа
  function menu_brief() {
    $(".menu-brief").on("click", function () {
      $(this).addClass("active-menu-brief");
      $(".menu-brief__close").addClass("menu-brief__close-active");
      setTimeout(function () {
        $(".menu-brief__list").addClass("active-menu-brief__list");
      }, 700);
    });
    $(".menu-brief__close").on("click", function () {
      $(this).removeClass("menu-brief__close-active");
      $(".menu-brief").removeClass("active-menu-brief");
      $(".menu-brief__list").removeClass("active-menu-brief__list");
    });
  };
  menu_brief();

  // Открытие модального окна
  function btn_modal() {
    $(".link__btn-brief").on("click", function () {
      $(".modal-wrapper").addClass("active-modal");
    });
    $(".m-w__close").on("click", function () {
      $(".modal-wrapper").removeClass("active-modal");
    });
  };
  btn_modal();

  // Выпадающий список в форме модального окна
  function btn_dropdown() {
    $(".dropbtn").on("click", function () {
      $(this).toggleClass("dropbtn-active");
      $(".dropdown-content").toggleClass("dropdown-content-active");
    });
  };
  btn_dropdown();






  // Динамика модального окна

  function text_modal_dynamic() {

    $("#des_gn_site").on("click", function () {
      $("#title_form").find("h3").remove();
      $("#title_form").append("<h3> Веб-дизайн сайта </h3>");

      $("#link_mod_brief").find("a").remove();
      $("#link_mod_brief").append('<a href="https://drive.google.com/file/d/1qi4cEAH4lthkLhSKLgMGndTsDgTauoUP/view?usp=sharing" ' + 
      ' target="_blank" class="link__btn link__btn-brief" id="link-b">' + 
      ' <span class="btn-fone"></span> Скачать бриф </a>');

      $("#offer_modal").find("p").remove();
      $("#offer_modal").append('<p> Осуществляем грамотный подход по созданию веб дизайна сайтов, что в конечном итоге даст ' +
      ' Вам мощный инструмент для получения устойчивого конкурентного преимущества.</p>');


    });

    $("#dev_nt_site").on("click", function () {
      $("#title_form").find("h3").remove();
      $("#title_form").append("<h3> Верстка сайта </h3>");

      $("#link_mod_brief").find("a").remove();
      $("#link_mod_brief").append('<a href="https://drive.google.com/file/d/12OYCPj8JHVx_i0XHblmq7-subza7m1r2/view?usp=sharing"' + 
      ' target="_blank" class="link__btn link__btn-brief" id="link-b">' + 
      ' <span class="btn-fone"></span> Скачать бриф </a>');

      $("#offer_modal").find("p").remove();
      $("#offer_modal").append('<p> Осуществляем грамотный подход по разработке веб сайтов, что в конечном итоге даст ' +
      ' Вам мощный инструмент для получения устойчивого конкурентного преимущества.</p>');

    });

    $("#logo_site").on("click", function () {
      $("#title_form").find("h3").remove();
      $("#title_form").append("<h3> Разработка логотипа </h3>");

      $("#link_mod_brief").find("a").remove();
      $("#link_mod_brief").append('<a href="https://drive.google.com/file/d/1rlVg3pcshIKEz6cY3--kNz3yAW2w712W/view?usp=sharing"' + 
      ' target="_blank" class="link__btn link__btn-brief" id="link-b">' + 
      ' <span class="btn-fone"></span> Скачать бриф </a>');

      $("#offer_modal").find("p").remove();
      $("#offer_modal").append('<p> Осуществляем грамотный подход по созданию логотипов для вашего бизнеса, что повысит узнаваемость вашего бренда.</p>');


    });
    
  };

  text_modal_dynamic();


  // Скролл кнопка
  function scrollBtn() {
    var btn = $(".button_scroll");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });
    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
  };

  scrollBtn();



  // // menu_fixed скрипт закреплённого меню

  // function menu_fixed() {

  //   var h_hght = 115; // высота шапки
  //   var h_mrg = 0; // отступ когда шапка уже не видна

  //   $(function () {
  //     var elem = $(header);
  //     var top = $(this).scrollTop();

  //     if (top > h_hght) {
  //       elem.css("top", h_mrg);
  //     }

  //     $(window).scroll(function () {
  //       top = $(this).scrollTop();

  //       if (top + h_mrg < h_hght) {
  //         elem.css("top", h_hght - top);
  //       } else {
  //         elem.css("top", h_mrg);
  //       }
  //     });
  //   });
  // };

  // menu_fixed();

	
	                 
	


  

  












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

