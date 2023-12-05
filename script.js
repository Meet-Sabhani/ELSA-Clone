let menu = document.getElementById("menu-icon");
let ul = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  ul.classList.toggle("showData");
  ul.className === "showData"
    ? (menu.className = "fas fa-times")
    : (menu.className = "fas fa-bars");
});

console.log('kkk')