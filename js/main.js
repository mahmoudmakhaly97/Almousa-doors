// navbar sticky logic
window.addEventListener("scroll", function () {
       let logo = document.getElementById("logo");
    let bars = document.getElementById("bars");
  var navbar = document.querySelector(".navbar");
  if (window.scrollY >= 58) {
      navbar.classList.add("fixed-top");
      //    navbar.style.background = "#003ea5";
              logo.src = "../images/home/navbar/colored-logo.png";
        bars.classList.remove("text-white");
      navbar.classList.add("nav-bg-white-color");

  
  } else {
    navbar.classList.remove("fixed-top");
      navbar.style.background = "transparent";
      navbar.classList.remove("nav-bg-white-color");
              logo.src = "../images/home/navbar/logo.png";
          bars.classList.add("text-white");
  }
});
 
// start our products logic
$('.products-carousel').owlCarousel({
   loop:true,
    margin:10,
    rtl:true,
    animateOut: 'fadeOut',
    autoplay:true,

    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"], // Replace navigation text with Font Awesome icons

    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
      }, 
        1200:{
            items:6
        }
    }
})
//active link in navbar
   document.addEventListener("DOMContentLoaded", function () {
     const navLinks = document.querySelectorAll(".nav-link");

     const currentUrl = window.location.href;

     navLinks.forEach((link) => {
       if (link.href === currentUrl) {
         link.classList.add("active");

         if (link.closest(".nav-dropdown")) {
           link
             .closest(".nav-item")
             .querySelector(".nav-link")
             .classList.add("active");
         }
       }
     });
   });
//  companies section  logic
$('.companies-carousel').owlCarousel({
   loop:true,
    margin:10,
    rtl:true,
    animateOut: 'fadeOut',
    autoplay:true,

    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"], // Replace navigation text with Font Awesome icons

    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
// shutter window logic 


$('.window-carousel').owlCarousel({
    loop:true,
  margin: 10,
        rtl:true,

    responsiveClass:true,
    responsive:{
     0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// animation on scroll logic
 AOS.init();
// scroll animation logic
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500, // Duration in milliseconds (e.g., 1000ms = 1 second)
    speedAsDuration: true // Ensures that the speed is treated as duration
});
var arrowDown = document.getElementById("scroll-down");

arrowDown.addEventListener("click", function () {
  window.scrollTo({ top:700, behavior: "smooth" });
});

// active link in navbar
document.querySelectorAll('.dropdown-item').forEach(function(dropdownItem) {
    dropdownItem.addEventListener('click', function(event) {
         document.querySelectorAll('.nav-link').forEach(function(navLink) {
            navLink.classList.remove('active-link');
        });

         const parentNavLink = event.target.closest('.dropdown').querySelector('.nav-link');
        parentNavLink.classList.add('active-link');
    });
});
