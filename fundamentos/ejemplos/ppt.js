let opciones = ["Piedra", "Papel", "Tijera"];
let jugador = 0;
let computadora = 0;

function eligeCompu() {
  computadora = Math.round(Math.random() * 2);
  return computadora;
}

function play() {
  eligeCompu();
  jugador = parseInt(
    prompt("Elija una opcion (0: Piedra | 1: Papel | 2: Tijera)")
  );

  if (isNaN(jugador)) {
    console.error("Debe elegir una de las opciones validas");
  } else {
    ejecucion();
  }
}

function ejecucion() {
  switch (true) {
    case jugador === 0 && computadora === 2:
      console.log("GANASTE");

      break;
    case jugador === 1 && computadora === 0:
      console.log("GANASTE");

      break;
    case jugador === 2 && computadora === 1:
      console.log("GANASTE");

      break;
    case jugador === computadora:
      console.warn("EMPATE");

      break;

    default:
      console.error("PERDISTE");
      break;
  }
}
