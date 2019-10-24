

$(document).ready(function () {


    /* For the sticky navigation */

  $('.js--geometrics').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');

    }
  }, {
    offset: '10px;'

  });
});