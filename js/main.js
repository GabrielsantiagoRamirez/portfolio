

import { initHeader } from './features/header.js';
import { initScrollReveal } from './features/scrollReveal.js';
import { initParticles } from './features/particles.js';
import { initFooter } from './features/footer.js';

function init() {
  initFooter();
  initHeader();
  initScrollReveal();
  initParticles();
}

init();
