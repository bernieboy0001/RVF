// On page load, animate progress bars based on data-progress attribute
window.onload = () => {
  document.querySelectorAll(".stat-card").forEach(card => {
    const progress = card.getAttribute("data-progress");
    const bar = card.querySelector(".bar");
    if (progress) {
      bar.style.width = progress + "%";
    }
  });
};
 document.querySelectorAll(".count").forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 100; // adjust speed

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });

  document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".navbar-toggle");
  const navMenu = document.querySelector(".navbar nav ul");

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
