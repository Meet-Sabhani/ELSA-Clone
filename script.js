let menu = document.getElementById("menu-icon");
let ul = document.querySelector(".nav-links");
let showData = document.querySelector(".showData")

menu.addEventListener("click", () => {
  ul.classList.toggle("showData");
});