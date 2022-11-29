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
})


