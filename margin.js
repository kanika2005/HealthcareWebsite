document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navbar-link');
  const headerHeight = document.querySelector('.header').offsetHeight;

  links.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const targetOffset = targetSection.offsetTop - headerHeight;

    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  }

  const logos = document.querySelectorAll('.logo i');

  logos.forEach(logo => {
    logo.addEventListener('mouseover', () => {
      logo.style.transform = 'rotate(360deg)';
      logo.style.transition = 'transform 0.5s ease';
    });

    logo.addEventListener('mouseout', () => {
      logo.style.transform = 'rotate(0deg)';
    });
  });

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Change header style on scroll
    if (scrollPosition > headerHeight) {
      document.querySelector('.header').classList.add('scrolled');
    } else {
      document.querySelector('.header').classList.remove('scrolled');
    }

    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelector(`.navbar-link[href="#${id}"]`).classList.add('active');
      } else {
        document.querySelector(`.navbar-link[href="#${id}"]`).classList.remove('active');
      }
    });
  });
});

  
