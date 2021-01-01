$(document).ready(function(){   
  var target = $(".blue-circle-voucher");
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    var winScrollBottom =
      $(this).scrollTop() - $(window).height() - $(target).height();
    if (winScrollTop > scrollToElem && winScrollBottom < scrollToElem) {
      $(".icon").addClass("active-color-svg");
      $(".decor-line, .navbar-toggler-icon").addClass("active-color");
    } else {
      $(".icon").removeClass("active-color-svg");
      $(".decor-line, .navbar-toggler-icon").removeClass("active-color");
    }
  });
});