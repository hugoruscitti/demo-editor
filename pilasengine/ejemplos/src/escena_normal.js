var opciones = {ancho: 300, alto: 200, escalar: false, data_path: 'data'};
var pilas = pilasengine.iniciar('contenedor', opciones);

window.pilas = pilas;

pilas.cuando('inicia', function() {
  pilas.escenas.normal();
});
