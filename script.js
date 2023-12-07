let menu = document.getElementById("menu-icon");
let ul = document.querySelector(".nav-links");
let showData = document.querySelector(".showData");

menu.addEventListener("click", () => {
  ul.classList.toggle("showData");
});

const allDrops = document.querySelectorAll(".Drop-Down");

const setOpenMenu = () => {
  allDrops.forEach((drop) => {
    drop.style.display = drop.style.display === "block" ? "none" : "block";
  });
};
