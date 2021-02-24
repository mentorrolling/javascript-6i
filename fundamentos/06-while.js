//Bucles

//while

// let vecesSumar = 10;
// let totalSuma = 0;

// while (vecesSumar > 0) {
//   totalSuma += 1; //totalSuma=totalSuma + 1
//   vecesSumar -= 1;
//   console.log(`totalSuma ${totalSuma} | vecesSumar ${vecesSumar}`);
// }

// console.log(`Total = ${totalSuma}`);

let respuesta = "HELSINKI";
let acierto = false;
let contador = 0;

while (contador < 3 && acierto === false) {
  let respUsuario = prompt("Capital de Finlandia: ");

  if (respUsuario.toUpperCase() === respuesta) {
    acierto = true;
    document.write("Muy bien! acertaste!!");
  }
  contador++;
}
if (acierto === false) {
  document.write("Lo sentimos, has consumido tus 3 intentos");
}
