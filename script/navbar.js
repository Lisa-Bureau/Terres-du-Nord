const sections = document.querySelectorAll("main section");

// 👉 On prépare les données UNE SEULE FOIS
const navItems = Array.from(document.querySelectorAll(".nav-bar-item")).map(item => ({
  link: item.querySelector("a"),
  border: item.querySelector(".cercle-border")
}));

// 👉 Fonction utilitaire pour reset
function resetActive() {
  navItems.forEach(item => item.border.classList.remove("active"));
}

// 👉 Gestion du clic
navItems.forEach(item => {
  item.link.addEventListener("click", () => {
    resetActive();
    item.border.classList.add("active");
  });
});

// 👉 Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      resetActive();

      navItems.forEach(item => {
        if (item.link.getAttribute("href") === "#" + id) {
          item.border.classList.add("active");
        }
      });
    }
  });
}, {
  threshold: 0.6
});

// 👉 Lancer
sections.forEach(section => observer.observe(section));