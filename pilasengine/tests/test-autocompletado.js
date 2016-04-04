test('Puede autocompletar', function(assert) {
  pilas.reiniciar();
  deepEqual(pilas.utils.autocompletar(""),                 [], "Retorna vacío si no especifica prefijo.");
  deepEqual(pilas.utils.autocompletar("noexiste"),         [], "Retorna vacío si la variables es incorrecta.");
  deepEqual(pilas.utils.autocompletar("pilasen"),          ['pilasengine'], "Autocompleta pilasengine.");
  deepEqual(pilas.utils.autocompletar("PiLASEN"),            ['pilasengine'], "Autocompleta incluso ignorando mayúsculas o minúsculas.");
  deepEqual(pilas.utils.autocompletar("pilas.actores.pat"), ['pilas.actores.patito'], "Autocompleta funciones dentro de un objeto.");
  deepEqual(pilas.utils.autocompletar("pilas.acto"), ['pilas.actores'], "Autocompleta funciones dentro de un objeto.");
});
