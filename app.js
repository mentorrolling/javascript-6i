let h3 = document.createElement("h3");

h3.innerText = "Texto de prueba h3";

document.body.appendChild(h3);

let padre = document.querySelector("#parrafos");
let nuevoNodo = document.createElement("p");
nuevoNodo.innerText = "Soy un nuevo nodo insertado";
let parrafo2 = document.querySelector("#parrafo2");

padre.insertBefore(nuevoNodo, parrafo2);
//---------------------------------------

let h2 = document.createElement("h2");

h2.innerText = "Soy un H2";

document.body.replaceChild(h2, h3);

// document.removeChild(h2)
//e-commerce LocalStorage

// let productos = JSON.parse(localStorage.getItem("productos")) || [];
// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// class Producto {
//   constructor(codigo, nombre, precio, stock = 10) {
//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//   }
// }

// function altaProducto() {
//   let veces = parseInt(
//     prompt("Ingrese la cantidad de productos que dará de alta")
//   );

//   if (isNaN(veces) || veces <= 0) {
//     console.error("Debe ingresar un número mayor que cero");
//     return;
//   }

//   for (let i = 0; i < veces; i++) {
//     let codigo = (i + 1) * Math.round(Math.random() * 100);
//     let nombre = prompt(`Ingrese el producto número ${i + 1}`);

//     if (!nombre) {
//       console.error("Debe ingresar un nombre válido");
//       return;
//     }

//     let precio = parseFloat(prompt("Ingrese el precio del producto"));
//     if (isNaN(precio) || precio <= 0) {
//       console.error("El dato no es válido");
//       return;
//     }

//     productos.push(new Producto(codigo, nombre, precio));
//   }

//   localStorage.setItem("productos", JSON.stringify(productos));
//   listarProductos();
// }

// function listarProductos() {
//   for (let i = 0; i < productos.length; i++) {
//     console.log(`Código: ${productos[i].codigo}`);
//     console.log(`Nombre: ${productos[i].nombre}`);
//     console.log(`Precio: $${productos[i].precio}`);
//     console.log(`Stock: ${productos[i].stock}`);
//     console.log("============================");
//   }
// }

// function comprarProducto(codigo, cantidad) {
//   let index = productos.findIndex(function (product) {
//     return product.codigo === codigo;
//   });

//   if (index >= 0) {
//     if (cantidad > productos[index].stock) {
//       console.error("Supera el stock");
//       return;
//     }
//   }
// }
