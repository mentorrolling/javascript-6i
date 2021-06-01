/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

function numPar(num = prompt("Ingrese un número entero")) {
  num = parseInt(num);

  if (num % 2 === 0) {
    alert(`El número ${num} es par`);
  } else {
    alert(`El número ${num} es impar`);
  }
}

numPar();
