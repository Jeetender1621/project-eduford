const hamBtn = document.querySelector('.ham-btn');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelector('.nav-links');

hamBtn.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    hamBtn.style.display = 'none'; // Hide hamburger icon
    closeBtn.style.display = 'block'; // Show close icon
});

closeBtn.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    hamBtn.style.display = 'block'; // Show hamburger icon
    closeBtn.style.display = 'none'; // Hide close icon
});