//Array
//Los arrays son objetos similares a una lista
//cuyo prototipo proporciona métodos para efectuar
//operaciones de recorrido y de mutación.

//crear array
let alumnos = ["Pablo", "José", "Fabrizio"];

//Acceder a un elemento con su indice
let pimerAlumno = alumnos[0];
let ultimoAlumno = alumnos[alumnos.length - 1];

//Recorrer un array
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}

//Añadir un elemento al final del array
alumnos.push("Jorge");
//Eliminar último elemento del array
alumnos.pop();

//Añadir un elemento al principio
alumnos.unshift("Walter");

//Eliminar el primer elemento de un array
alumnos.shift();

//Encontrar el indice de un elemento del array
alumnos.indexOf("José");

//Eliminar un único elemento mediante su posición
let pos = 1;
alumnos.splice(pos, 1);

//Eliminar varios elementos a partir de una posición
let elementosEliminados = alumnos.splice(1, 2);

//reemplazar valores
alumnos.splice(0, 2, "Daniel", "Augusto");

//Conactenar dos array
let alumnas = ["María", "Rosa"];
alumnos.concat(alumnas);

//Determinar si un array contiene un valor buscado
alumnos.includes("Pablo");

//Invierte el orden
alumnos.reverse();

//Ordenar elementos de un array
alumnos.sort();

//Concatena en un string todos los elementos de un array.
alumnos.join();

//Extrae una porción del array sobre el que se llama y devuelve un nuevo array.
let alumnosEspeciales = alumnos.slice(1, 3); //posicion inicial y posicion final

let interrogante = ["🥚", "🐔"].sort();
