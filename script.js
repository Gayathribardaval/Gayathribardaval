const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal, .skill-card, .project, .journey-card").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  const open = nav.style.display === "flex";
  nav.style.display = open ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "78px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px 5vw";
  nav.style.background = "rgba(7,16,14,.98)";
  nav.style.flexDirection = "column";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 850) document.querySelector("nav").style.display = "none";
  });
});
