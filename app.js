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
contenidopres.insertAdjacentHTML(
  "beforeend",
  "<div class = 'op'><p>Aqui me presento!</p></div>"
);

const contenidohabs = document.getElementById("habilidades");
contenidohabs.insertAdjacentHTML(
  "beforeend",
  "<div class = 'op'><p>Mis habilidades son!</p></div>"
);

const contenidoexp = document.getElementById("experiencia");
contenidoexp.insertAdjacentHTML(
  "beforeend",
  "<div class = 'op'><p>Tengo experiencia en!</p></div>"
);

const contenidocon = document.getElementById("contacto");
contenidocon.insertAdjacentHTML(
  "beforeend",
  "<div class = 'conteiner op'><form action='' class='form'><div class='input-container'><input type='text' id='name' class='text-input' autocomplete='off' placeholder='Nombre' required><label for='name' class='label'>Nombre</label></div><br><div class='input-container'><input type='email' id='email' class='text-input' autocomplete = 'off' placeholder = 'E-mail' required><label for='email' class='label'>E-mail</label></div><br><div class='input-container'><input type='number' id='number' class='text-input' min='7' max='10' autocomplete='off' placeholder='Telefono' required><label for='number' class='label'>Telefono</label></div><br><div class='input-container'><input type='text' id='message' class='text-input' placeholder='Escriba su Mensaje'autocomplete='off' maxlength='1000' required><label for='message' class='label'>Escriba su Mensaje</label></div><br><button><span>Enviar</span></button></form></div>"
);
