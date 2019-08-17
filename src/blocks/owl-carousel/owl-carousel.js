$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    items: 2,
    nav: true,
    margin: 30,
    loop: true,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 1,
      },
      768 : {
        items: 1,
      },
      992 : {
        items: 2,
      },
      1200 : {
        items: 2,
      },
      1800 : {
        items: 2,
      }
    }
  });

});
