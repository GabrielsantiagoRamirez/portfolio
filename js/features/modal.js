import { getDevice } from "../core/device.js";

function applyStoreEmphasis(appStoreBtn, playStoreBtn, websiteBtn) {
  if (appStoreBtn) appStoreBtn.classList.remove("primary");
  if (playStoreBtn) playStoreBtn.classList.remove("primary");
  if (websiteBtn) websiteBtn.classList.remove("primary");

  const appVisible =
    appStoreBtn && !appStoreBtn.hasAttribute("hidden") && appStoreBtn.href;
  const websiteVisible =
    websiteBtn && !websiteBtn.hasAttribute("hidden") && websiteBtn.href;

  const device = getDevice();

  if (device === "ios" && appVisible) {
    appStoreBtn.classList.add("primary");
  } else if (device === "android" && playStoreBtn && !playStoreBtn.hasAttribute("hidden")) {
    playStoreBtn.classList.add("primary");
  } else if (playStoreBtn && !playStoreBtn.hasAttribute("hidden")) {
    playStoreBtn.classList.add("primary");
  } else if (websiteVisible) {
    websiteBtn.classList.add("primary");
  }
}

export function initModal() {
  const dialog = document.querySelector("[data-project-modal]");
  if (!dialog || typeof dialog.showModal !== "function") return;

  const titleEl = dialog.querySelector("[data-modal-title]");
  const descEl = dialog.querySelector("[data-modal-desc]");
  const appStoreBtn = dialog.querySelector("[data-appstore]");
  const playStoreBtn = dialog.querySelector("[data-playstore]");
  const websiteBtn = dialog.querySelector("[data-website]");
  const appSoonEl = dialog.querySelector("[data-appstore-soon]");

  if (!titleEl || !descEl) return;

  function syncStoreLinksFromTrigger(trigger) {
    const playUrl = (trigger.dataset.playstore || "").trim();
    const appUrl = (trigger.dataset.appstore || "").trim();
    const websiteUrl = (trigger.dataset.website || "").trim();

    if (playStoreBtn) {
      if (playUrl) {
        playStoreBtn.href = playUrl;
        playStoreBtn.removeAttribute("hidden");
      } else {
        playStoreBtn.setAttribute("hidden", "");
      }
    }

    if (websiteBtn) {
      if (websiteUrl) {
        websiteBtn.href = websiteUrl;
        websiteBtn.removeAttribute("hidden");
      } else {
        websiteBtn.setAttribute("hidden", "");
      }
    }

    if (appUrl) {
      if (appStoreBtn) {
        appStoreBtn.href = appUrl;
        appStoreBtn.removeAttribute("hidden");
      }
      if (appSoonEl) appSoonEl.setAttribute("hidden", "");
    } else {
      if (appStoreBtn) appStoreBtn.setAttribute("hidden", "");
      if (appSoonEl) appSoonEl.removeAttribute("hidden");
    }

    applyStoreEmphasis(appStoreBtn, playStoreBtn, websiteBtn);
  }

  document.querySelectorAll("[data-project-modal-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const lang = document.documentElement.lang === "en" ? "en" : "es";
      titleEl.textContent = trigger.dataset.title || "";
      descEl.textContent =
        (lang === "en" && trigger.dataset.descriptionEn
          ? trigger.dataset.descriptionEn
          : trigger.dataset.description) || "";
      syncStoreLinksFromTrigger(trigger);
      dialog.showModal();
    });
  });

  dialog.querySelectorAll("[data-modal-close]").forEach((el) => {
    el.addEventListener("click", () => dialog.close());
  });

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
}
