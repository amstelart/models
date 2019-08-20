// Если на проекте jQuery
$( document ).ready(function() {

  //animate header
  var fixNav = 120;
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if ( scroll >= fixNav ) {
        $('.page-header').addClass('page-header--sticky');
      }
      else {
          $('.page-header').removeClass('page-header--sticky');
      }
  });
  //animate header end

  var mainNav = $('.page-header'),
      contentSections = $('.scroll-section');

  $(window).on('scroll', function(){

		//on desktop - update the active link in the secondary fixed navigation
		updatemainNavigation();
	});

  function updatemainNavigation() {
		contentSections.each(function(){
			var actual = $(this),
				actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
				actualAnchor = mainNav.find('a[href="#'+actual.attr('id')+'"]');
			if ( ( actual.offset().top - mainNav.height() <= $(window).scrollTop() ) && ( actual.offset().top +  actualHeight - mainNav.height() > $(window).scrollTop() ) ) {
				actualAnchor.addClass('active');
			}else {
				actualAnchor.removeClass('active');
			}
		});
	}

  //smooth scrolling when clicking on the secondary navigation items
	mainNav.find('ul a').on('click', function(event){
      event.preventDefault();
      var target= $(this.hash);
      $('body,html').animate({
      	'scrollTop': target.offset().top - mainNav.height() + 1
      	}, 400
      );
      //on mobile - close secondary navigation
      $('.burger').removeClass('burger--close');
      mainNav.find('.main-nav').removeClass('main-nav--open');
  });

  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var target= $(this.hash);
    $('body,html').animate({
      'scrollTop': target.offset().top - mainNav.height() + 1
      }, 400
    );
  });

  $('#toTop').on('click', function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 300);
  });

  //on mobile - open/close secondary navigation clicking/tapping the .cd-secondary-nav-trigger
	$('.burger').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('burger--close');
		mainNav.find('.main-nav').toggleClass('main-nav--open');
	});

  $(window).on('ariaAccordion.initialised', function (event, element) {
    console.log('initialised');
  });

  $('#accordion-group-faq').ariaAccordion({
    slideSpeed: 200
  });

  $(".reviews-carousel").owlCarousel({
    items: 2,
    nav: false,
    margin: 30,
    loop: true,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: false,
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

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
