'use strict';


$(document).ready(function () {
    changePosition();
    
//    changeColor();
    scrollSlow();

    
});

$(window).scroll(function() {
    changePosition();
})
                  
function changePosition() {
    var wysokosc = $('.container-fluid').height();
    
    if ($(window).width() >= 786) {
    
    if ($(window).scrollTop() >= wysokosc) {

        $('.container-fluid').addClass('klasa');

    } else {
        $('.container-fluid').removeClass('klasa');

    }
}
};



//function changeColor() {
//    var szerokosc = $(window).width();
//    console.log(szerokosc);
//    
//    if ($(szerokosc) >= 768) {
//
//        $('#nawigacja').addClass('klasa2');
//        $('.navbar-brand').addClass('klasa3');
//        $('.nav li').addClass('klasa3');
//
//    } else {
//        $('#nawigacja').removeClass('klasa2');
//        $('.navbar-brand').removeClass('klasa3');
//        $('.container-fluid a').removeClass('klasa3');
//        
//    }
//};


function scrollSlow() {

// Add smooth scrolling to all links
  $("a").on('click', function(event) {
      console.log(this.hash);
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 20
      }, 500, 
//                              function(){
//   
//        // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
//      }
                             );
    } // End if
  });};



