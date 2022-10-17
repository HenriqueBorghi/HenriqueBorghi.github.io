const header_menu = document.querySelector(".header-menu");
const menu_link =  document.querySelectorAll(".menu-link");
const menu_mobile  = document.querySelector(".menu-mobile");
const menu_open = document.querySelector(".menu-open");
const menu_close = document.querySelector(".menu-close");

function abrir_menu () {
  if (header_menu.classList.contains("mostrarMenu")) {
    header_menu.classList.remove("mostrarMenu");
    menu_close.style.display = "none";
    menu_open.style.display = "block";
  }
  else {
    header_menu.classList.add("mostrarMenu");
    menu_close.style.display = "block";
    menu_open.style.display = "none";
  }
}
menu_mobile.addEventListener("click", abrir_menu);

menu_link.forEach(
  function (menu_link) {
    menu_link.addEventListener("click", abrir_menu);
  }
)