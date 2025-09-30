const hamburger = document.querySelector(".hamburguer");
const navMenu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});