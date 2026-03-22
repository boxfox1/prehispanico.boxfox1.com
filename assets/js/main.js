document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initNegativeMode();
  initMobileNav();
});

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initNegativeMode() {
  const modeToggle = document.getElementById("modeToggle");
  if (!modeToggle) return;

  const storageKey = "prehispanico-negative-mode";
  const savedMode = localStorage.getItem(storageKey);

  if (savedMode === "dark") {
    document.body.classList.add("dark");
    modeToggle.setAttribute("aria-pressed", "true");
  } else {
    modeToggle.setAttribute("aria-pressed", "false");
  }

  modeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    modeToggle.setAttribute("aria-pressed", String(isDark));
    localStorage.setItem(storageKey, isDark ? "dark" : "light");
  });
}

function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");

  if (!navToggle || !siteNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initNegativeMode();
  initMobileNav();
  initLabViewer();
});

function initLabViewer() {
  const labImage = document.getElementById("labImage");
  const labCaption = document.getElementById("labCaption");
  const buttons = document.querySelectorAll(".labBtn");

  if (!labImage || !labCaption || !buttons.length) return;

  const views = {
    base: {
      src: "../assets/img/casos/tezcatlipoca-borgia-17/base.jpg",
      caption: "Vista base del caso.",
    },
    negativo: {
      src: "../assets/img/casos/tezcatlipoca-borgia-17/negativo.jpg",
      caption: "Versión en negativo para detectar contraste estructural.",
    },
    grises: {
      src: "../assets/img/casos/tezcatlipoca-borgia-17/grises.jpg",
      caption: "Escala de grises para observar peso tonal y agrupación formal.",
    },
    rojos: {
      src: "../assets/img/casos/tezcatlipoca-borgia-17/rojos.jpg",
      caption: "Aislamiento de gamas rojas como zonas de énfasis visual.",
    },
    amarillos: {
      src: "../assets/img/casos/tezcatlipoca-borgia-17/amarillos.jpg",
      caption: "Aislamiento de amarillos y ocres como cuerpo cromático dominante.",
    },
    turquesa: {
      src: "../assets/img/casos/tezcatlipoca-borgia-17/turquesa.jpg",
      caption: "Aislamiento de turquesas y azules para observar contraste frío.",
    },
    comparativo: {
      src: "../assets/img/casos/tezcatlipoca-borgia-17/comparativo.jpg",
      caption: "Comparativo de variantes y rasgos iconográficos del caso.",
    },
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.view;
      const data = views[view];
      if (!data) return;

      buttons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");

      labImage.src = data.src;
      labCaption.textContent = data.caption;
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initNegativeMode();
  initMobileNav();
  initLabViewer();
  initAccordion();
});

function initAccordion() {
  const triggers = document.querySelectorAll(".accTrigger");
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accItem");
      if (!item) return;
      item.classList.toggle("is-open");
    });
  });
}