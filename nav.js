const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav_menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu_visible");
});

// document.getElementById("btn_open").addEventListener("click", open_close_menu);

// // poder que el body se mueva hacia la derecha
// var side_menu = document.getElementById("nav_side");
// var btn_open = documento.getElementById("btn_open");
// var body = document.getElementById("body");

// // Evento para mostrar y ocultar menu
// function open_close_menu() {
//   body.classList.toggle("body_move");
//   side_menu.classList.toggle("menu_side_move");
// }
