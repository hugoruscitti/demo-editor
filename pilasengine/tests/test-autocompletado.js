test('Puede autocompletar', function(assert) {
  var done = assert.async();
  var pilas = pilasengine.iniciar('elementoCanvas', {ancho: 320, alto: 240, en_test: true, data_path: '../ejemplos/data', escalar: false});

  pilas.cuando('inicia', function() {
    equal(pilas.utils.autocompletar(""),                 [], "Retorna vacío si no especifica prefijo.");
    equal(pilas.utils.autocompletar("noexiste"),         [], "Retorna vacío si la variables es incorrecta.");
    equal(pilas.utils.autocompletar("pilasen"),          ['pilasengine'], "Autocompleta pilasengine.");
    equal(pilas.utils.autocompletar("PiLAS"),            ['pilasengine'], "Autocompleta incluso ignorando mayúsculas o minúsculas.");
    equal(pilas.utils.autocompletar("pilas.actores.pat"), ['pilas.actores.patito'], "Autocompleta funciones dentro de un objeto.");
    equal(pilas.utils.autocompletar("pilas.acto"), ['pilas.actores'], "Autocompleta funciones dentro de un objeto.");

    done();
  });

});
