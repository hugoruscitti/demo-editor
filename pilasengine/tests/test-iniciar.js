test('Puede inicializar y crear actores', function(assert) {
  var done = assert.async();
  equal(0, 0, "El plano está en la posición inicial");

  var pilas = pilasengine.iniciar('elementoCanvas', {ancho: 320, alto: 240, en_test:true, data_path: '../ejemplos/data', escalar: false});

  pilas.cuando('inicia', function() {
    var fondo = pilas.fondos.Plano();

    equal(fondo.x, 0, "El plano está en la posición inicial.");

    var patito = pilas.actores.patito();

    ok(patito, "Pudo crear un actor.");

    equal(patito.x, 0, "El actor está en el centro de la pantalla.");
    equal(patito.y, 0, "El actor está en el centro de la pantalla.");


    equal(patito.rotacion, 0, "El actor está sin rotacion.");
    patito.rotacion = 180;
    equal(patito.rotacion, 180, "Pudo cambiar de rotación.");
    patito.rotacion = 0;
    equal(patito.rotacion, 0, "Y Pudo restaurar la rotación.");

    done();
  });

});
