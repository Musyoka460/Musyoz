const navLinks = document.querySelector('.nav-links');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Animate progress bars on scroll
const progressBars = document.querySelectorAll('.progress');

function animateProgressBars() {
  progressBars.forEach((progress) => {
    const width = progress.getAttribute('data-progress');
    progress.style.width = `${width}%`;
  });
}