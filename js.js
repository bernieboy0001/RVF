// ===============================
// Progress Bars on Load
// ===============================
window.onload = () => {
  document.querySelectorAll(".stat-card").forEach(card => {
    const progress = card.getAttribute("data-progress");
    const bar = card.querySelector(".bar");
    if (progress) {
      bar.style.width = progress + "%";
    }
  });
};

// ===============================
// Animated Counters
// ===============================
document.querySelectorAll(".count").forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };
  updateCount();
});

// ===============================
// Mobile Hamburger Menu
// ===============================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".menu-overlay");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  overlay.classList.remove("active");
});

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    overlay.classList.remove("active");
  });
});

// ===============================
// Gallery Slider
// ===============================
const track = document.querySelector(".gallery-track");
const prev = document.querySelector(".gallery-prev");
const next = document.querySelector(".gallery-next");
const slides = document.querySelectorAll(".gallery-track img");

let index = 0;
function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});
