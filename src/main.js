import './style.css';

// ============================================
// BeHeard — The Hamsters Portfolio Site
// Main JavaScript — Navigation, Animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initParticles();
  waitForGSAP();
});

// ---------- NAVIGATION ----------
function initNavigation() {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const links = document.querySelectorAll('.nav-link');

  // Hamburger toggle
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Scroll: header background + active link
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    const scrollY = window.scrollY;

    // Header background
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ---------- HERO PARTICLES ----------
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const colors = ['#2dd4bf', '#6366f1', '#f97066', '#fbbf24'];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('hero-particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = (Math.random() * 4 + 2) + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animationDelay = (Math.random() * 6) + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    container.appendChild(particle);
  }
}

// ---------- GSAP ANIMATIONS ----------
function waitForGSAP() {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    initGSAPAnimations();
  } else {
    // Wait for GSAP to load (deferred scripts)
    setTimeout(waitForGSAP, 100);
  }
}

function initGSAPAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance animation
  const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTL
    .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8 }, 0.2)
    .to('.hero-title', { opacity: 1, y: 0, duration: 0.9 }, 0.4)
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, 0.7)
    .to('.hero-cta', { opacity: 1, y: 0, duration: 0.7 }, 0.9);

  // Set initial states for animate-in elements
  gsap.set('.hero-eyebrow, .hero-title, .hero-subtitle, .hero-cta', {
    y: 30
  });

  // Section headers
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out'
    });
  });

  // Problem quote
  gsap.from('.problem-quote', {
    scrollTrigger: {
      trigger: '.problem-quote',
      start: 'top 85%'
    },
    opacity: 0,
    x: -40,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Problem image
  gsap.from('.problem-image-wrapper', {
    scrollTrigger: {
      trigger: '.problem-image-wrapper',
      start: 'top 85%'
    },
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: 'power2.out'
  });

  // Problem cards
  gsap.utils.toArray('.problem-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%'
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.15,
      ease: 'power2.out'
    });
  });

  // Team cards
  gsap.utils.toArray('.team-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%'
      },
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out'
    });
  });

  // Assignment items
  gsap.utils.toArray('.assignment-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%'
      },
      opacity: 0,
      x: -30,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out'
    });
  });

  // Timeline line grow
  gsap.from('.timeline-line', {
    scrollTrigger: {
      trigger: '.assignments-timeline',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1
    },
    scaleY: 0,
    transformOrigin: 'top center'
  });
}
