test('Puede autocompletar', function(assert) {
  var done = assert.async();
  var pilas = pilasengine.iniciar('elementoCanvas', {ancho: 320, alto: 240, en_test:true, data_path: '../ejemplos/data', escalar: false});

  pilas.cuando('inicia', function() {
    let autocompletar = pilas.utils.autocompletar;

    equal(autocompletar(""),                 [], "Retorna vacío si no especifica prefijo.");
    equal(autocompletar("noexiste"),         [], "Retorna vacío si la variables es incorrecta.");
    equal(autocompletar("pilasen"),          ['pilasengine'], "Autocompleta pilasengine.");
    equal(autocompletar("PiLAS"),            ['pilasengine'], "Autocompleta incluso ignorando mayúsculas o minúsculas.");
    equal(autocompletar("pilasengine.acto"), ['pilasengine.actores'], "Autocompleta funciones dentro de un objeto.");

    done();
  });

});
