class Usuario {
  constructor(id, usuario, nombre, email, password, activo = true) {
    this.id = id;
    this.usuario = usuario;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.activo = activo;
  }
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//Generar id automático-------------
function idRandom() {
  if (usuarios.length > 0) {
    return usuarios[usuarios.length - 1].id + Math.round(Math.random() * 100);
  } else {
    return Math.round(Math.random() * 100);
  }
}
//-----------------------------------

let formulario = document.querySelector("#btnSubmit");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let id = idRandom();
  let nombre = document.querySelector("#name").value;
  let usuario = document.querySelector("#user").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let validar = usuarios.find(function (user) {
    return user.email === email;
  });

  if (validar !== undefined) {
    alert("Usuario Existente");

    document.querySelector("#btnSubmit").reset();
    document.querySelector("#name").focus();

    return;
  }

  let newUser = new Usuario(id, usuario, nombre, email, password);

  usuarios.push(newUser);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  document.querySelector("#btnSubmit").reset();
  alert("Registro exitoso!");
});
