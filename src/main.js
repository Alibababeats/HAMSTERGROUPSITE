// ============================================
// BeHeard — The Hamsters Portfolio Site
// Main JavaScript — Navigation, Animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileSidebar();
  if (document.getElementById('hero-particles')) {
    initParticles();
  }
  waitForGSAP();
});

// ---------- SIDEBAR NAVIGATION ----------
function initNavigation() {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    const scrollY = window.scrollY;
    let current = '';

    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    sidebarLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll for sidebar links
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ---------- MOBILE SIDEBAR TOGGLE ----------
function initMobileSidebar() {
  const toggle = document.getElementById('mobile-sidebar-toggle');
  const sidebar = document.getElementById('left-sidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // Close sidebar on link click (mobile)
  const links = sidebar.querySelectorAll('.sidebar-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      toggle.classList.remove('active');
    });
  });
}

// ---------- HERO PARTICLES ----------
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const colors = ['#F97316', '#FB923C', '#f1f5f9', '#EA580C'];

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
    setTimeout(waitForGSAP, 100);
  }
}

function initGSAPAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  if (document.querySelector('.hero-title')) {
    const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });
    gsap.set('.hero-eyebrow, .hero-title, .hero-subtitle, .hero-cta', { y: 30 });
    heroTL
      .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8 }, 0.2)
      .to('.hero-title', { opacity: 1, y: 0, duration: 0.9 }, 0.4)
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, 0.7)
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.7 }, 0.9);
  }

  // Section headers
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
      scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out'
    });
  });

  // Problem quote
  if (document.querySelector('.problem-quote')) {
    gsap.from('.problem-quote', {
      scrollTrigger: { trigger: '.problem-quote', start: 'top 85%' },
      opacity: 0, x: -40, duration: 0.8, ease: 'power2.out'
    });
  }

  // Problem image
  if (document.querySelector('.problem-image-wrapper')) {
    gsap.from('.problem-image-wrapper', {
      scrollTrigger: { trigger: '.problem-image-wrapper', start: 'top 85%' },
      opacity: 0, y: 40, duration: 0.9, ease: 'power2.out'
    });
  }

  // Problem cards
  gsap.utils.toArray('.problem-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 90%' },
      opacity: 0, y: 40, duration: 0.6, delay: i * 0.15, ease: 'power2.out'
    });
  });

  // Team cards
  gsap.utils.toArray('.team-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 90%' },
      opacity: 0, y: 40, scale: 0.95, duration: 0.6, delay: i * 0.1, ease: 'power2.out'
    });
  });

  // Assignment items
  gsap.utils.toArray('.assignment-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 90%' },
      opacity: 0, x: -30, duration: 0.6, delay: i * 0.1, ease: 'power2.out'
    });
  });

  // Timeline line
  if (document.querySelector('.timeline-line')) {
    gsap.from('.timeline-line', {
      scrollTrigger: { trigger: '.assignments-timeline', start: 'top 80%', end: 'bottom 20%', scrub: 1 },
      scaleY: 0, transformOrigin: 'top center'
    });
  }

  // Persona cards (for personas page)
  gsap.utils.toArray('.persona-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 85%' },
      opacity: 0, y: 50, duration: 0.8, delay: i * 0.2, ease: 'power2.out'
    });
  });
}
