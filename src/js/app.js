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
  "<br><div class = 'op'><div class='code'></div><p id = 'sobremi'>Esta imagen me representa por los significados que llega a tener, desde algo lógico y que va de la mano con lo profesional o como algo creativo que me permite expresarme como quiero he incluso curiosear más allá. Desde pequeño he tenido gran atracción por la tecnología y en cuanto pude empecé a estudiar sobre ella, incluso años antes de siquiera conocer bien todo el mundo que representaba esta misma. Para mi esta imagen es un recuerdo de todo lo que aprendí, pero también significa que tengo mucho más por aprender.</p></div><br>"
);

const contenidohabs = document.getElementById("habilidades");
contenidohabs.insertAdjacentHTML(
  "beforeend",
  "<br><div class = 'contenedor-tabla op'><table><tr><th>Tecnologia</th><th>Nivel</th></tr><tr><td>Python</td><td>7</td><td>Bueno</td></tr><tr><td>HTML5</td><td>8</td><td>Muy Bueno</td></tr><tr><td>CSS3</td><td>8</td><td>Muy Bueno</td></tr><tr><td>Java</td><td>5</td><td>Aceptable</td></tr><tr><td>PostgreSQL</td><td>6</td><td>Bueno</td></tr><tr><td>C++</td><td>5</td><td>Aceptable</td></tr><tr><td>ReactJs</td><td>6</td><td>Bueno</td></tr><tr><td>Git</td><td>8</td><td>Muy Bueno</td></tr><tr><td>JavaScript</td><td>6</td><td>Bueno</td></tr></table></div><br>"
);

const contenidoexp = document.getElementById("experiencia");
contenidoexp.insertAdjacentHTML(
  "beforeend",
  "<br><div class = 'op'><ul class = 'lista-exp'><li><b>Curso de IA con Python.</b><p>Por medio de un programa de Mintic realice un curso en platzi sobre los fundamentos de la programación en Python y su uso en el área de la inteligencia artificial, además de explorar diversas herramientas en IBM para la creación de un chatbot.</p><a class = 'boton-lista' href='https://platzi.com/p/HuskyCreek/ruta/6713-ia-mintic/diploma/detalle/'>Ver Certificado</a></li><li><b>Diplomado Universidad Autónoma de Bucaramanga.</b><p>Por medio del programa de Mintic realice durante un año un diplomado con dicha universidad en el área de habilidades en programación con énfasis en aplicaciones web y durante el ultimo ciclo del diplomado dirigí mi estudio hacia el desarrollo de aplicaciones web.</p><a class = 'boton-lista' href='https://www.linkedin.com/in/juandiegomarinsoler/details/education/1635482615176/single-media-viewer/'>Ver Certificado</a></li><li><b>Desarrollo de bases de datos con SQL</b><p>Realice varios cursos de creación y manejo de bases de datos en la plataforma de Udemy y realice exámenes de certificación en la plataforma de HackerRank.</p><a class = 'boton-lista' href='https://www.udemy.com/certificate/UC-052cfd3a-f7ff-44c1-8a45-78570c845034/'>Ver Certificado</a></li><li><b>Responsive Web Design.</b><p>Realice un curso de HTML5 y CSS3 en la plataforma de freecodecamp donde realice distintos proyectos como muestro en mi github.</p><a class = 'boton-lista' href='https://www.freecodecamp.org/certification/HuskyCreek/responsive-web-design'>Ver Certificado</a></li></ul><p>Quiero fortalecer mis conocimientos en un área laboral, donde constantemente me rete a mi mismo a mejorar profesionalmente y ser más competitivo en el área de la tecnología que me quiero especializar.</p></div><br>"
);

const contenidocon = document.getElementById("contacto");
contenidocon.insertAdjacentHTML(
  "beforeend",
  "<br><div class = 'conteiner op'><form action='' class='form'><div class='input-container'><input type='text' id='asunto' class='text-input' autocomplete='off' placeholder='Asunto*' required><label for='asunto' class='label'>Asunto*</label></div><br><div class='input-container'><input type='email' id='email' class='text-input' autocomplete = 'off' placeholder = 'Correo electronico*' required><label for='email' class='label'>E-mail*</label></div><br><div class='input-container'><input type='text' id='message' class='text-input' placeholder='Escriba su Mensaje*'autocomplete='off' maxlength='1000' required><label for='message' class='label'>Escriba su Mensaje*</label></div><br><button id = 'alerta'>Enviar</button></form></div><br>"
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
