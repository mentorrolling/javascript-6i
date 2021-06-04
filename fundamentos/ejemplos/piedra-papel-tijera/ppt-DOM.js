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
          mensajeAlert("EMPATE");
          break;
        case jugador === 0 && bot === 2:
          mensajeAlert("GANASTE");
          break;
        case jugador === 1 && bot === 0:
          mensajeAlert("GANASTE");
          break;
        case jugador === 2 && bot === 1:
          mensajeAlert("GANASTE");
          break;
        default:
          mensajeAlert("PERDISTE");
          break;
      }
    } else {
      mensajeAlert("noOpcion");
    }
  } else {
    mensajeAlert("noNumero");
  }
}

function mensajeAlert(resultado) {
  if (resultado === "noOpcion") {
    swal("ERROR!", "No existe la opción elegida", "error");
  }
  if (resultado === "noNumero") {
    swal("ERROR!", "Debe ingresar un número entre 0 y 2", "error");
  }

  if (resultado === "GANASTE") {
    swal(
      "GANASTE!",
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]} `,
      "success"
    );
  }
  if (resultado === "EMPATE") {
    swal(
      "EMPATASTE!",
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]} `,
      "info"
    );
  }

  if (resultado === "PERDISTE") {
    swal(
      "PERDISTE!",
      `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]} `,
      "error"
    );
  }
}
