function manejadorCallback(evento) {
	alert(evento.target.id)
}
var butons=document.querySelectorAll('.boton')
for(var i = 0; i < butons.length; i++) {
   butons[i].addEventListener('click', manejadorCallback);
}
