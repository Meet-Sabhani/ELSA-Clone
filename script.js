let menu = document.getElementById("menu-icon");
let ul = document.querySelector(".nav-links");
let showData = document.querySelector(".showData");

menu.addEventListener("click", () => {
  ul.classList.toggle("showData");
  // showData.style.hight === '0' ? showData.style.hight = '170px' : showData.style.hight = '0'
});
