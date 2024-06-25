function toggleNav() {
    const navOptions = document.querySelector('.nav-options');
    if (navOptions.style.display === 'flex') {
      navOptions.style.display = 'none';
    } else {
      navOptions.style.display = 'flex';
    }
  }
  
  function hideNavOptions() {
    const navOptions = document.querySelector('.nav-options');
    if (window.innerWidth <= 768) {
      navOptions.style.display = 'none';
    }
  }
  