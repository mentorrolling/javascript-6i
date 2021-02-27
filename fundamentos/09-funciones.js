//Funciones son tareas

//Funciones declarativas

function miFuncion() {
  console.log("Hola Mundo");
}

miFuncion();

let num1 = 34;
let num2 = 56;

function sumar(a, b) {
  console.log(a + b);
}

sumar(num1, num2);

function calculadora(num1, num2, operacion) {
  if (!num1 || !num2) {
    return "Falta el valor";
  }
  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num1 / num2;

    default:
      return "Operación inválida";
  }
}

//Funciones anónimas o de expresion

const sumarNumeros = function () {
  console.log(`la suma de num1 y num2 es ${num1 + num2}`);
};

const cubo = function (x) {
  return Math.pow(x, 3);
};

let numeros = [0, 1, 2, 5, 10];

function map(funcion, arreglo) {
  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    resultado.push(funcion(arreglo[i]));
  }

  console.log("Resultado: " + resultado);
  return resultado;
}

let numCubos = map(cubo, numeros);
