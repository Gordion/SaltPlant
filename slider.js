  $(document).ready(function(){
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      // autoplay: true,
      arrows: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    var rev = $('.slider2');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
  speed: 1000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
/*  prevArrow: '<button> prev</button>',
  nextArrow: '<button> next</button>',*/
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  customPaging: function(slider2, i) {
    return '';
  },
  /*infinite: false,*/
});

//    // On swipe event
// $('.slider').on('swipe', function(event, slick, direction){
// console.log(direction);
// // left
// });
//
// // On edge hit
// $('.slider').on('edge', function(event, slick, direction){
// console.log('edge was hit')
// });
//
// // On before slide change
// $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
// console.log(nextSlide);
// });
//
// // Add a slide
// $('.slider').slick('slickAdd',"<div></div>");
//
// // Get the current slide
// var currentSlide = $('.slider').slick('slickCurrentSlide');
//
// $('.slider').slick('setPosition');

  });
