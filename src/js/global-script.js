// Если на проекте jQuery
$( document ).ready(function() {

  $(window).on('ariaAccordion.initialised', function (event, element) {
    console.log('initialised');
  });

  $('#accordion-group-faq').ariaAccordion({
    slideSpeed: 200
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
