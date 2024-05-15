document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.navbar-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form Submission (Dummy)
    document.querySelector('.contact-form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting us!');
      this.reset();
    });
  });
  
