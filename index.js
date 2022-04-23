//* MAKE MOBILE NAVIGATION

const headerEl = document.querySelector(".header");
const btnEl = document.querySelector(".menu-btn");

btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("open-nav");
});
