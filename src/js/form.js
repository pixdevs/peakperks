export const initContactForm = () => {
  const form = document.querySelector('.contact-form');
  if (!form) return; // Guard clause if form doesn't exist
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      showSuccessMessage(form);
      form.reset();
    } catch (error) {
      showErrorMessage(form, error);
    }
  });
};

const showSuccessMessage = (form) => {
  const message = document.createElement('div');
  message.className = 'success-message fade-in';
  message.textContent = 'Thank you for your message. We will contact you soon.';
  form.appendChild(message);
  setTimeout(() => message.remove(), 5000);
};

const showErrorMessage = (form, error) => {
  const message = document.createElement('div');
  message.className = 'error-message fade-in';
  message.textContent = 'An error occurred. Please try again later.';
  form.appendChild(message);
  setTimeout(() => message.remove(), 5000);
};