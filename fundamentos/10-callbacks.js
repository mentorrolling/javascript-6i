// Callbaks son funciones que se ejecutan despues de un método
let numeros = [2, 5, 6, 12, 24];

numeros.sort(function (a, b) {
  return a - b;
});

// Crear un nuevo arreglo en base a la condición

let pares = numeros.filter(function (num) {
  return num % 2 === 0;
});

let alumnos = ["Lucas", "Pablo", "Fabrizio", "Jorge"];

// Devolver el primer elemento de un array que cumpla con la condición

alumnos.find(function (alumno) {
  return alumno === "Lucas";
});
