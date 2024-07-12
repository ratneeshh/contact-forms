document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted successfully!');
      form.reset();
    });
  });
  