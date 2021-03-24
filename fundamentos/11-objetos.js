// let auto = {
//   color: "red",
//   marca: "Fiat",
//   modelo: "Palio",
//   annio: 2018,
//   encendido: false,
//   encenderApagar: function () {
//     this.encendido = !this.encendido;
//     if (this.encendido) {
//       console.log("El vehículo está encendido");
//     } else {
//       console.log("El vehículo está apagado");
//     }
//   },
// };

let alumno = {
  nombre: "Pablo Marino",
  edad: 38,
  dni: "29640333",
  curso: "Fullstack",
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

//obtener valores

alumno.nombre;

alumno["edad"];

//Agregar un nuevo atributo
alumno.domicilio = "Lomas de tafí";

//Modificar un valor
alumno.nombre = "Pablo Daniel Marino";

//Eliminar un valor
delete alumno.edad;

/*
  La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas.
  */

for (let atributo in alumno) {
  console.log(`${atributo}: ${alumno[atributo]}`);
}

//Arreglo de objetos
let alumnos = [
  { nombre: "Julio", curso: "Fullstack" },
  { nombre: "Fabricio", curso: "Javascript" },
  { nombre: "Miguel", curso: "Fullstack" },
];
//recorrer el arreglo de objetos

alumnos.forEach((alumno) => {
  console.log(`Nombre: ${alumno.nombre} - ${alumno.curso}`);
  console.log("----------------------------------");
});

for (let index = 0; index < alumnos.length; index++) {
  console.log(`Nombre: ${alumnos[index].nombre} - ${alumnos[index].curso}`);
}
