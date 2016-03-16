var opciones = {ancho: 640, alto: 480, data_path: 'data'};
var boton_pausar = document.getElementById('boton_pausar');
var boton_continuar = document.getElementById('boton_continuar');
var pilas = pilasengine.iniciar('contenedor', opciones);

window.pilas = pilas;

function cambiar_estado(boton, estado) {
  if (estado) {
    boton.removeAttribute('disabled');
  } else {
    boton.setAttribute("disabled", true);
  }
}

function actualizar_ui() {
  cambiar_estado(boton_pausar, !pilas.pausa_habilitada);
  cambiar_estado(boton_continuar, pilas.pausa_habilitada);
}


boton_pausar.onclick = function() {
  pilas.pausar();
  actualizar_ui();
};

boton_continuar.onclick = function() {
  pilas.continuar();
  actualizar_ui();
};


pilas.cuando('inicia', function() {
  var patito = pilas.actores.patito();
  patito.x = -200;

  patito.interpolar('x', [200], 3000, 'lineal', true);

  actualizar_ui();
});
