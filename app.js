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

const pal = document.getElementById(".presentacion");

pal.insertAdjacentElement('beforeend', contenidopres)
