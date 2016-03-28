test('Puede aplicar interpolaciones a los actores', function(assert) {
  var done = assert.async();
  pilas.reiniciar();

  patito = pilas.actores.patito();
  patito.escala = [2, 1, 2];

  setTimeout(function() {
    equal(patito.escala, 2, "Luedo de unos segundos escaló correctamente.");

    patito.rotacion = [180];

    setTimeout(function() {
      equal(patito.rotacion, 180, "Puede dar media vuelta.");
      patito.escala = [0];

      setTimeout(function() {
        equal(patito.escala, 0, "Puede cambiar la escala a 0.");
        done();
      }, 1000);

    }, 1000);

  }, 2000);

});
