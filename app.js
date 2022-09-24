$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("header").addClass("headeronmove");
    } else {
      $("header").removeClass("headeronmove");
    }
  });
});

const contenidopres = document.getElementById("presentacion");
contenidopres.insertAdjacentHTML('beforeend',"<div class = 'op'><p>Aqui me presento!</p></div>");

const contenidohabs = document.getElementById("habilidades");
contenidohabs.insertAdjacentHTML('beforeend',"<div class = 'op'><p>Mis habilidades son!</p></div>");