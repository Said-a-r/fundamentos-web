console.log("Said Acosta Revollo");

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("¡Enviado!");
});
