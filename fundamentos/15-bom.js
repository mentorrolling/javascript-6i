//Navigator-------------------------------------
let browser,
  sUsrAg = navigator.userAgent;

if (sUsrAg.indexOf("Chrome") > -1) {
  browser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
  browser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
  browser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
  browser = "Mozilla Firefox";
}

alert("Usted está utilizando: " + browser);

//location-------------------------------------
// La propiedad de sólo lectura Window.location retorna un objeto Location con información acerca de la ubicación actual del documento.

//Ejemplo 1 assign
location.assign("https://google.com");
//Ejemplo 2 reload
location.reload();
//Enviar info search

function sendData(sData) {
  location.search = sData;
}

sendData("Pablo");

//history----------------------------------
history.go(1); //me muevo adelante una página
history.go(-1); //me muevo atras una página
