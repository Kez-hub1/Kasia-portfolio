const navlinks = document.getElementById("nav");
const closeMenu = document.getElementById("close");
const bars = document.getElementById("Open");
const navMenu = document.querySelector(".nav-menu");

closeMenu.addEventListener("click", function () {
  navMenu.classList.add("right-9000");
});

const toggleMenu = () => {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
  } else {
    navMenu.classList.add("hidden");
  }
};
