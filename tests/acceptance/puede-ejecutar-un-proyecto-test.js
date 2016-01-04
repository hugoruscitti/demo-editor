import { test } from 'qunit';
import moduleForAcceptance from 'demo-editor/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | puede ejecutar un proyecto');

test('visiting /', function(assert) {
  server.createList('project', 1);
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    click($("a:contains('Listar proyectos')"));
  });

  andThen(function() {
    assert.equal($("a:contains('Ejecutar proyecto')").length, 1, "Existe el botón ejecutar en la lista de proyectos.");
    click($("a:contains('Ejecutar proyecto')"));
  });

  andThen(function() {
    assert.equal($("button:contains('Ejecutar')").length, 1, "Existe el botón ejecutar.");
    assert.equal($("button:contains('Regresar')").length, 1, "Existe el botón Regresar.");

    assert.equal($("canvas").length, 1, "Hay un canvas para el resultado.");
  });
});
