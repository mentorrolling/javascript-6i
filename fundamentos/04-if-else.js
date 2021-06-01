//Estructuras de control

//if..else

// if(verdadero){
// ...acciones...
// }

let num = 10000000;

if (num % 2 === 0) {
  console.log("El número es par");
} else {
  console.error("El número no es par");
}

//anidado
if (num === 10) {
  console.log("El número es 10");
} else if (num > 10) {
  console.log("El número es mayor que 10");
} else {
  console.log("El número es menor que 10");
}

//fiesta
//mayor de edad
//no mayor de edad acompañado de un tutor
//menor de edad y no va el tutor no entra

let edad = 10;
let tutor = true;

// if (edad >= 18) {
//   console.log("Puede entrar y disfrutar de la fiesta");
// } else if (tutor) {
//   console.log("Puede entrar y disfrutar de la fiesta porque viene acompañado");
// } else {
//   console.error("No puede disfrutar de la fiesta, :(");
// }

// && AND
// || OR

if (edad < 18 && tutor === false) {
  console.error("No puede disfrutar de la fiesta, :(");
} else if (edad >= 18 || tutor === true) {
  console.log("Puede entrar y disfrutar de la fiesta");
}


//Otra forma

// let tutor = null

// let edad = prompt('Ingrese su edad')
// if (edad < 18) {
//     let validar = prompt('Vienes con un tutor? | Si | No')
//     if (validar === 'Si') {
//         tutor = true
//     } else {
//         tutor = false
//     }
// }

// if (edad >= 18) {
//     console.log('Bienvenido a la fiesta');
// } else if (tutor) {
//     console.log('Binvenido a la fiesta, no se separe de su tutor');
// } else {
//     console.error('No puede acceder a la fiesta');
// }

// if (edad >= 18 || tutor === true) {
//     console.log('Bienvenido a la fiesta');
// } else {
//     console.error('No puede acceder a la fiesta');
// }




//Tarea
/*
- Ingresan dos numeros
- Si el primero es mayor que el segundo mostrar en consola 
la suma de ambos
- Si el primero es menor que el segundo mostrar en consola 
la resta del segundo menos el primero.
- Si son iguales mostrar en consola la multiplicación de ambos.

ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3
*/
let numerito = prompt("Ingrese el número");

// if (isNaN(numerito)) {
//   numerito = 0;
// }
