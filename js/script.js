

$(document).ready(function () {


  /* For the sticky navigation (this is JavaScript Plug-in) */

  $('.js--geometrics').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');

    }
  }, {
      offset: '10px;'

    });


  /* Navigation scroll - performs a smooth page scroll to an anchor on the same page (This is jQuery snippet) */

  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


  /* Mobile nav */

  $('.js--fa-fa-bars').click(function () {
    var nav = $('.js--main-nav');
    // var icon = $('.js--fa-fa-bars');

    nav.slideToggle(200);



});
});

