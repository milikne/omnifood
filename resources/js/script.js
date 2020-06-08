$(document).ready(function() {

  $('.js-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });

  $('.js-hungry').click(function() {
    $('html, body').animate({scrollTop: $('.js-plans').offset().top}, 1000)
  });

  $('.js-more').click(function() {
    $('html, body').animate({scrollTop: $('.js-features').offset().top}, 1000)
  });

  /* Animations on scroll */
    $('.js-wp-1').waypoint(function(direction) {
      $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

});
