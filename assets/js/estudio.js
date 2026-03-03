const layerBtn = document.querySelector(".layerToggle");
const labSection = document.querySelector(".lab-layer");

layerBtn.addEventListener("click", () => {
  labSection.classList.toggle("active");
});
