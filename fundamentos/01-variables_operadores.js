//Variable
// Es un espacio de memoria donde guardo datos

//Declaración e inicialización de Variables
let nombre = "Pablo"; //let me permite declarar una variable en el ambito donde se use
var apellido = "Marino"; //var declaro una variable global no importa en que ambito se use
const pi = 3.14; //const defino una variable que no puede modificarse

//Tipos de datos

//String
let cliente = "Fabrizio";

//Number
let numero1 = 34;
let numero2 = 12;

//Bollean
let comprar = true;
let vender = false;

//Null
let deposito = null;

//undefined
let caja;

//Array
let arreglo = [1, "Pablo", true];

//Object
let persona = {
  nombre: "José",
  apellido: "Perez",
  edad: 23,
};

//Operadores

//Aritméticos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;

//operadores unitarios
// ++
// --

//Operadores relacionales
console.log(numero1 == numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero1 != numero2);

let numero3 = 23;
let numero4 = "23";
console.log("los valores son iguales? ");
console.log(numero3 == numero4);

console.log("los valores son iguales? ");
console.log(numero3 === numero4);

console.log("los valores no son iguales ");
console.log(numero3 != numero4);

console.log("los valores no son iguales ");
console.log(numero3 !== numero4);

//negacion
let verdader = true;
!verdadero;

//Tarea
// Creamos tres variables: numero1, numero2, resultado
// mostramos por consola los resultados de las operaciones
// Sumamos dos números
// Restamos dos números
// multiplicamos dos números
// Dividimos dos npumeros
// comparamos si el numero 1 es mayor o igual que numero 2
// comparamos si numero 1 es distinto de numaro 2

//Prompt es un método que nos permite solicitar datos al usuario
let firstName = prompt("Ingrese su nombre");
let lastName = prompt("Ingrese su apellido");

// console.log("Hola, me llamo " + firstName + " " + lastName);

//Template String: sirve para concatenar texto con variables de javascript.
console.log(`Hola, me llamo ${firstName} ${lastName} `);

//Tarea
/*
La Escuela Cafe de las 3am solicita un sistema, donde le permita a sus estudiantes presentarse de una manera mas interactiva y eficiente , por eso deciden acudir a un programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad favorita y deporte favorito en una tarjeta de presentación predeterminada.
 Monto ofrecido por el sistema: $2000 dolares

*/
