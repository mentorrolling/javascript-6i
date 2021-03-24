// ===========================================================
// ==============JavaScript Object Notation===================
// ===========================================================
// SI
// {}
// []
// String
// Number
// Boolean

// NO
// function
// undefined
// 0
// ====== parse ======

let persona = {
  nombre: "Pablo",
  apellido: "marino",
  edad: "31",
  trabaja: true,
  comisiones: ["6i", "9i", "3i", "7a"],
  id: "0123",
  indefinido: undefined,
  saludar: function () {
    console.log("hola");
  },
};

// ====== stringify ======
// let personaJSON = {
//   "nombre": "Pablo",
//   "apellido": "marino",
//   "edad": "31",
//   "trabaja": true,
//   "comisiones": ["6i", "9i", "3i", "7a"],
//   "id": "0123",
// };

persona = JSON.stringify(persona);
console.log(persona);
console.log(persona.nombre);

persona = JSON.parse(persona);
console.log(persona);
console.log(persona.nombre);
