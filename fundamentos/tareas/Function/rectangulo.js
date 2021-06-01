/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

*/

let base = prompt("Ingrese la base del rectángulo");
let altura = prompt("Ingrese la altura del rectángulo");

function perimetro() {
  if (base && altura) {
    base = parseFloat(base);
    altura = parseFloat(altura);

    let p = 2 * (altura + base);

    console.log(`El perímetro del rectangulo consultado es de ${p}`);
  } else {
    console.error("Faltan datos para calcular el perímetro del rectángulo");
  }
}

perimetro();
