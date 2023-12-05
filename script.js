let menu = document.getElementById("menu-icon");
let ul = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  ul.classList.toggle("showData");
});