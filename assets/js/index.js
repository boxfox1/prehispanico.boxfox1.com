// Scroll reveal

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{threshold:0.2});

elements.forEach(el=>observer.observe(el));

// Negative mode toggle

const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
});