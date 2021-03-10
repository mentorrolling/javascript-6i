//Clases

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }
}

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
  informar() {
    console.log("==========Detalle de la cuenta=============");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${parseFloat(this.saldo.toFixed(2))}`);
    console.log("===========================================");
  }
}
