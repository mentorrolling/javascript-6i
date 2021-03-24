let opciones = ["PIEDRA", "PAPEL", "TIJERA"];
let jugador = null;
let bot = null;

function playGame() {
  seleccionBot();
  seleccionJugador();
}

//Funcion para que el bot elija una opcion
function seleccionBot() {
  return (bot = Math.round(Math.random() * 2));
}

function seleccionJugador() {
  jugador = parseInt(
    prompt("Ingrese su opción: 0 = PIEDRA | 1 = PAPEL | 2 = TIJERA")
  );

  if (!isNaN(jugador)) {
    if (jugador >= 0 && jugador <= 2) {
      switch (true) {
        case jugador === bot:
          console.warn("EMPATE");
          break;
        case jugador === 0 && bot === 2:
          console.log("GANASTE");
          break;
        case jugador === 1 && bot === 0:
          console.log("GANASTE");
          break;
        case jugador === 2 && bot === 1:
          console.log("GANASTE");
          break;
        default:
          console.error("PERDISTE");
          break;
      }
      console.log(
        `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]} `
      );
    } else {
      console.error("No existe la opción elegida");
    }
  } else {
    console.error("Debe ingresar un número entre 0 y 2");
  }
}
