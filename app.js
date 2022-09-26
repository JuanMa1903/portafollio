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
  "<div class = 'op'><div class='code'></div><p>Aqui me presento!</p></div>"
);

const contenidohabs = document.getElementById("habilidades");
contenidohabs.insertAdjacentHTML(
  "beforeend",
  "<div class = 'contenedor-tabla op'><table><tr><th>Tecnologia</th><th>Nivel</th></tr><tr><td>Python</td><td>7</td><td>Bueno</td></tr><tr><td>HTML5</td><td>8</td><td>Muy Bueno</td></tr><tr><td>CSS3</td><td>8</td><td>Muy Bueno</td></tr><tr><td>Java</td><td>5</td><td>Aceptable</td></tr><tr><td>PostgreSQL</td><td>6</td><td>Bueno</td></tr><tr><td>C++</td><td>5</td><td>Aceptable</td></tr><tr><td>ReactJs</td><td>6</td><td>Bueno</td></tr></table></div>"
);

const contenidoexp = document.getElementById("experiencia");
contenidoexp.insertAdjacentHTML(
  "beforeend",
  "<div class = 'op'><p>Tengo experiencia en!</p></div>"
);

const contenidocon = document.getElementById("contacto");
contenidocon.insertAdjacentHTML(
  "beforeend",
  "<div class = 'conteiner op'><form action='' class='form'><div class='input-container'><input type='text' id='asunto' class='text-input' autocomplete='off' placeholder='Asunto' required><label for='asunto' class='label'>Asunto</label></div><br><div class='input-container'><input type='email' id='email' class='text-input' autocomplete = 'off' placeholder = 'E-mail' required><label for='email' class='label'>E-mail</label></div><br><div class='input-container'><input type='text' id='message' class='text-input' placeholder='Escriba su Mensaje'autocomplete='off' maxlength='1000' required><label for='message' class='label'>Escriba su Mensaje</label></div><br><button id = 'alerta'><span>Enviar</span></button></form></div>"
);
