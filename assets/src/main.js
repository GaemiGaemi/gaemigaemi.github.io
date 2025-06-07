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




function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000); // 1초마다 갱신
updateClock(); // 초기 한번 실행