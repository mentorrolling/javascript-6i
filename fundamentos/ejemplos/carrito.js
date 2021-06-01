//Tarea
/*
Crear una aplicacion de carrito de compras donde se ingresen productos como elementos en un array
las tareas que debe hacer son las siguientes:
- Agregar producto al carrito*
- Listar los productos del carrito *
- Buscar un producto en el carrito *
- Filtrar productos que coincidan con una palabra, parte de ella o una letra *
- Eliminar producto del carrito
*/

let carrito = ["BANANA", "BICICLETA", "HORNO", "PARLANTES"];

function agregarProducto() {
  let producto = prompt("Ingrese un producto");

  // while (producto !==null && producto !== "") {
  while (producto) {
    carrito.push(producto.trim().toUpperCase());
    producto = prompt("Ingrese un producto");
  }
}

function listarProductos() {
  if (carrito.length > 0) {
    console.log("Su lista de productos es la siguiente");
    // for (let i = 0; i < carrito.length; i++) {
    //   console.log(`${i + 1}_${carrito[i]}`);
    // }

    //   carrito.forEach(function (producto, i) {
    //     console.log(`${i + 1} ${producto}`);
    //   });

    carrito.map(function (producto, i) {
      console.log(`${i + 1} ${producto}`);
      // return `${i + 1} ${producto}`
    });

    //   return mensaje
  } else {
    console.log("Todavía no tiene productos en su carrito");
  }
}

function buscadorDeProducto() {
  let producto = prompt("Ingresar producto a buscar");

  if (producto) {
    // let resultado = carrito.find(function (produc) {
    //   return produc === producto.trim().toUpperCase();
    // });

    let resultado = carrito.includes(producto.trim().toUpperCase());

    if (resultado) {
      console.log(
        `El producto ${producto.trim().toUpperCase()} está en el carrito`
      );
    } else {
      console.warn("No se encontró producto");
    }
  } else {
    console.error("No se ingresó ningún producto");
  }
}

function filtrarProductos(producto = prompt("Ingrese el producto")) {
  let productos = carrito.filter(function (produc) {
    return produc.indexOf(producto.toUpperCase()) > -1;
  });

  if (productos.length > 0) {
    return productos;
  } else {
    console.error("No hay productos que cumplan con la búsqueda");
  }
}

// function eliminarProducto(producto = prompt("Ingrese el producto a eliminar")) {
//   if (producto) {
//     let index = carrito.indexOf(producto.trim().toUpperCase());

//     if (index != -1) {
//       let validar = confirm(
//         `Está seguro que quiere borrar el producto ${producto
//           .trim()
//           .toUpperCase()}`
//       );

//       if (validar) {
//         carrito.splice(index, 1);
//         console.log(`Se eliminó ${producto.trim().toUpperCase()} del carrito`);
//       }
//     } else {
//       console.error("El producto no existe en el carrito");
//     }
//   }
// }
function eliminarProducto(
  pos = prompt("Ingrese la opción del producto a eliminar")
) {
  if (pos) {
    pos = parseInt(pos);
    let producto = carrito[pos - 1];
    if (producto !== undefined) {
      let validacion = confirm(`Esta seguro que desea eliminar ${producto}`);

      if (validacion) {
        carrito.splice(pos - 1, 1);
        console.log(`Eliminado el producto ${producto}`);
        listarProductos();
      }
    } else {
      console.error("En esa opción no hay productos");
    }
  } else {
    console.error("Ocurrió un error y no es posible realizar la acción");
  }
}

listarProductos();
