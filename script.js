// Preloader
const body = document.getElementById('home');
const preloader = document.getElementById('preloader');

function preloaderFunc() {
  preloader.style.display = 'none';
  body.style.overflow = 'initial';
}
window.addEventListener('load' , preloaderFunc());
// NavBar
const hamburger = document.querySelector('.fa-bars');
const cross = document.querySelector('.fa-times');
const cross2 = document.querySelector('.cross2');
const nav = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.nav-link');
const moreBtn = document.querySelector('.more-link');
const dropdown = document.querySelector('.dropdown');

function toggleNav() {
  nav.classList.toggle('show-nav');
  hamburger.classList.toggle('fa-times');
}
function toggleDropdown() {
  dropdown.classList.toggle('show-dropdown');
}
function removeNav() {
  nav.classList.remove('show-nav');
  dropdown.classList.remove('show-dropdown');
  hamburger.classList.remove('fa-times');
}
function eRemoveNav(e) {
  if(nav.contains(e.target) + hamburger.contains(e.target)) {

  }
  else {
    removeNav();
  }
}
hamburger.addEventListener('click' , toggleNav);
cross2.addEventListener('click' , removeNav);
navLink.forEach(n => n.addEventListener('click' , removeNav));
window.addEventListener('click' , eRemoveNav);
moreBtn.addEventListener('click' , toggleDropdown);
// Scroll Nav
const navSection = document.querySelector('.nav-section');
const navScrollHeight = navSection.offsetHeight;
function scrollNav() {
  const scrollLength = window.scrollY;
  if (scrollLength >= navScrollHeight) {
      navSection.classList.add('nav-sticky');
  }
  else {
      navSection.classList.remove('nav-sticky');
  }
  console.log(scrollLength);
}
window.addEventListener('scroll' , scrollNav);
// Jump Bookmark
function jumptoHome() {
  let section = document.querySelector('#home');
  window.scrollTo(section.offsetLeft, section.offsetTop);
}
function jumptoAbout() {
  let section = document.querySelector('#about');
  window.scrollTo(section.offsetLeft, section.offsetTop);
}
function jumptoServices() {
  let section = document.querySelector('#services');
  window.scrollTo(section.offsetLeft, section.offsetTop);
}
function jumptoBooking() {
  let section = document.querySelector('#booking');
  window.scrollTo(section.offsetLeft, section.offsetTop);
}
function jumptoPricing() {
  let section = document.querySelector('#pricing');
  window.scrollTo(section.offsetLeft, section.offsetTop);
}
function jumptoChoose() {
  let section = document.querySelector('#choose');
  window.scrollTo(section.offsetLeft, section.offsetTop);
}
function jumptoProcess() {
  let section = document.querySelector('#process');
  window.scrollTo(section.offsetLeft, section.offsetTop);
}
function jumptoTestimonial() {
  let section = document.querySelector('#testimonial');
  window.scrollTo(section.offsetLeft, section.offsetTop);
}
function jumptoContact() {
  let section = document.querySelector('#contact');
  window.scrollTo(section.offsetLeft, section.offsetTop);
}
// Slick Slider
$(document).ready(function(){
    $('.testimonial-slider').slick({
        prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
});