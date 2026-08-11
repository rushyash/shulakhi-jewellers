const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", function () {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});
