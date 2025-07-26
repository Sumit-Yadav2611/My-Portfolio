    document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Elements
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const moonIcon = themeToggleBtn.querySelector('.fa-moon');
    const sunIcon = themeToggleBtn.querySelector('.fa-sun');
    const body = document.body;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
    
    // Theme toggle button click handler
    themeToggleBtn.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });
    
    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
    
    // Function to enable light mode
    function enableLightMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
    
});

document.addEventListener('DOMContentLoaded', function () {
  const element = document.getElementById('animated-text');
  const text = "Hello, I'm  Sumit Yadav  And I'm a Frontend Developer.";
  let index = 0;
  let isDeleting = false;

  function typeLoop() {
    if (isDeleting) {
      element.innerHTML = text.substring(0, index--);
    } else {
      element.innerHTML = text.substring(0, index++);
    }

    if (!isDeleting && index === text.length) {
      setTimeout(() => isDeleting = true, 1000); // pause at full text
    } else if (isDeleting && index === 0) {
      isDeleting = false;
    }

    const speed = isDeleting ? 40 : 60; // typing/deleting speed
    setTimeout(typeLoop, speed);
  }

  typeLoop(); // Start loop
});

document.addEventListener('DOMContentLoaded', () => {


  // Animate progress bars
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    const innerBar = bar.querySelector('.bar div');
    setTimeout(() => {
      innerBar.style.width = percent;
      innerBar.textContent = percent;
    }, 500);
  });

  // Animate circles
  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    const angle = percent * 3.6;
    circle.style.background = `conic-gradient(#00d1ff ${angle}deg, #111 ${angle}deg)`;
  });
});

   const buttons = document.querySelectorAll(".our-services button");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Read more clicked!");
      });
    });

 function viewMore() {
      alert("More information will be available soon!");
    }
 
  const track = document.getElementById('carouselTrack');
  const cards = document.querySelectorAll('.card');
  const dotsContainer = document.getElementById('dotsContainer');
  let currentIndex = 2;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 30; // gap included
    track.style.transform = `translateX(calc(50% - ${currentIndex * cardWidth + cardWidth / 2}px))`;

    cards.forEach((card, i) => {
      card.classList.toggle('active', i === currentIndex);
    });

    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function createDots() {
    cards.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    });
  }

  createDots();
  updateCarousel();

  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }, 4000);