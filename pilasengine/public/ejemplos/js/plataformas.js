var pilas = pilasengine.iniciar('elementoCanvas', {data_path: '../../../public/data'});

window.pilas = pilas;
window.actor = null;

pilas.cuando('inicia', function() {

  pilas.fondos.Plano();
  actor = pilas.actores.Actor();

});
