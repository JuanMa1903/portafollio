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
  "<div class = 'op'><div class='code'></div><p id = 'sobremi'>Esta imagen me representa por los significados que llega a tener, desde algo lógico y que va de la mano con lo profesional o como algo creativo que me permite expresarme como quiero he incluso curiosear más allá. Desde pequeño he tenido gran atracción por la tecnología y en cuanto pude empecé a estudiar sobre ella, incluso años antes de siquiera conocer bien todo el mundo que representaba esta misma. Para mi esta imagen es un recuerdo de todo lo que aprendí, pero también significa que tengo mucho más por aprender.</p></div>"
);

const contenidohabs = document.getElementById("habilidades");
contenidohabs.insertAdjacentHTML(
  "beforeend",
  "<div class = 'contenedor-tabla op'><table><tr><th>Tecnologia</th><th>Nivel</th></tr><tr><td>Python</td><td>7</td><td>Bueno</td></tr><tr><td>HTML5</td><td>8</td><td>Muy Bueno</td></tr><tr><td>CSS3</td><td>8</td><td>Muy Bueno</td></tr><tr><td>Java</td><td>5</td><td>Aceptable</td></tr><tr><td>PostgreSQL</td><td>6</td><td>Bueno</td></tr><tr><td>C++</td><td>5</td><td>Aceptable</td></tr><tr><td>ReactJs</td><td>6</td><td>Bueno</td></tr><tr><td>Git</td><td>8</td><td>Muy Bueno</td></tr><tr><td>JavaScript</td><td>6</td><td>Bueno</td></tr></table></div>"
);

const contenidoexp = document.getElementById("experiencia");
contenidoexp.insertAdjacentHTML(
  "beforeend",
  "<div class = 'op'><p>Mis expectativas laborales <br> Estudiante de sexto semestre de la universidad del magdalena. Realice dos diplomados con Mintic, el primero fue realizado con platzi sobre Inteligencia artificial con Python y el segundo fue realizado con la Universidad Autonoma de Bucaramanga como habilidades en programacion con enfasis en aplicaciones web y dentro del ultimo ciclo del curso desarrollo web.<br>Realice diversos cursos en plataformas como platzi, udemy y freecodeCamp donde obtuve diversos conocimientos de las tecngologias en la rama de desarrollo web</p></div>"
);

const contenidocon = document.getElementById("contacto");
contenidocon.insertAdjacentHTML(
  "beforeend",
  "<div class = 'conteiner op'><form action='' class='form'><div class='input-container'><input type='text' id='asunto' class='text-input' autocomplete='off' placeholder='Asunto*' required><label for='asunto' class='label'>Asunto*</label></div><br><div class='input-container'><input type='email' id='email' class='text-input' autocomplete = 'off' placeholder = 'Correo electronico*' required><label for='email' class='label'>E-mail*</label></div><br><div class='input-container'><input type='text' id='message' class='text-input' placeholder='Escriba su Mensaje*'autocomplete='off' maxlength='1000' required><label for='message' class='label'>Escriba su Mensaje*</label></div><br><button id = 'alerta'>Enviar</button></form></div>"
);

function enviar() {
  if (
    document.getElementById("asunto").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("message").value != ""
  ) {
    alert(
      "Asunto: " +
        document.getElementById("asunto").value +
        "\nCorreo: " +
        document.getElementById("email").value +
        "\nMensaje: " +
        document.getElementById("message").value
    );
  }
}

const mensaje = document.getElementById("alerta");
mensaje.addEventListener("click", enviar, true);
