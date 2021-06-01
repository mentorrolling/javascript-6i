//Clases
/*
Una clase es un contenedor que define las propiedades y métodos que van a tener los objetos creados a partir de este
*/
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }
}

/*
La extends palabra clave se utiliza para crear una clase secundaria de otra clase (principal).

La clase hija hereda todos los métodos de otra clase.

La herencia es útil para la reutilización del código: reutiliza propiedades y métodos de una clase existente cuando creas una nueva clase.

Nota: del ejemplo anterior; El super()método se refiere a la clase principal. Al llamar al super()método en el método constructor, llamamos al método constructor del padre y obtenemos acceso a las propiedades y métodos del padre.
*/

class Profesor extends Persona {
  constructor(nombre, apellido, materia) {
    super(nombre, apellido);
    this.materia = materia;
  }
  presentar() {
    console.log(`Buen día juntos aprenderemos ${this.materia}`);
  }
}

/*
  Cuenta bancaria
  2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
  Una propiedad titular con el valor "Alex".
  Una propiedad saldo, teniendo como valor inicial 0.
  Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
  
  */

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(valor) {
    //controlando que se anumero mayor que cero
    if (isNaN(parseFloat(valor)) || parseFloat(valor) <= 0) {
      console.error("Ingrese un valor numérico mayor que 0");
      return;
    }
    this.saldo = this.saldo + valor;
    this.informar();
  }
  extraer(valor) {
    if (isNaN(parseFloat(valor)) || parseFloat(valor) <= 0) {
      console.error("Ingrese un valor numérico mayor que 0");
      return;
    }

    if (valor > this.saldo) {
      console.warn(`Solo puede extraer hasta ${this.saldo}`);
      return;
    } else {
      this.saldo = this.saldo - valor;
      console.log(`Se extrajo ${valor}`);
      this.informar();
    }
  }
  get informar() {
    console.log("==========Detalle de la cuenta=============");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${parseFloat(this.saldo.toFixed(2))}`);
    console.log("===========================================");
  }
}

let cuenta1 = new Cuenta("Pablo", 10000);
let cuenta2 = new Cuenta("Carlos");

/*
Producto
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprimeDatos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  get imprimeDatos() {
    console.log(`Código: ${this.codigo}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Precio: $${this.precio}`);
    console.log("==========================");
  }
}

let productos = [];

function addProducto() {
  let veces = parseInt(prompt("Cuantos productos va a ingresar?"));

  if (isNaN(veces) || veces <= 0) {
    console.error("Debe ingresar un número mayor que cero");
    return;
  }

  for (let i = 0; i < veces; i++) {
    let codigo = i + 1;
    let nombre = prompt(`Ingrese el nombre del producto #${i + 1}`);

    //Validar datos de entrada--------------------
    if (nombre === "" || nombre === null) {
      console.error("Faltaron datos o se canceló");
      return;
    } else {
      let precio = parseFloat(prompt("Ingrese el precio"));
      if (isNaN(precio)) {
        console.error("No se ingresó un número o se canceló");
        return;
      }
      productos.push(
        new Producto(codigo, nombre.toUpperCase(), precio.toFixed(2))
      );
    }
    //------------------------------------------------------
  }

  for (let index = 0; index < productos.length; index++) {
    productos[index].imprimeDatos();
  }
}
