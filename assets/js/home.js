// Reveal (museo/editorial: suave, sin ruido)
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("active");
    });
  },
  { threshold: 0.15 }
);
reveals.forEach((el) => obs.observe(el));

// Negativo (laboratorio visual: opcional)
const toggle = document.getElementById("modeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}