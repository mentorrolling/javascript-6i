//Estructura condicional
// switch

// let numero = 3;

// switch (numero) {
//   case 3:
//     //accion
//     break;
//   case 10:
//     //accion
//     break;
//   default:
//       //mensaje
//     break;
// }

// let diaNumero = new Date().getDay();

// switch (diaNumero) {
//   case 0:
//     console.log("Hoy es Domingo");
//     break;
//   case 1:
//     console.log("Hoy es Lunes");
//     break;
//   case 2:
//     console.log("Hoy es Martes");
//     break;
//   case 3:
//     console.log("Hoy es Miercoles");
//     break;
//   case 4:
//     console.log("Hoy es Jueves");
//     break;
//   case 5:
//     console.log("Hoy es Viernes");
//     break;
//   case 6:
//     console.log("Hoy es Sábado");
//     break;

//   //   default:
//   //       console.log('Ese dia no existe')
//   //       break;
// }

let comando = prompt("Ingrese un comando (alert, consola, print)");

switch (comando) {
  case "alert":
    alert("Usando estructura Switch con un alert");
    break;
  case "consola":
    console.log("Usando estructura Switch en consola");
    break;
  case "print":
    document.write("Usando estructura Switch en el navegador");
    break;
  default:
    console.error("Comando no reconocido");
    break;
}

let num1 = 2;
let num2 = 6;
switch (true) {
  case num1 >= num2:
    console.log("Num1 es mayor o igual que num2");

    break;

  default:
    console.log("ni idea");
    break;
}
//tarea
/*
- Recibir dos valores y la operacion a realizar (+, -, *, /)
- Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
- Con una estructura switch verificar la operacion y devolver un mensaje con el 
resultado de la misma.
- Si se ingresa una operación que no está contemplada devolver un mensaje de error.

*/
