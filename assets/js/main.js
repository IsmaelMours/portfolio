document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const closeButton = document.querySelector(".close-button");
    const navLinks = document.querySelector(".nav-links");
  
    // Detect initial window size and set the initial state of .nav-links
    if (window.innerWidth <= 550) {
      navLinks.style.display = "none";
      toggleButton.style.display = "block";
      closeButton.style.display = "none";
    } else {
      navLinks.style.display = "block";
      toggleButton.style.display = "none";
      closeButton.style.display = "none";
    }
   // Function to hide the logo

    // Toggle the visibility of .nav-links and the appearance of the buttons when the toggle button is clicked
    toggleButton.addEventListener("click", function () {
      if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
        closeButton.style.display = "none";
        toggleButton.style.display = "block";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.width = "100%";
        navLinks.style.height = "100vh";
       
        navLinks.style.zIndex = "99999";
        navLinks.style.top = '100px';
        closeButton.style.display = "block";
        toggleButton.style.display = "none";
      }
    });
  
    // Hide the .nav-links and show the toggle button when the close button is clicked
    closeButton.addEventListener("click", function () {
      navLinks.style.display = "none";
      closeButton.style.display = "none";
      toggleButton.style.display = "block";
    });
  
    // Hide the .nav-links when the window is resized to mobile size
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 550) {
        navLinks.style.display = "none";
        toggleButton.style.display = "block";
        closeButton.style.display = "none";
      } else {
        navLinks.style.display = "block";
        toggleButton.style.display = "none";
        closeButton.style.display = "none";
      }
    });

    function smoothScroll(target) {
      const element = document.querySelector(target);
      window.scrollTo({
          behavior: 'smooth',
          top: element.offsetTop,
      });
  }

  // Attach click event to navigation links

 
 

  const navLinksArray = Array.from(document.querySelectorAll('.nav-links__link'));

  navLinksArray.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.style.display = 'none';
      toggleButton.style.display = 'block';
      closeButton.style.display = "none";

    });
  });

  });

  