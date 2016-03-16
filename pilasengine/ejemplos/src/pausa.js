var opciones = {ancho: 640, alto: 480, data_path: 'data'};
var pilas = pilasengine.iniciar('contenedor', opciones);

window.pilas = pilas;


pilas.cuando('inicia', function() {
  var patito = pilas.actores.patito();
  patito.x = -200;

  patito.interpolar('x', [200], 3000, 'lineal', true);
});
