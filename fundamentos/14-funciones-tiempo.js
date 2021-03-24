// let contador = setInterval(function () {
//   console.log("Hola mundo");
// }, 1000);

// clearInterval(contador)

let intervalo = setInterval(function () {
  // window.location.reload();
  console.warn(new Date());
}, 1);

function desactivarRecarga() {
  console.log("Recarga descativada");
  clearInterval(intervalo);
}

function loginTrue() {
  setTimeout(function () {
    document.write("Se logueo con éxito :)");
  }, 5000);
}
