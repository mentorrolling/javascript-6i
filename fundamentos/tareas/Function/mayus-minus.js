/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

*/

function evaluarCadena(cadena = prompt("Ingrese una palabra o frase")) {
  if (cadena) {
    switch (cadena) {
      case cadena.toUpperCase():
        console.log("La palabra o frase está en mayúscula");
        break;
      case cadena.toLowerCase():
        console.log("La palabra o frase está en minúscula");
        break;
      default:
        console.warn("La palabra o frase tiene mayúsculas y minúsculas");
        break;
    }
  } else {
    console.error("Debe ingresar una palabra o frase");
  }
}
evaluarCadena();
