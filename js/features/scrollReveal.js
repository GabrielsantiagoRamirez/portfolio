

import { SELECTORS, REVEAL_OPTIONS } from '../core/config.js';

export function initScrollReveal() {
  const elements = document.querySelectorAll(SELECTORS.reveal);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, REVEAL_OPTIONS);

  elements.forEach((el) => observer.observe(el));
}
