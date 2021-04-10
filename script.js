const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll("nav ul li a");
burger.addEventListener("click", mobileNav);

function mobileNav() {
  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeNav));

function closeNav() {
  burger.classList.remove("active");
  navLinks.classList.remove("active");
}
