function logIn() {
  setTimeout(function () {
    let usuario = document.getElementById("userText").value;
    if (usuario) {
      alert("Usuario logueado en el sistema");
    } else {
      console.error("El usuario no se ingresó");
    }
    document.getElementById("userText").value = "";
    document.getElementById("userText").focus();
  }, 2000);
}
