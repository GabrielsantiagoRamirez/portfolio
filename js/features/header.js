

import { SELECTORS, SCROLL_THRESHOLD } from '../core/config.js';

function initScrollState() {
  const header = document.querySelector(SELECTORS.header);
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const navToggle = document.querySelector(SELECTORS.navToggle);
  const navMenu = document.querySelector(SELECTORS.navMenu);
  const navLinks = document.querySelectorAll(SELECTORS.navLinks);

  if (!navToggle || !navMenu) return;

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

export function initHeader() {
  initScrollState();
  initMobileMenu();
}
