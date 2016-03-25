test('Puede inicializar y crear actores', function(assert) {
  var done = assert.async();
  equal(0, 0, "El plano está en la posición inicial");

  var pilas = pilasengine.iniciar('elementoCanvas', {ancho: 320, alto: 240, en_test:true, data_path: '../ejemplos/data'});

  pilas.cuando('inicia', function() {
    var fondo = pilas.fondos.Plano();
    equal(fondo.x, 0, "El plano está en la posición inicial");
    equal(fondo.x, 0, "El plano está en la posición inicial");
    done();
  });

/*
  setTimeout(function() {
  }, 3000);
  */

//  pilas.ejecutar();

});
