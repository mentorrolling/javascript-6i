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
