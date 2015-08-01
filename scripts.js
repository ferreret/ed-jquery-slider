// Guardar el contenedor principal
var c = $('#slider');
// Guardar las secciones del slider
var s = c.find('section');
// Guardar el número de secciones
var n = s.length;
// Crear un contenedor interno
c.wrapInner('<div class="slider-inner"></div>');
var ci = $('.slider-inner');
// Ancho del contenedor interno
ci.css('width', 100*n+'%');
s.css('width', 100/n+'%');
// Crear botones para avanzar y retroceder
c.after(('<button id="next">Next</button>'));
c.after(('<button id="prev">Prev</button>'));
// Guardamos los botones en variables
var prev = $('#prev');
var next = $('#next');
// Envolver los botones
next.add(prev).wrapAll('<div class="slider-nav"></div>');

/* 
Crear la función para navegar entre los slides
*/
// Índice para movernos entre los slides
var i = 0;
// Escribir la función para moverse
function mover() {
	if (i === 0) {
		ci.css('left', 0);
	}
	else if (i > 0) {
		ci.css('left', '-' + 100*i + '%');
	}
};
function avanza() {
	if (i + 1 < n) {
		i++;
		mover();
	}
}
function retrocede() {
	if (i > 0) {
		i--;
		mover();
	}
}
// Capturamos los eventos para los botones
next.on('click', avanza);
prev.on('click', retrocede);

// Eventos de teclado
// Flecha izquierda 37, fecha derecha 39
$(document).on('keydown', function (e) {
	//console.log(e.which);
	switch (e.which) {
		case 37 :
			retrocede();		
			break;
		case 39 :
			avanza();
			break;
	}
});