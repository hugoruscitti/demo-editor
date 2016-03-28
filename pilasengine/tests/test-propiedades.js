test('Puede cambiar propiedades de los actores', function(assert) {
  pilas.reiniciar();

  var patito = pilas.actores.patito();

  equal(patito.x, 0, "El actor está en el centro de la pantalla.");
  equal(patito.y, 0, "El actor está en el centro de la pantalla.");


  equal(patito.rotacion, 0, "El actor está sin rotacion.");
  patito.rotacion = 180;
  equal(patito.rotacion, 180, "Pudo cambiar de rotación.");
  patito.rotacion = 0;
  equal(patito.rotacion, 0, "Y pudo restaurar la rotación.");

});
