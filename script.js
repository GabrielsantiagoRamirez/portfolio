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

  // ----- Contact marquee: scroll horizontal infinito -----
  const marqueeTrack = document.getElementById('contact-marquee-track');
  if (!marqueeTrack) return;

  const marqueeGroups = marqueeTrack.querySelectorAll('.contact-marquee-group');
  const firstGroup = marqueeGroups[0];
  if (!firstGroup) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PIXELS_PER_SECOND = 28;
  let loopWidth = 0;
  let position = 0;
  let isDragging = false;
  let didDrag = false;
  let pointerStartX = 0;
  let positionAtDragStart = 0;
  let marqueeRafId = null;
  const DRAG_THRESHOLD_PX = 5;

  function getLoopWidth() {
    return firstGroup.offsetWidth;
  }

  function normalizeOffset(value) {
    const w = loopWidth;
    if (w <= 0) return 0;
    let v = value % w;
    if (v > 0) v -= w;
    return v;
  }

  function applyTransform() {
    const x = normalizeOffset(position);
    marqueeTrack.style.transform = `translate3d(${x}px, 0, 0)`;
  }

  function marqueeTick() {
    if (!reducedMotion && !isDragging && loopWidth > 0) {
      position -= (PIXELS_PER_SECOND / 60);
      applyTransform();
    }
    marqueeRafId = requestAnimationFrame(marqueeTick);
  }

  function initMarquee() {
    loopWidth = getLoopWidth();
    applyTransform();
    if (!marqueeRafId) marqueeRafId = requestAnimationFrame(marqueeTick);
  }

  function getPointerX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
  }

  function onPointerDown(e) {
    if (e.button !== 0 && !e.touches) return;
    isDragging = true;
    didDrag = false;
    pointerStartX = getPointerX(e);
    positionAtDragStart = position;
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const x = getPointerX(e);
    if (Math.abs(x - pointerStartX) >= DRAG_THRESHOLD_PX) didDrag = true;
    position = positionAtDragStart + (pointerStartX - x);
    applyTransform();
  }

  function onPointerUp() {
    isDragging = false;
  }

  function onMarqueeClick(e) {
    if (didDrag) {
      e.preventDefault();
      e.stopPropagation();
    }
    didDrag = false;
  }

  initMarquee();
  marqueeRafId = requestAnimationFrame(marqueeTick);

  const marqueeEl = marqueeTrack.parentElement;
  marqueeEl.addEventListener('mousedown', onPointerDown);
  marqueeEl.addEventListener('touchstart', onPointerDown, { passive: true });
  marqueeEl.addEventListener('click', onMarqueeClick, true);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('mouseup', onPointerUp);
  window.addEventListener('touchend', onPointerUp);
  window.addEventListener('resize', initMarquee);

  if (reducedMotion) {
    marqueeTrack.parentElement.setAttribute('aria-label', 'Opciones de contacto');
  }
})();
