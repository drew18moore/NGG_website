const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

$(document).ready(function() {
  $("#player").selectmenu();

  $("#reason").selectmenu();

  $("input[type=submit]").button();

  $('form').validation();

  // Hamburger Menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }));
    
  });