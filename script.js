/**
 * Dr. Abdulbasid Banga — Academic & Research Portfolio Script
 * Domain: drabdulbasid.com | Vanilla JavaScript (No External Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initActiveNavOnScroll();
  initContactForm();
});

/**
 * Mobile Navigation Drawer & Hamburger Toggle
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function toggleMenu(isOpen) {
    const shouldOpen = typeof isOpen === 'boolean' ? isOpen : toggleBtn.getAttribute('aria-expanded') !== 'true';
    toggleBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    drawer.classList.toggle('open', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', () => {
    toggleMenu();
  });

  // Close when clicking any menu link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });

  // Close if window is resized above mobile breakpoint (900px)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 900 && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/**
 * Highlights active section in navigation bar while scrolling
 */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!sections.length) return;

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120; // Offset for sticky navbar

    let currentSectionId = '';
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // Special case for top of page (Hero section)
    if (window.scrollY < 200) {
      currentSectionId = '';
    }

    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

/**
 * Client-Side Contact Form Validation and Submission
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusBox = document.getElementById('formStatus');

  if (!form || !statusBox) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reset status
    statusBox.className = 'form-status';
    statusBox.textContent = '';
    statusBox.style.display = 'none';

    const name = form.elements['name']?.value?.trim() || '';
    const email = form.elements['email']?.value?.trim() || '';
    const message = form.elements['message']?.value?.trim() || '';
    const honeypot = form.elements['website']?.value || '';

    // Honeypot check (anti-bot)
    if (honeypot) {
      statusBox.className = 'form-status success';
      statusBox.textContent = 'Thank you! Your message has been sent successfully.';
      statusBox.style.display = 'block';
      form.reset();
      return;
    }

    // Client-side validations
    if (!name) {
      showError('Please enter your full name.');
      form.elements['name'].focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showError('Please enter a valid email address.');
      form.elements['email'].focus();
      return;
    }

    if (!message || message.length < 10) {
      showError('Please write a message of at least 10 characters.');
      form.elements['message'].focus();
      return;
    }

    // Submit button loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Send message';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    try {
      const formData = new FormData(form);
      const response = await fetch('contact.php', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        statusBox.className = 'form-status success';
        statusBox.textContent = result.message || 'Thank you! Your message has been sent successfully.';
        statusBox.style.display = 'block';
        form.reset();
      } else {
        showError(result.message || 'Unable to send message. Please contact Dr. Banga directly at a.banga@seu.edu.sa');
      }
    } catch (err) {
      // Fallback for hosting environments without active PHP mail configured or static previews
      console.warn('Contact form submission fallback:', err);
      statusBox.className = 'form-status error';
      statusBox.innerHTML = `
        Unable to deliver via web mail service right now. Please email Dr. Abdulbasid Banga directly at:
        <strong><a href="mailto:a.banga@seu.edu.sa" style="color: inherit; text-decoration: underline;">a.banga@seu.edu.sa</a></strong> or
        <strong><a href="mailto:abdulglsmca@gmail.com" style="color: inherit; text-decoration: underline;">abdulglsmca@gmail.com</a></strong>.
      `;
      statusBox.style.display = 'block';
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });

  function showError(msg) {
    statusBox.className = 'form-status error';
    statusBox.textContent = msg;
    statusBox.style.display = 'block';
  }
}