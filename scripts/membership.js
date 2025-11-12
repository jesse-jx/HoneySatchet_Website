/* JavaScript for Mobile Menu Toggle */
        const menu = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menu.classList.toggle('active');
        });

        /* Modal (Remind Me)*/
        const remindModal = document.getElementById('remindModal');
        const remindBtns = [document.getElementById('remindMeBtn1'), document.getElementById('remindMeBtn2')];
        const modalBackdrop = document.getElementById('modalBackdrop');
        const remindCancel = document.getElementById('remindCancel');
        const remindSubmit = document.getElementById('remindSubmit');
        const remindMsg = document.getElementById('remindMsg');
        const remindEmail = document.getElementById('remindEmail');

        remindBtns.forEach(btn => {
            if(btn) btn.addEventListener('click', openRemindModal);
        });
        function openRemindModal(){ remindModal.style.display='flex'; remindMsg.style.display='none'; remindEmail.value=''; }
        modalBackdrop.addEventListener('click', closeRemindModal);
        remindCancel.addEventListener('click', closeRemindModal);
        function closeRemindModal(){ remindModal.style.display='none'; }

        remindSubmit.addEventListener('click', () => {
            const email = remindEmail.value.trim();
            if(!email || !email.includes('@')) {
                remindMsg.style.display='block';
                remindMsg.style.color='crimson';
                remindMsg.innerText='Please enter a valid email.';
                return;
            }
            // simulate success
            remindMsg.style.display='block';
            remindMsg.style.color='green';
            remindMsg.innerText='Thanks! We\'ll remind you before the drop.';
            setTimeout(()=>{ remindModal.style.display='none'; }, 1200);
        });

        //Claim now btn
        document.getElementById('claimNowBtn').addEventListener('click', ()=> {
        // Ideally deep-link to Shopee product / open new tab
            window.open('https://shopee.sg/Forest-Fresh-Jarrah-Honey-Sachet-TA-35-13g-Honey-on-the-Go-i.250686849.19491848010', '_blank');
        });

        //Main Signup
        const mainEmail = document.getElementById('mainEmail');
        const joinNow = document.getElementById('joinNow');
        const signupSuccess = document.getElementById('signupSuccess');

        joinNow.addEventListener('click', () => {
            email = mainEmail.value.trim();
            if(!email || !email.includes('@')) {
                signupSuccess.style.display='block';
                signupSuccess.style.color='#FFC8C8';
                signupSuccess.innerText='Please enter a valid email.';
                return;
            }
            // simulate sending subscription -> show success msg
            signupSuccess.style.display='block';
            signupSuccess.style.color='#D5F6D6';
            signupSuccess.innerText='Sign up success! Welcome to Club Miere.';
            // clear after a while (optionally)
            setTimeout(()=> {
                // keep success visible; you could hide after N ms if desired
            }, 2000);
        });

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
