export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '50px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length) {
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
};

export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  if (!parallaxElements.length) return; // Guard clause if no parallax elements exist

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    parallaxElements.forEach(element => {
      const rate = element.dataset.rate || 0.5;
      element.style.transform = `translate3d(0, ${scrolled * rate}px, 0)`;
    });
  });
};