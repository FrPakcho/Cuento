var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// otras variables necesarias:
var audio, fuenteDeReproduccion;
var stop = true;

function manejadorCallback(evento) {
	var nombre=evento.target.id;
	nombre=nombre.substr(0,nombre.length-1)
	audio=new Audio(("./audio/".concat(nombre)).concat('.mp3'));
    audio.play();
    document.getElementById(evento.target.id).innerHTML = nombre;
}
var butons=document.querySelectorAll('.boton')
console.log(butons.length)
for(var i = 0; i < butons.length; i++) {
   butons[i].addEventListener('click', manejadorCallback);
   console.log("entro al js")
}

