const hamBtn = document.querySelector('.ham-btn');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelector('.nav-links');

hamBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (window.innerWidth <= 900) {
        hamBtn.style.display = 'none'; // Hide hamburger icon
        closeBtn.style.display = 'block'; // Show close icon
    }
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (window.innerWidth <= 900) {
        hamBtn.style.display = 'block'; // Show hamburger icon
        closeBtn.style.display = 'none'; // Hide close icon
    }
});

// Add an event listener for window resize to adjust the display of icons
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        // Hide both icons on larger screens
        hamBtn.style.display = 'none';
        closeBtn.style.display = 'none';
    } else {
        // Show hamburger icon only if navigation links are not active
        if (!navLinks.classList.contains('active')) {
            hamBtn.style.display = 'block';
            closeBtn.style.display = 'none';
        } else {
            // Show close icon if navigation links are active
            hamBtn.style.display = 'none';
            closeBtn.style.display = 'block';
        }
    }
});

