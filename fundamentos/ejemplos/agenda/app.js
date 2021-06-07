//Traer datos de localStorage y definir memoria

let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

//agendaFiltrada es una variable momentanea que trae los datos filtrados
let agendaFiltrada = JSON.parse(localStorage.getItem("agenda")) || [];
let memo = 10;

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

//Contador de registros--------------------------------------
function contarRegistro(array) {
  document.querySelector("#count").innerHTML = array.length;
}

//Agregar registros a la agenda--------------------------------
function addContact() {
  let nombre = document.querySelector("#nombreText");
  let telefono = document.querySelector("#telefText");

  if (!nombre.value || !telefono.value) {
    alert("faltan datos");
    document.querySelector("#nombreText").focus();
  } else {
    let verify = verifyContact(nombre.value);
    if (verify) {
      alert("El contacto ya existe en su agenda");
    } else {
      if (memo > 0) {
        agenda.push(new Contacto(nombre.value.toUpperCase(), telefono.value));
        localStorage.setItem("agenda", JSON.stringify(agenda));
        memo -= 1;
      } else {
        alert("Memoria llena, elimine algunos contactos");
      }
      updateAgenda();
    }
  }
}

//Verificar si un contacto existe en la agenda----------------
function verifyContact(nombre) {
  let verify = agenda.find(function (contacto) {
    return contacto.nombre.toLowerCase() === nombre.toLowerCase();
  });
  if (verify) {
    console.log(verify);
    return true;
  } else {
    return false;
  }
}

//Borrar un contacto de la agenda---------------------------
function delContact(id) {
  // console.log(id);
  // console.log(agendaFiltrada[id]);
  agenda = JSON.parse(localStorage.getItem("agenda"));

  let index = agenda.findIndex(function (contacto) {
    return contacto.nombre === agendaFiltrada[id].nombre;
  });

  let validar = confirm(
    `Esta seguro que desea eliminar a ${agenda[index].nombre} de la agenda?`
  );
  if (validar) {
    agenda.splice(index, 1);
    localStorage.setItem("agenda", JSON.stringify(agenda));
    updateAgenda();
  }
}

//Actualizador de la data y formulario--------------------------
function updateAgenda() {
  document.querySelector("#nombreText").value = "";
  document.querySelector("#telefText").value = "";
  document.querySelector("#nombreText").focus();
  agenda = JSON.parse(localStorage.getItem("agenda"));
  agendaFiltrada = JSON.parse(localStorage.getItem("agenda"));
  contarRegistro(agenda);
  cargarTabla(agenda);
}

//Crea el cuerpo de la tabla-------------------------------------
function cargarTabla(array) {
  document.querySelector("#cuerpoTabla").innerHTML = "";
  // let tabla = JSON.parse(localStorage.getItem("agenda")) || [];

  array.forEach(function (elemento, index) {
    let fila = document.createElement("tr");
    fila.classList = "text-center";
    let datos = `
    
        <td>${elemento.nombre}</td>
        <td>${elemento.telefono}</td>
        <td>
            <button class="btn btn-danger" onclick='delContact(${index})'>X</button>
        </td>
   `;
    fila.innerHTML = datos;

    let cuerpo = document.querySelector("#cuerpoTabla");
    cuerpo.appendChild(fila);
  });
}

//Filtrar tabla usando el input-------------------------
function filterTabla() {
  let texto = document.querySelector("#textBuscar").value;
  agenda = JSON.parse(localStorage.getItem("agenda"));
  agendaFiltrada = agenda.filter(function (contacto) {
    return contacto.nombre.toLowerCase().indexOf(texto.toLowerCase()) > -1;
  });
  console.log(agendaFiltrada);
  document.querySelector("#textBuscar").value = "";
  document.querySelector("#textBuscar").focus();
  contarRegistro(agendaFiltrada);
  cargarTabla(agendaFiltrada);
}

//Carga inicial de la interface
cargarTabla(agenda);
contarRegistro(agenda);
