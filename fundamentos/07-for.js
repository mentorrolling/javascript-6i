//bucle for

// for (let i = 1; i <= 10; i++) {
//   console.log(i);

// }

//tarea
//ingresar la tabla que queremos calcular
//mostar por consola la tabla

let tabla = parseInt(prompt("Ingrese el número de la tabla a calcular"));
if (isNaN(tabla)) {
  console.error("Debe ingresar un valor entero");
  document.write("<mark>Debe ingresar un valor entero</mark>");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${i * tabla}`);
    document.write(`<b>${tabla} x ${i}</b> = ${i * tabla}<br>`);
    //2 x 1 = 2
    //2 x 2 = 4
  }
}
