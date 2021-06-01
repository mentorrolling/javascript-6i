/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
 */


/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

/*
Realiza un script que cuente el número de vocales que tiene un texto.
*/

let texto = prompt("Ingresar texto");

let vocales = [];

for (let i = 0; i < texto.length; i++) {
  let letra = texto.charAt(i).trim().toLowerCase();

  switch (letra) {
    case "a":
      vocales.push(letra);
      break;
    case "e":
      vocales.push(letra);
      break;
    case "i":
      vocales.push(letra);
      break;
    case "o":
      vocales.push(letra);
      break;
    case "u":
      vocales.push(letra);
      break;
  }
}

console.log(`El texto ${texto} tiene ${vocales.length} vocales`);

console.log(vocales);
