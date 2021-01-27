$(document).on("ready", function () {

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
    };
    colorMenu();
  });



});
