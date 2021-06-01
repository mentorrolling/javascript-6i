//Tarea
/*
Crear una aplicacion de un changuito de compras donde se ingresen productos como elementos en un array
las tareas que debe hacer son las siguientes:
- Agregar producto al carrito*
- Listar los productos del carrito *
- Buscar un producto en el carrito *
- Filtrar productos que coincidan con una palabra, parte de ella o una letra *
- Eliminar producto del carrito
*/
let changuito = ["BANANA", "FIDEOS", "SOPA"];

function agregarProducto(producto = prompt("Ingrese un producto")) {
  // let prod = producto;

  while (producto !== null) {
    if (producto === "") {
      alert("No ingresó ningún producto");
    } else {
      changuito.unshift(producto.toUpperCase());
    }
    producto = prompt("Ingrese un producto");
  }
  listarProductos();
}

function listarProductos() {
  console.log("====Tu Changuito 👍====");

  for (let index = 0; index < changuito.length; index++) {
    console.log(`${index + 1} - ${changuito[index]}`);
  }
  //   for (producto of changuito) {
  //     console.log(producto);
  //     console.log("=================");
  //   }
}

function buscarProducto(producto = prompt("Ingrese el producto a buscar")) {
  let validar = changuito.includes(producto.toUpperCase());
  if (validar) {
    console.log("El producto está en el changuito");
  } else {
    console.error("El producto no está en el changuito");
  }
}

function filtrarProductos(cadena = prompt("Ingrese una palabra")) {
  let productos = changuito.filter(function (prod) {
    return prod.indexOf(cadena.toUpperCase()) > -1;
  });

  if (productos.length > 0) {
    return productos;
  } else {
    console.error("No hay productos que cumplan con la búsqueda");
  }
}

function borrarProducto(
  pos = prompt("Ingrese el número del producto a eliminar")
) {
  let producto = changuito[pos - 1];

  if (producto) {
    let seleccion = confirm(`Está seguro que quiere eliminar ${producto}?`);
    if (seleccion) {
      changuito.splice(pos - 1, 1);
      console.warn(`${producto} ah sido eliminado de su changuito`);
    }
  } else {
    alert("No hay productos en esa posición");
    console.error("No hay productos en esa posición");
    pos = prompt("Ingrese el número del producto a eliminar");
  }
}
