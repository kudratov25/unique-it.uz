// navbar scroll down hide function
document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  
  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  // document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
  // if

}); 



// Can also be included with a regular script tag
// typed script
let typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  startDelay: 1000,
  typeSpeed: 80,
  backDelay: 2000,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
  backSpeed: 30,
});

let typed2 = new Typed("#typed2", {
  stringsElement: "#typed-strings2",
  startDelay: 1000,
  typeSpeed: 80,
  backDelay: 2000,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
  backSpeed: 30,
});
let typed3 = new Typed("#typed3", {
  stringsElement: "#typed-strings3",
  startDelay: 1000,
  typeSpeed: 80,
  backDelay: 2000,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
  backSpeed: 30,
});

// slick js
$(document).ready(function () {
  $(".carousel-slick").slick({
    infinite: true,
    autoplaySpeed: 1500,
    autoplay:true,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 6,
    slidesToScroll:2, 
    // dots:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ] 
  });
  
  
});
