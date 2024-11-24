document.addEventListener('DOMContentLoaded', () => {
  // Remove Loading Screen
  const loadingScreen = document.querySelector('.loading-screen');
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500); // Ensures fade-out effect is visible
  }, 3000); // Loading screen duration
});
