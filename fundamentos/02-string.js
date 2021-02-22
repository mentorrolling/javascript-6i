let nombre = "Pablo";
let apellido = "Marino";
let frase = "    Bienvenidos a la clase ";

console.log(nombre + " " + apellido);

console.log(`${nombre} ${apellido}`);

console.log(nombre.toUpperCase());
console.log(apellido.toLowerCase());

console.log(nombre.length);
console.log(nombre.charAt(4));
console.log(apellido.substr(0, 3));
console.log(frase.trim());

//traer la última letra del apellido
// 1- ingreso el apellido
// 2 - calcular cantidad de caracteres
// 3 - obtener la letra llamando a la ultima posición

let apellido2 = "Gonzalez";

let cantidadCaracteres = apellido2.length;

let ultimaLetra = apellido2.charAt(cantidadCaracteres - 1);

console.log(`La última letra del apellido es ${ultimaLetra}`);

//Capitalizar el Nombre
// 1- recibo un nombre
// 2- obtener la primera letra
// 3- convertir primera letra a mayúscula
// 4- concatenar primera letra mayúscula con el resto del nombre

let nombre2 = "horacio";
let primeraLetra = nombre2.charAt(0);
let letraMayuscula = primeraLetra.toUpperCase();
let resto = nombre2.substr(1, nombre2.length - 1);
console.log(`${letraMayuscula}${resto}`);
