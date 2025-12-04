const form = document.getElementById("contactForm");
const mensajes = document.getElementById("mensajes");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita envío automático

  mensajes.innerHTML = "";
  mensajes.className = "";

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  let errores = [];

  if (nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres.");
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    errores.push("El correo electrónico no tiene un formato válido.");
  }

  if (mensaje.length < 10) {
    errores.push("El mensaje debe tener al menos 10 caracteres.");
  }

  if (errores.length > 0) {
    mensajes.className = "error";
    mensajes.innerHTML = errores.join("<br>");
  } else {
    mensajes.className = "exito";
    mensajes.innerHTML = "Envío exitoso ✅";

    form.submit(); // Enviar datos

    setTimeout(() => {
      form.reset(); // Limpiar campos
      mensajes.className = "";
      mensajes.innerHTML = ""; // Ocultar mensaje después de 5 segundos
    }, 5000);
  }
});