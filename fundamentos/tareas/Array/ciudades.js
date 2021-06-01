/*
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


*/

let ciudades = [];

let ciudad = prompt("Ingrese el nombre de una ciudad");

while (ciudad !== null && ciudad !== "0") {
  if (ciudad !== "") {
    ciudades.push(ciudad);
  }
  ciudad = prompt("Ingrese el nombre de una ciudad");
}

console.log(`Cantidad de elementos en el arreglo: ${ciudades.length}`);

//primera posicion 0
//tercera posicion 2
//ultima posicion ciudades.length - 1
document.write(`1 - ${ciudades[0]}<br>`);
document.write(`2 - ${ciudades[2]}<br>`);
document.write(`3 - ${ciudades[ciudades.length - 1]}<br>`);

ciudades.push("Paris");

document.write(`${ciudades[1]} ocupa la segunda posición del arreglo<br>`);

ciudades.splice(1, 1, "Barcelona");
