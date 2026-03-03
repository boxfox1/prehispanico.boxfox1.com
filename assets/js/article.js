// Negativo
const modeToggle = document.getElementById("modeToggle");
if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// Print
const printBtn = document.getElementById("printBtn");
if (printBtn) {
  printBtn.addEventListener("click", () => window.print());
}

// Lab panel toggle
const labToggle = document.getElementById("labToggle");
const labPanel = document.getElementById("labPanel");

if (labToggle && labPanel) {
  labToggle.addEventListener("click", () => {
    const isHidden = labPanel.hasAttribute("hidden");
    if (isHidden) {
      labPanel.removeAttribute("hidden");
      labToggle.textContent = "Ocultar capa";
    } else {
      labPanel.setAttribute("hidden", "");
      labToggle.textContent = "Mostrar capa";
    }
  });
}
