//Funciones constructoras
/*
La función constructora es una plantilla con la cual podemos crear varios objetos. Normalmente, para diferenciarla de otras funciones se la suele nombrar con mayúscula.
*/

function Movies(titulo, sinopsis, director, reparto) {
  this.titulo = titulo;
  this.sinopsis = sinopsis;
  this.director = director;
  this.reparto = reparto;
}

Movies.prototype.listar = function () {
  console.log("Título:", this.titulo);
  console.log("Sinópsis:", this.sinopsis);
  console.log("Director:", this.director);
};

// let jurasic = new Movies(
//   "Jurassic Park",
//   "Dinosaurios en un parque",
//   "Steven Spielberg",
//   "Carlos, Fabrizio, Rosa"
// );

// let futuro = new Movies("Volver al futuro", "Viajar en el tiempo");

let peliculas = [];

function crearMovies() {
  let contador = parseInt(prompt("Cuantas películas va a cargar?"));

  if (!isNaN(contador) && contador > 0) {
    for (let i = 0; i < contador; i++) {
      let titulo = prompt(`Ingrese el título de la película #${i + 1}`);
      let sinopsis = prompt("Ingrese una brevisima reseña");
      let director = prompt("Ingrese el director");
      let reparto = prompt(
        "Ingrese el nombre de los actores separados por comas"
      );

      // if (
      //   titulo === null ||
      //   sinopsis === null ||
      //   director === null ||
      //   reparto === null
      // )
      if (!titulo || !sinopsis || !director || !reparto) {
        // i = contador;
        console.error("Faltaron datos necesarios");
      } else {
        peliculas.push(new Movies(titulo, sinopsis, director, reparto));
      }
    }

    for (let i = 0; i < peliculas.length; i++) {
      peliculas[i].listar();
    }
  }
}
