
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach(item => observer.observe(item));

document.getElementById("year").textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll("main section[id]")];
const navAnchors = [...document.querySelectorAll(".nav-links a")];

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + 160;

  let currentId = "";
  sections.forEach(section => {
    if (scrollPosition >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navAnchors.forEach(link => {
    link.style.color = link.getAttribute("href") === `#${currentId}` ? "#f5f7fb" : "";
  });
});
