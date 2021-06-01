/*

Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

*/

let tabla = parseInt(prompt("Ingrese la tabla que quiere calcular"));

function tablaMulti(tabla) {
  if (isNaN(tabla)) {
    console.error("Debe ingresar un número. Si cancela se termina el proceso");
  } else {
    console.log(`Tabla del ${tabla}`);
    document.write(`<h3>Tabla del ${tabla}</h3>`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${tabla} x ${i} = ${tabla * i}`);
      document.write(`<b>${tabla} x ${i} = </b>${tabla * i}<br>`);
    }
  }
}

tablaMulti(tabla);
