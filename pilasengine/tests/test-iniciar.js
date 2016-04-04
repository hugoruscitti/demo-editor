test('test-iniciar: Puede inicializar y crear actores', function(assert) {
  pilas.reiniciar();

  equal(pilas.obtener_cantidad_de_actores(), 1, "Hay un solo actor en pantalla (el fondo).");

  var patito = pilas.actores.patito();
  ok(patito, "Pudo crear correctamente al actor parito.");

  equal(pilas.obtener_cantidad_de_actores(), 2, "Ahora hay dos, el fondo y el patito.");

  pilas.reiniciar();
  equal(pilas.obtener_cantidad_de_actores(), 1, "Luego de reiniciar vuelve a haber un solo actor (el fondo).");

});
