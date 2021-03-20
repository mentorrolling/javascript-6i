let alumnos = [
  "Pablo Marino",
  "Fabrizio Tonin",
  "Laura Bono",
  "Carlos Sosa",
  "José Gonzalez",
  "Alberto Perez",
];

let tarjeta = document.querySelector(".card-body");
let tarjetaOrdena = document.querySelector("#card-ordenar");

function listarAlumnos(array, contenedor) {
  array.forEach(function (alumno) {
    let contenido = document.createElement("p");
    contenido.innerText = alumno;

    return contenedor.appendChild(contenido);
  });
}

listarAlumnos(alumnos, tarjeta);

function intercalarNombre(lista) {
  let newList = lista.map(function (item) {
    let espacio = item.indexOf(" ");
    let nombre = item.slice(0, espacio);
    let apellido = item.slice(espacio + 1, item.length);

    return `${apellido} ${nombre}`;
  });

  return newList;
}

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
  tarjetaOrdena.innerHTML = "";
}
