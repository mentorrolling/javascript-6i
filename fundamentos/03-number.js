//Redondear numero mas bajo
console.log(Math.floor(45.89));

//Redondear numero mas cercano
console.log(Math.round(45.5));

//Obtener el máximo
console.log("El número máximo es: " + Math.max(56.5, 45, 90, 5));

//Obtener mínimo
console.log("El número menor es: " + Math.min(56.5, 45, 90, 5));

let base = parseInt("4");
let exponente = 2;
//Elevar a la potencia
console.log(
  `El número ${base} a la potencia ${exponente} es ` + Math.pow(base, exponente)
);

//Número aleatorio
console.log(" el número aleatorio es: " + Math.round(Math.random() * 100));

//Obtener la raiz cuadrada
console.log(Math.sqrt(64));

let numero1 = "34.656778";

//Obtener número con dos decimales
console.log(Math.round(numero1 * 100) / 100);

//Obteniendo numero con dos decimales con toFixed()
console.log("Usando toFixed " + numero1.toFixed(2));

// parseFloat Convierte (parsea) un argumento de tipo cadena y
// devuelve un número de punto flotante.
console.log(parseFloat(numero1.toFixed(2)));
