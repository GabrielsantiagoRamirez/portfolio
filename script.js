/**
 * Portfolio Gabriel Santiago Ramirez Velazco
 * Animaciones, partículas, scroll reveal y navegación
 */

(function () {
  'use strict';

  // ----- Año en footer -----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Header scroll -----
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 60) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ----- Menú móvil -----
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Scroll reveal -----
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealOptions = { rootMargin: '0px 0px -60px 0px', threshold: 0.1 };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, revealOptions);

  revealEls.forEach((el) => revealObserver.observe(el));

  // ----- Partículas en Hero -----
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.offsetWidth;
  let height = canvas.offsetHeight;
  let animationId;

  const setSize = () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  };

  const particles = [];
  const particleCount = 60;
  const connectionDistance = 120;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.2 + 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
      ctx.fill();
    }
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    drawConnections();
    animationId = requestAnimationFrame(loop);
  }

  setSize();
  initParticles();
  loop();

  window.addEventListener('resize', () => {
    setSize();
    initParticles();
  });

  // Pausar partículas cuando la pestaña no está visible (ahorro de recursos)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      loop();
    }
  });

  // ----- Contact: scroll horizontal infinito solo en mobile -----
  const contactTrack = document.querySelector('[data-contact-track]');
  const wrapper = contactTrack ? contactTrack.closest('.contact-scroll-wrapper') : null;
  if (!contactTrack || !wrapper) return;

  const mobileQuery = window.matchMedia('(max-width: 768px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sets = contactTrack.querySelectorAll('.contact-scroll-set');
  const firstSet = sets[0];
  if (!firstSet) return;

  const SPEED = 0.4;
  const FRICTION = 0.92;

  let position = 0;
  let velocity = 0;
  let oneSetWidth = 0;
  let rafId = null;
  let isDragging = false;
  let dragStartX = 0;
  let autoScrollEnabled = !reducedMotion;

  function isMarqueeActive() {
    return mobileQuery.matches && wrapper.classList.contains('contact-marquee-enabled');
  }

  function getOneSetWidth() {
    const gap = 20;
    return firstSet.offsetWidth + gap;
  }

  function setTransform(x) {
    position = x;
    contactTrack.style.transform = `translate3d(${position}px, 0, 0)`;
  }

  function loopReset() {
    if (oneSetWidth <= 0) return;
    while (position > 0) position -= oneSetWidth;
    while (position < -oneSetWidth) position += oneSetWidth;
  }

  function tick() {
    if (!isMarqueeActive()) {
      rafId = requestAnimationFrame(tick);
      return;
    }
    if (isDragging) {
      loopReset();
      setTransform(position);
    } else {
      if (Math.abs(velocity) > 0.02) {
        position += velocity;
        velocity *= FRICTION;
      }
      if (autoScrollEnabled) {
        position -= SPEED;
      }
      loopReset();
      setTransform(position);
    }
    rafId = requestAnimationFrame(tick);
  }

  function onPointerDown(e) {
    if (!isMarqueeActive() || reducedMotion) return;
    isDragging = true;
    dragStartX = e.clientX ?? e.touches[0].clientX;
    velocity = 0;
  }

  function onPointerMove(e) {
    if (!isDragging || !isMarqueeActive()) return;
    const clientX = e.clientX ?? e.touches[0].clientX;
    const delta = clientX - dragStartX;
    dragStartX = clientX;
    velocity = delta;
    position += delta;
    setTransform(position);
    loopReset();
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
  }

  function updateMarqueeMode() {
    if (mobileQuery.matches) {
      wrapper.classList.add('contact-marquee-enabled');
      contactTrack.style.transform = '';
      oneSetWidth = getOneSetWidth();
      if (oneSetWidth > 0) {
        position = 0;
        velocity = 0;
        setTransform(0);
        if (!rafId && autoScrollEnabled) rafId = requestAnimationFrame(tick);
      }
    } else {
      wrapper.classList.remove('contact-marquee-enabled');
      contactTrack.style.transform = '';
      position = 0;
      velocity = 0;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }
  }

  contactTrack.addEventListener('mousedown', onPointerDown, { passive: true });
  contactTrack.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('mouseup', onPointerUp);
  window.addEventListener('mouseleave', onPointerUp);
  document.addEventListener('touchmove', (e) => {
    if (isDragging && isMarqueeActive()) {
      e.preventDefault();
      onPointerMove(e);
    }
  }, { passive: false });
  contactTrack.addEventListener('touchend', onPointerUp);
  contactTrack.addEventListener('touchcancel', onPointerUp);

  mobileQuery.addEventListener('change', updateMarqueeMode);
  updateMarqueeMode();
  window.addEventListener('resize', () => {
    if (isMarqueeActive()) {
      oneSetWidth = getOneSetWidth();
      loopReset();
    }
  });
})();
