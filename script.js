function toggleNav() {
    var navOptions = document.querySelector('.nav-options');
    navOptions.classList.toggle('show');
  }
  function hideNavOptions() {
    const navbarLinks = document.querySelector('.nav-options');
    navbarLinks.classList.remove('show');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });