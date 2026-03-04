/**
 * Feature — Audio presentación (reproducir al hacer clic)
 */

import { SELECTORS } from '../core/config.js';

export function initAudio() {
  const btn = document.querySelector(SELECTORS.btnAudio);
  const audio = document.querySelector(SELECTORS.audioPresentacion);

  if (!btn || !audio) return;

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      btn.classList.add('playing');
      btn.setAttribute('aria-label', 'Pausar presentación');
    } else {
      audio.pause();
      audio.currentTime = 0;
      btn.classList.remove('playing');
      btn.setAttribute('aria-label', 'Reproducir presentación en audio');
    }
  });

  audio.addEventListener('ended', () => {
    btn.classList.remove('playing');
    btn.setAttribute('aria-label', 'Reproducir presentación en audio');
  });
}
