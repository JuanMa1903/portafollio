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
contenidopres.insertAdjacentHTML('beforeend',"<div><p>Hola!</p></div>");
contenidopres.addClass('div', op);

const contenidohabs = document.getElementById("habilidades");
contenidohabs.insertAdjacentHTML('beforeend',"<div><p>Hola!</p></div>");
contenidohabs.addClass('div', op);