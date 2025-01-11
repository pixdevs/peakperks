export const initNavigation = () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return; // Guard clause if navbar doesn't exist
  
  let lastScroll = 0;

  // Handle navbar visibility on scroll
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('navbar-hidden');
      return;
    }
    
    if (currentScroll > lastScroll) {
      navbar.classList.add('navbar-hidden');
    } else {
      navbar.classList.remove('navbar-hidden');
    }
    
    lastScroll = currentScroll;
  });

  // Smooth scroll handling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return; // Skip if href is just "#"
      
      const target = document.querySelector(targetId);
      if (!target) return; // Guard clause if target element doesn't exist
      
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
};