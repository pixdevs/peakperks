import { initScrollAnimations, initParallax } from './animations.js';
import { initNavigation } from './navigation.js';
import { initContactForm } from './form.js';

// Initialize Swiper
const initSwiper = () => {
  const swiper = new Swiper('.hero-carousel', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
  try {
    initNavigation();
    initScrollAnimations();
    initParallax();
    initContactForm();
    initSwiper();
  } catch (error) {
    console.error('Error initializing modules:', error);
  }
});