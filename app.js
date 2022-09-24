$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("header").addClass("headeronmove");
    } else {
      $("header").removeClass("headeronmove");
    }
  });
});

var contenidopres = "<div><p>Hola!</p></div>";

const Padre = document.getElementById("presentacion");

Padre.insertAdjacentHTML("beforeend", "hola si sirvo");
