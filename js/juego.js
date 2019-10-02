var finDeJuego=0;
/**
* Función que se ejecuta al arrastrar el elemento. 
**/
function start(e) {
	e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
	e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
	e.target.style.opacity = '0.7'; 
}

/**
* Función que se ejecuta cuando se termina de arrastrar el elemento. 
**/
function end(e){
	e.target.style.opacity = ''; // Restaura la opacidad del elemento			
	e.dataTransfer.clearData("Data");			
}

/**
* Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
**/
function enter(e) {
	return true;
}

/**
* Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
* Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
**/
function over(e) {
	if ((e.target.className == "contenedorPieza") || (e.target.id == "contenedorPiezas"))
		return false;
	else
	return true;
}
    
/**
* Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
**/
function drop(e){
	e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
	var elementoArrastrado = e.dataTransfer.getData("Text");
	// Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
	e.target.appendChild(document.getElementById(elementoArrastrado));
	var valor_Destino=e.target.id;
	comprobarPuzzle(elementoArrastrado,valor_Destino);
}
/**
 * Reproducir Audio
 */
function audio(e){
	var reproducir=new Audio();
	reproducir.src=e;
	reproducir.play();
}

function comprobarPuzzle(piezaOrigen,piezaDestino){

	if(piezaOrigen=="pieza1" && piezaDestino=="uno")
	{
		finDeJuego=finDeJuego+1;
		if(finDeJuego<4){
			audio("audio/correcto.mp3");
			document.getElementById("calificar").innerHTML='<img src="imagen/juego/correcto.gif"/>';
		}
		else{
			audio("audio/finDeJuego.mp3");
			document.getElementById("calificar").innerHTML='<img src="imagen/juego/felicidades.gif"/>';
		}
	}
	else if(piezaOrigen=="pieza2" && piezaDestino=="dos")
	{
		finDeJuego=finDeJuego+1;
		if(finDeJuego<4){
			audio("audio/correcto.mp3");
			document.getElementById("calificar").innerHTML='<img src="imagen/juego/correcto.gif"/>';
		}
		else{
			audio("audio/finDeJuego.mp3");
			document.getElementById("calificar").innerHTML='<img src="imagen/juego/felicidades.gif"/>';
		}
	}
	else if(piezaOrigen=="pieza3" && piezaDestino=="tres")
	{
		finDeJuego=finDeJuego+1;
		if(finDeJuego<4){
			audio("audio/correcto.mp3");
			document.getElementById("calificar").innerHTML='<img src="imagen/juego/correcto.gif"/>';
		}
		else{
			audio("audio/finDeJuego.mp3");
			document.getElementById("calificar").innerHTML='<img src="imagen/juego/felicidades.gif"/>';
		}
	}
	else if(piezaOrigen=="pieza4" && piezaDestino=="cuatro")
	{
		finDeJuego=finDeJuego+1;
		if(finDeJuego<4){
			audio("audio/correcto.mp3");
			document.getElementById("calificar").innerHTML='<img src="imagen/juego/correcto.gif"/>';
		}
		else{
			audio("audio/finDeJuego.mp3");
			document.getElementById("calificar").innerHTML='<img src="imagen/juego/felicidades.gif"/>';
		}
	}
	else
	{
		audio("audio/incorrecto.mp3");
		document.getElementById("calificar").innerHTML='<img src="imagen/juego/incorrecto.gif"/>';
	}
}

/**
* Muestra un mensaje de advertencia si el navegador no soporta Drag & Drop. (En Windows no lo soportan ni IE ni Safari)
**/
function comprobarnavegador() {
	if( 
		(navigator.userAgent.toLowerCase().indexOf('msie ') > -1) || 
		((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1)))
	{
		alert("Tu navegador no soporta correctamente las funciones requeridas para ejecutar el Juego. Prueba con otro navegador.");
	}

}
