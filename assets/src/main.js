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



let images = document.querySelectorAll('#slideshow img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // 3초마다 이미지 전환
