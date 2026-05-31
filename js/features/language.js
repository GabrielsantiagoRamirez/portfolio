const STORAGE_KEY = "portfolio-language";

const en = {
  text: {
    ".nav-menu li:nth-child(1) a": "About me",
    ".nav-menu li:nth-child(2) a": "Education",
    ".nav-menu li:nth-child(4) a": "Projects",
    ".nav-menu li:nth-child(5) a": "Vision",
    ".nav-menu li:nth-child(6) a": "AI in my workflow",
    ".nav-menu li:nth-child(7) a": "Contact",
    ".hero-greeting": "Hi, I am",
    ".hero-tagline": "Junior Developer in training · Building real projects and learning with every line of code.",
    ".hero-buttons > .btn-primary": "View projects",
    ".hero-audio-label": "Want to know more about me? Listen to my introduction in Spanish.",
    ".btn-audio-text": "Listen in Spanish",
    ".hero-audio-volume-label": "Volume",
    "#about .section-title": "About me",
    "#formacion .section-title": "Education",
    ".formation-subtitle": "Academic education and certifications that support my growth as a developer, combining formal studies with continuous learning.",
    ".formation-item:nth-child(1) .formation-year": "2024 – Present",
    ".formation-item:nth-child(1) .formation-badge": "In progress",
    ".formation-item:nth-child(1) .formation-title": "Systems Engineering",
    ".formation-item:nth-child(1) .formation-desc": "Studying since July 2024.",
    ".formation-item:nth-child(2) .formation-badge": "Completed",
    ".formation-item:nth-child(2) .formation-entity": "AWS Certification",
    ".formation-item:nth-child(2) .formation-desc": "Cloud computing fundamentals with Amazon Web Services. Course completed.",
    ".formation-item:nth-child(3) .formation-year": "Jul 2023 – Oct 2025",
    ".formation-item:nth-child(3) .formation-badge": "Graduated",
    ".formation-item:nth-child(3) .formation-title": "Software Analysis and Development Technologist",
    ".formation-item:nth-child(3) .formation-desc": "Technical education in software development.",
    ".formation-item:nth-child(4) .formation-title": "English B1",
    ".formation-item:nth-child(4) .formation-desc": "Intermediate English level certificate.",
    ".formation-item:nth-child(5) .formation-year": "May – Dec 2021",
    ".formation-item:nth-child(5) .formation-badge": "Completed",
    ".formation-item:nth-child(5) .formation-title": "Programming Skills Diploma (Cycles 1, 2, 3 and 4A)",
    ".formation-item:nth-child(5) .formation-entity": "MinTIC · Misión TIC 2022 in partnership with Universidad Nacional de Colombia",
    ".formation-item:nth-child(5) .formation-desc": "General education program with a focus on Web Application Development. 800 hours, virtual format (Bogotá D.C.). Certificate issued on December 28, 2021 under the MinTIC – Universidad Nacional de Colombia agreement.",
    "#stack .section-title": "Technology stack",
    ".stack-card:nth-child(1) .stack-card-title": "Languages",
    ".stack-card:nth-child(4) .stack-card-title": "Databases",
    ".stack-card:nth-child(5) .stack-card-title": "Tools",
    "#projects .section-title": "Projects",
    ".featured-project:first-of-type .featured-project-badge": "Featured",
    ".featured-project:first-of-type .featured-project-link": "Visit site →",
    ".featured-project--team .featured-project-badge": "In production",
    ".featured-project--team .featured-project-link": "Details and App Store →",
    ".other-projects-title": "Other projects",
    ".project-card:nth-child(1) p": "Complete basic ecommerce flow.",
    ".project-card:nth-child(2) p": "Simple, functional music player.",
    ".project-card:nth-child(4) p": "Landing page with links to video games.",
    "#vision .section-title": "Professional vision",
    "#ai-title": "AI in my workflow",
    ".ai-card--cursor .ai-card-label": "Primary agent",
    ".ai-card--notebook .ai-card-label": "Socratic learning",
    ".ai-card--chatgpt .ai-card-label": "Task coach",
    ".contact-cta-label": "Want to work with me?",
    ".contact-cta-title": "Find me here",
    ".contact-channels-title": "Choose how to connect",
    ".footer p": "© <span id=\"year\"></span> Gabriel Santiago Ramirez Velazco. Made with dedication.",
    ".project-modal__soon": "Coming soon to the App Store"
  },
  html: {
    "#about .about-text:nth-child(1)": "Developer with <strong>2 years of experience</strong> in personal and real-world projects. I have contributed to systems with real impact: platforms serving over <strong>15,000 users</strong>, where I led the evaluative judgments and evidence module.",
    "#about .about-text:nth-child(2)": "My approach combines solid technical foundations with a <strong>continuous learning mindset</strong>. I seek to grow in environments that value constant improvement and best practices. Based in <strong>Funza, Cundinamarca (Colombia)</strong>, I prioritize <strong>on-site</strong> opportunities to start, while remaining open to remote work.",
    ".featured-project:first-of-type .featured-project-desc": "Academic platform for managing information for administrators, instructors, and apprentices. With over <strong>15,000 users</strong>, I actively contributed to the <strong>evaluative judgments and evidence</strong> module: optimizing data visualization and coordinating the team responsible for that module.",
    ".featured-project:first-of-type .featured-project-highlights": "<li>15,000+ users</li><li>Leadership in the judgments and evidence module</li><li>Data visualization optimization</li>",
    ".featured-project--team .featured-project-desc": "This is a <strong>team project</strong> with <strong><a href=\"https://alsahim0420.github.io/portfolio/\" target=\"_blank\" rel=\"noopener noreferrer\">Pablo Melo</a></strong>, who has already published <strong>several applications</strong> and has extensive app store experience. Together, we launched an <strong>offline-first</strong> <strong>Google Play app</strong> for the 2026 World Cup sticker album. For me, <strong>this collaboration is my greatest achievement</strong> so far in a team setting.",
    ".featured-project--team .featured-project-highlights": "<li>Team project</li><li>Published on Google Play</li><li>Offline-first · Flutter · Hive</li>",
    "#vision .vision-content p:nth-child(1)": "My goal is to <strong>strengthen my knowledge</strong> of Frontend, Backend, Mobile, and Databases by applying <strong>best practices</strong> and scalable architectures. I am currently deepening my understanding of <strong>Clean Architecture</strong> and patterns that improve code maintainability.",
    "#vision .vision-content p:nth-child(2)": "I am looking for a company that supports my <strong>professional development</strong>, where I can contribute passion, commitment, and a continuous improvement mindset. I am not just looking for a position: I am looking for an environment where I can grow and contribute quality solutions.",
    ".ai-flow-intro": "As part of my long-term vision, I actively learn with artificial intelligence. I do not just consume content: I <strong>understand and work</strong> with several AIs, giving each one a clear role in my day-to-day work as a developer.",
    ".ai-card--cursor .ai-card-desc": "I use it as my <strong>primary agent</strong> when a project requires handling large tasks: architecture, refactors, and end-to-end features. It is the code operations center.",
    ".ai-card--notebook .ai-card-desc": "My <strong>Socratic learning</strong> companion: it asks questions, explores concepts in depth, and keeps me thinking. Ideal for reinforcing foundations and connecting ideas from my own materials.",
    ".ai-card--chatgpt .ai-card-desc": "It acts as a <strong>personal coach</strong> when it is time to organize small tasks within projects: breaking down steps, prioritizing, and staying focused without losing direction.",
    ".contact-cta-desc": "If you are looking for someone with a passion for code, commitment to quality, and a desire to contribute to your team or project — <strong>this is the place</strong>. Write to me through your preferred channel and let's talk."
  }
};

const es = { text: {}, html: {} };

function captureSpanishContent() {
  ["text", "html"].forEach((type) => {
    Object.keys(en[type]).forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) es[type][selector] = element.innerHTML;
    });
  });
}

function applyEntries(entries) {
  Object.entries(entries).forEach(([selector, content]) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = content;
  });
}

function updateAttributes(language) {
  const isEnglish = language === "en";
  const button = document.querySelector("[data-language-toggle]");
  const audioButton = document.querySelector("#btn-audio");
  const playing = audioButton?.classList.contains("playing");

  document.documentElement.lang = language;
  document.title = isEnglish ? "Gabriel Santiago Ramirez | Developer" : "Gabriel Santiago Ramirez | Desarrollador";
  document.querySelector('meta[name="description"]').content = isEnglish
    ? "Gabriel Santiago Ramirez Velazco - Junior Developer | Frontend, Backend, Mobile and Databases"
    : "Gabriel Santiago Ramirez Velazco - Desarrollador Junior | Frontend, Backend, Mobile y Bases de Datos";
  button.textContent = isEnglish ? "ES" : "EN";
  button.setAttribute("aria-label", isEnglish ? "Cambiar idioma a español" : "Cambiar idioma a inglés");
  document.querySelector(".nav-toggle")?.setAttribute("aria-label", isEnglish ? "Open menu" : "Abrir menú");
  document.querySelector("[data-modal-close]")?.setAttribute("aria-label", isEnglish ? "Close" : "Cerrar");
  document.querySelector(".contact-scroll-wrapper")?.setAttribute("aria-label", isEnglish ? "Contact options in horizontal scrolling" : "Opciones de contacto en desplazamiento horizontal");
  if (audioButton) audioButton.setAttribute("aria-label", isEnglish ? (playing ? "Pause introduction" : "Play audio introduction") : (playing ? "Pausar presentación" : "Reproducir presentación en audio"));

  const trigger = document.querySelector("[data-project-modal-open]");
  if (trigger) {
    trigger.dataset.description = isEnglish
      ? "Team project with Pablo Melo. Mobile app for tracking collected, missing, and duplicate stickers from the 2026 World Cup album. It works offline and offers a fast, simple experience."
      : "Proyecto en equipo con Pablo Melo. App móvil para registrar stickers obtenidos, faltantes y duplicados del álbum del mundial 2026. Funciona sin internet y ofrece una experiencia rápida y sencilla.";
    const modal = document.querySelector("[data-project-modal]");
    if (modal?.open) modal.querySelector("[data-modal-desc]").textContent = trigger.dataset.description;
  }

  document.querySelectorAll(".contact-link-whatsapp").forEach((link) => {
    link.href = isEnglish
      ? "https://wa.me/573214291986?text=Hi%20Gabriel%2C%20I%20am%20interested%20in%20working%20with%20you."
      : "https://wa.me/573214291986?text=Hola%20Gabriel%2C%20estoy%20interesado%2Fa%20en%20trabajar%20contigo.";
  });
}

function applyLanguage(language) {
  const entries = language === "en" ? en : es;
  applyEntries(entries.text);
  applyEntries(entries.html);
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
  updateAttributes(language);
  localStorage.setItem(STORAGE_KEY, language);
}

export function initLanguage() {
  const button = document.querySelector("[data-language-toggle]");
  if (!button) return;
  captureSpanishContent();
  let language = localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "es";
  applyLanguage(language);
  button.addEventListener("click", () => {
    language = language === "es" ? "en" : "es";
    applyLanguage(language);
  });
}
