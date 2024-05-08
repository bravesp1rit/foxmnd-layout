void function () {
  'use strict';

  const navOpenBtn = document.querySelector('.header-img');
  const navMenu = document.querySelector('nav');
  const navCloseBtn = document.querySelector('.nav-close-btn');
  const navItem = document.querySelectorAll('.nav-item');
  const blurBackground = document.querySelector('.background-blur');
  const slidesRow = document.querySelector('.testimonials-slides');
  const sliderLeftBtn = document.querySelector('.slider-left-btn');
  const sliderRightBtn = document.querySelector('.slider-right-btn');
  let currentPosition = 1;


  sliderLeftBtn.addEventListener('click', () => {
    if (currentPosition === 1) {
      slidesRow.style.left = "-200%";
      currentPosition = 3;
    } else if (currentPosition === 2) {
      slidesRow.style.left = "0";
      currentPosition = 1;
    } else if (currentPosition === 3) {
      slidesRow.style.left = "-100%";
      currentPosition = 2;
    }
  })

  sliderRightBtn.addEventListener('click', () => {
    if (currentPosition === 1) {
      slidesRow.style.left = "-100%";
      currentPosition = 2;
    } else if (currentPosition === 2) {
      slidesRow.style.left = "-200%";
      currentPosition = 3;
    } else if (currentPosition === 3) {
      slidesRow.style.left = "0";
      currentPosition = 1;
    }
  })

  navOpenBtn.addEventListener('click', () => {
    if (navMenu.classList.contains('nav-menu-open')) {
      navMenu.classList.remove('nav-menu-open');
      blurBackground.classList.remove('background-blur-active');
    } else {
      navMenu.classList.add('nav-menu-open');
      blurBackground.classList.add('background-blur-active');
    }
  })

  navCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu-open');
    blurBackground.classList.remove('background-blur-active');
  })

  navItem.forEach(item => {
    item.addEventListener('click', () => {
      navMenu.classList.remove('nav-menu-open');
      blurBackground.classList.remove('background-blur-active');
    })
  })

}()