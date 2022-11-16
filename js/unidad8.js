var img_crossfit = document.getElementById("formulario");

function textoVisible() {
  img_crossfit.style.display = "block";
  img_crossfit.style.textAlign = "center";
}
function cerrar() {
  img_crossfit.style.display = "none";
}

function adultos() {
  var img_adultos = prompt(
    "Informacion valida solo para mayores de 50 años--Porfavor digite su edad"
  );
  if (img_adultos >= 50) {
    alert("BIENVENIDO");
  } else {
    alert("INFORMACION VALIDA UNICAMENTE PARA MAYORES DE 50 AÑOS");
  }
}
