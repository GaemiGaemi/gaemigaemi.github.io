'use strict';

let scrollA = 0;
const nav=document.querySelector('nav');

window.addEventListener('scroll',()=>{
  if(scrollA < window.scrollY) {
    nav.classList.add('nav--up');
  }else {
    nav.classList.remove('nav--up');
  }
  scrollA = window.scrollY;
});


document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('#slideshow img');
  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, 3000); // 3초마다 슬라이드 변경
});