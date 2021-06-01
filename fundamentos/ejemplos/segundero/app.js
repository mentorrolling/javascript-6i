let intervalo = null;
let contador = 0;
function iniciarContador() {
  intervalo = setInterval(function () {
    console.log(contador);
    contador += 1;
  }, 1000);
}

function pausarContador() {
  if (intervalo !== null) {
    clearInterval(intervalo);
  }
}
function reiniciarContador() {
  cancelarContador();
  contador = 0;
  iniciarContador();
}
