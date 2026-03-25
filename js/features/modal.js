import { getDevice } from "../core/device.js";

export function initModal() {
  const device = getDevice();

  const appStoreBtn = document.querySelector("[data-appstore]");
  const playStoreBtn = document.querySelector("[data-playstore]");

  if (!appStoreBtn || !playStoreBtn) return;

  if (device === "ios") {
    appStoreBtn.classList.add("primary");
  }

  if (device === "android") {
    playStoreBtn.classList.add("primary");
  }
}