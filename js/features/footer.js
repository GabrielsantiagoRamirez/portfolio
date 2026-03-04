

import { SELECTORS } from '../core/config.js';

export function initFooter() {
  const yearEl = document.querySelector(SELECTORS.year);
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
