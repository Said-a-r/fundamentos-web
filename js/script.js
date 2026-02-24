console.log("Tu Nombre Aquí");

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("¡Enviado!");
});
