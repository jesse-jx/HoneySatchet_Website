// Email submission success
const form = document.querySelector('.cta-content');
const emailInput = form?.querySelector('input[type="email"]');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.createElement('p');
    msg.className = 'success-message';
    msg.textContent = 'Sign up success! Welcome to Club Miere.';
    if (!form.nextElementSibling?.classList.contains('success-message')) {
      form.insertAdjacentElement('afterend', msg);
    }
    emailInput.value = '';
  });
}

// Simple automatic carousel
const carouselImages = document.querySelectorAll('.community-carousel img');
let current = 0;

function showNextImage() {
  carouselImages[current].classList.remove('active');
  carouselImages[current].classList.add('inactive');
  current = (current + 1) % carouselImages.length;
  carouselImages[current].classList.remove('inactive');
  carouselImages[current].classList.add('active');
}

setInterval(showNextImage, 3000);
