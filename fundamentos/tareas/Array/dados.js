/*
 Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*/
let dado1 = 0;
let dado2 = 0;
let suma = 0;
let arraySuma = [];

for (let index = 1; index <= 50; index++) {
  console.log("🎲Lanzando dados🎲");
  dado1 = Math.round(Math.random() * 5 + 1);
  console.log(`Dado 1: ${dado1}`);
  dado2 = Math.round(Math.random() * 5 + 1);
  console.log(`Dado 2: ${dado2}`);
  suma = dado1 + dado2;
  console.log(`La suma es de ${suma}`);

  if (arraySuma.length === 0) {
    arraySuma.push(suma);
  } else {
    if (arraySuma.includes(suma)) {
      arraySuma.push(suma);
    }
  }
}

console.log(
  `La cantidad de veces que la suma de los dados dio ${arraySuma[0]} es de ${arraySuma.length}`
);
