(function () {
  'use strict';

  // --- Theme Toggle ---
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // --- Mobile Navigation ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navMenu.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // --- Header Scroll Effect ---
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // --- Active Nav Link ---
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav__link');

  const observerNav = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((section) => observerNav.observe(section));

  // --- Typing Effect ---
  const typedText = document.getElementById('typedText');
  const roles = [
    'Full-Stack Web Developer',
    'React Enthusiast',
    'UI Craftsperson',
    'Open Source Contributor',
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = roles[roleIndex];

    if (isDeleting) {
      typedText.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedText.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();

  // --- Counter Animation ---
  const statNumbers = document.querySelectorAll('.stat__number');
  let countersStarted = false;

  function animateCounters() {
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.dataset.target, 10);
      const duration = 1500;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        stat.textContent = Math.floor(eased * target);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          stat.textContent = target;
        }
      }

      requestAnimationFrame(update);
    });
  }

  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          animateCounters();
        }
      });
    },
    { threshold: 0.5 }
  );

  const heroSection = document.getElementById('hero');
  if (heroSection) heroObserver.observe(heroSection);

  // --- Scroll Reveal ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // --- Skill Bars Animation ---
  const skillBars = document.querySelectorAll('.skill-bar__fill');

  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.dataset.width;
          entry.target.style.width = `${width}%`;
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => barObserver.observe(bar));

  // --- Contact Form Validation ---
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    clearErrors();

    if (!name.value.trim()) {
      showError(name, 'nameError', 'Name is required');
      valid = false;
    }

    if (!email.value.trim()) {
      showError(email, 'emailError', 'Email is required');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showError(email, 'emailError', 'Please enter a valid email');
      valid = false;
    }

    if (!message.value.trim()) {
      showError(message, 'messageError', 'Message is required');
      valid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, 'messageError', 'Message must be at least 10 characters');
      valid = false;
    }

    if (valid) {
      contactForm.reset();
      formSuccess.hidden = false;
      setTimeout(() => {
        formSuccess.hidden = true;
      }, 5000);
    }
  });

  function showError(input, errorId, msg) {
    input.classList.add('error');
    document.getElementById(errorId).textContent = msg;
  }

  function clearErrors() {
    contactForm.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));
    contactForm.querySelectorAll('.form-error').forEach((el) => (el.textContent = ''));
    formSuccess.hidden = true;
  }

  // --- Footer Year ---
  document.getElementById('year').textContent = new Date().getFullYear();
})();
