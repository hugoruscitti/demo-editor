test('Puede inicializar y crear actores', function(assert) {
  ok(pilas.escenas.normal, "Existe la escena normal.");
  ok(!pilas.escenas.norsdsdmal, "No existe una escena norsdsdmal.");

  pilas.reiniciar();
  equal(pilas.obtener_cantidad_de_actores(), 1, "Luego de reiniciar vuelve a haber un solo actor (el fondo).");

});
