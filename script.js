document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      this.click();
    }
  });

  card.addEventListener("mousemove", function (e) {
    let rect = this.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    this.style.setProperty("--mouse-x", `${x}px`);
    this.style.setProperty("--mouse-y", `${y}px`);

    let dx = x / rect.width - 0.5;
    let dy = y / rect.height - 0.5;

    this.style.transform = `
            perspective(1000px)
            rotateY(${dx * 20}deg)
            rotateX(${-dy * 20}deg)
            translateZ(10px)
        `;
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "";
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("floating");
    } else {
      entry.target.classList.remove("floating");
    }
  });
}, observerOptions);

document
  .querySelectorAll(".project-card")
  .forEach((card) => observer.observe(card));

// Constante pour la hauteur de la barre de navigation
const navbar = document.querySelector("nav");
const navbarHeight = navbar.offsetHeight;

// Fonction pour gérer le défilement vers la bonne section en compensant la hauteur de la navigation
function smoothScrollTo(target) {
  const section = document.querySelector(target);
  const sectionPosition = section.offsetTop;

  window.scrollTo({
    top: sectionPosition - navbarHeight, // Ajuste la position de défilement en fonction de la hauteur de la barre de navigation
    behavior: "smooth", // Défilement fluide
  });
}

// Ajouter des gestionnaires d'événements à tous les liens du menu
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Empêche le comportement par défaut de l'ancre
    const target = this.getAttribute("href");
    smoothScrollTo(target); // Défile vers la bonne section en compensant
  });
});

// script.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links.mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fermer le menu lorsqu'un lien est cliqué
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});