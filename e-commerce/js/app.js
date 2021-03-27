class Producto {
  constructor(codigo, nombre, precio, stock, imagen) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
  }
}

//crear arreglo de productos
let productos = JSON.parse(localStorage.getItem("productos")) || [];

//crear arreglo para el carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//variable que suma los precios del carrito
let sumaCarrito = 0;

//contador del badge de carrito
let contadorCarrito = document.querySelector("#countCarrito");

//contenedor card-deck
let contenedor = document.querySelector("#contenedor");

//Body del modal
let cuerpoModal = document.querySelector(".modal-body");

//Creacion de productos
// let prod1 = new Producto(1,'Headset Logitech',5599,5,"http://http2.mlstatic.com/D_838397-MLA43777111580_102020-O.jpg")
// let prod2 = new Producto(2,"Mouse Gamer GX",3500,3,"https://www.authogar.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/g/p/gpro.png")
// let prod3 = new Producto(3,"Teclado mecánico",4800,2,"https://d2r9epyceweg5n.cloudfront.net/stores/911/585/products/philips-teclado-g605-11-48b5b57b29daafb8a116019913576074-1024-1024.jpg")

//Agregar los productos al arreglo
// productos.push(prod1,prod2,prod3)

//Guardar en localStorage
// localStorage.setItem('productos',JSON.stringify(productos))
function cantidadCarrito() {
  let sumaCantidad = 0;

  for (let i = 0; i < carrito.length; i++) {
    sumaCantidad += carrito[i].cantidad;
  }
  contadorCarrito.innerHTML = sumaCantidad;
}

function cargarCard() {
  contenedor.innerHTML = "";
  for (let i = 0; i < productos.length; i++) {
    let div = document.createElement("div");
    div.classList = "col col-md-6 col-lg";
    div.innerHTML = `
    <div class="card">
              <img src="${productos[i].imagen}" class="card-img-top imgCard" alt="${productos[i].nombre}" />
              <div class="card-body">
                <h5 class="card-title">${productos[i].nombre}</h5>
                <p class="card-text">
                  Stock: ${productos[i].stock}
                </p>
              </div>
              <div class="card-footer">
              <p class="card-text">Precio: $${productos[i].precio}</p>
              <a href="#" class="btn btn-success" onclick="agregarCarrito(${productos[i].codigo})">Carrito</a>
              </div>
            </div>
    `;
    contenedor.appendChild(div);
  }
}

function agregarCarrito(codigo) {
  let indexProd = productos.findIndex(function (prod) {
    return prod.codigo === codigo;
  });

  if (productos[indexProd].stock >= 1) {
    productos[indexProd].stock -= 1;

    /*================================================
      Verificar que el producto no esté ya en el carrito
    ===================================================
*/
    let indexCar = carrito.findIndex(function (prod) {
      return prod.id === codigo;
    });

    if (indexCar >= 0) {
      carrito[indexCar].cantidad += 1;
      carrito[indexCar].precio += carrito[indexCar].precio;
    } else {
      carrito.push({
        id: productos[indexProd].codigo,
        nombre: productos[indexProd].nombre,
        precio: productos[indexProd].precio,
        imagen: productos[indexProd].imagen,
        cantidad: 1,
      });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("productos", JSON.stringify(productos));
    cantidadCarrito();
    cargarCard();
  } else {
    alert("No hay stock disponible para este producto");
  }
}
/* ====================
cargarModal()
=======================
*/

function cargarModal() {
  cuerpoModal.innerHTML = "";

  let suma = document.querySelector("#totalCarrito");
  sumaCarrito = 0;

  if (carrito.length === 0) {
    cuerpoModal.innerHTML = "<h3>No hay productos en el carrito</h3>";
    sumaCarrito = 0;
    suma.innerHTML = `<b>${sumaCarrito}</b>`;
    return;
  }

  carrito.forEach(function (prod) {
    let div = document.createElement("div");
    div.classList = "card mb-2";
    let detalle = `
<div class="row no-gutters">
    <div class="col-md-4">
      <img class="imagenCarrito" src="${prod.imagen}" alt="${prod.nombre}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${prod.cantidad} ${prod.nombre}</h5>
        <p class="card-text">Precio: $${prod.precio}</p>
        <a href="#" class="btn btn-danger">Eliminar</a>
      </div>
    </div>
  </div>
`;
    div.innerHTML = detalle;
    cuerpoModal.appendChild(div);
    sumaCarrito += prod.precio;
  });

  suma.innerHTML = `<b>$${sumaCarrito}</b>`;
}

/*=============
mostrarModal()
===============
*/

function verCarrito() {
  cargarModal();
  $("#modalCarrito").modal("show");
}

cargarCard();
cantidadCarrito();
