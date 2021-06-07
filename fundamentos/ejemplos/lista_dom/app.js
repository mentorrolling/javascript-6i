let alumnos = [
  "Pablo Marino",
  "Fabrizio Tonin",
  "Laura Bono",
  "Carlos Sosa",
  "José Gonzalez",
  "Alberto Perez",
];

let tarjeta = document.querySelector(".card-body"); //obtengo la clase de la card-body
let tarjetaOrdena = document.querySelector("#card-ordenar"); //obtener el id de card-ordenar

function listarAlumnos(array, contenedor) {
  array.forEach(function (alumno) {
    let contenido = document.createElement("p"); //Creamos un elemento p
    contenido.innerText = alumno; //Agregamos contenido al p. Nombre da cada alumno

    return contenedor.appendChild(contenido); //Agregamos el contenido al contenedor
  });
}

//cargar dinámicamente la primera lista
listarAlumnos(alumnos, tarjeta);

//Obtener nombre y apellido. Listar con el apellido primero
function intercalarNombre(lista) {
  let newList = lista.map(function (item) {
    let espacio = item.indexOf(" ");
    let nombre = item.slice(0, espacio);
    let apellido = item.slice(espacio + 1, item.length);

    return `${apellido} ${nombre}`;
  });

  return newList;
}

//Ordenar lista de apellido nombre de forma alfabética (a-z)
function ordenarAlumnos() {
  limpiarLista();
  let alumnosOrdenados = intercalarNombre(alumnos).sort();

  listarAlumnos(alumnosOrdenados, tarjetaOrdena);
}

function ordenarAlumnosZ() {
  limpiarLista();
  let alumnosOrdenados = intercalarNombre(alumnos).sort().reverse();

  listarAlumnos(alumnosOrdenados, tarjetaOrdena);
}

function limpiarLista() {
  tarjetaOrdena.innerHTML = ""; //limpiar el contenedor de la segunda lista
}
