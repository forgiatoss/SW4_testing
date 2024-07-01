document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('nav');
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const bodyEl = document.querySelector('body');
    const toggleEl = document.querySelector('.toggle-theme');
  
    // Menu button click event
    menuBtn.addEventListener('click', function() {
      menu.classList.add('active');
    });
  
    // Close button click event
    closeBtn.addEventListener('click', function() {
      menu.classList.remove('active');
    });
  
    // Theme toggle button click event
    toggleEl.addEventListener('click', function() {
      bodyEl.classList.toggle('dark');
      if (bodyEl.classList.contains('dark')) {
        toggleEl.classList.replace('fa-moon', 'fa-sun');
      } else {
        toggleEl.classList.replace('fa-sun', 'fa-moon');
      }
    });
  });
  