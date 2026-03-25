

import { initHeader } from './features/header.js';
import { initScrollReveal } from './features/scrollReveal.js';
import { initParticles } from './features/particles.js';
import { initFooter } from './features/footer.js';
import { initAudio } from './features/audio.js';
import { initModal } from './features/modal.js';

function init() {
  initFooter();
  initHeader();
  initScrollReveal();
  initParticles();
  initAudio();
  initModal();
}

init();
