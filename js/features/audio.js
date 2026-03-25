/**
 * Feature — Audio presentación (reproducir / pausar + volumen)
 */

import { SELECTORS } from '../core/config.js';

const STORAGE_KEY = 'portfolio-audio-volume';

function syncVolumeAria(slider, value) {
  slider.setAttribute('aria-valuenow', String(value));
}

export function initAudio() {
  const btn = document.querySelector(SELECTORS.btnAudio);
  const audio = document.querySelector(SELECTORS.audioPresentacion);
  const volumeSlider = document.querySelector(SELECTORS.audioVolume);

  if (!btn || !audio) return;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (volumeSlider && saved !== null) {
    const n = Number.parseInt(saved, 10);
    if (!Number.isNaN(n) && n >= 0 && n <= 100) {
      volumeSlider.value = String(n);
      syncVolumeAria(volumeSlider, n);
    }
  }

  if (volumeSlider) {
    const applyVolume = () => {
      const v = Number.parseInt(volumeSlider.value, 10);
      audio.volume = Math.min(1, Math.max(0, v / 100));
      volumeSlider.style.setProperty('--vol-pct', `${v}%`);
      syncVolumeAria(volumeSlider, v);
      localStorage.setItem(STORAGE_KEY, volumeSlider.value);
    };
    applyVolume();
    volumeSlider.addEventListener('input', applyVolume);
  } else {
    audio.volume = 0.75;
  }

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      btn.classList.add('playing');
      btn.setAttribute('aria-label', 'Pausar presentación');
    } else {
      audio.pause();
      btn.classList.remove('playing');
      btn.setAttribute('aria-label', 'Reproducir presentación en audio');
    }
  });

  audio.addEventListener('ended', () => {
    btn.classList.remove('playing');
    btn.setAttribute('aria-label', 'Reproducir presentación en audio');
  });
}
