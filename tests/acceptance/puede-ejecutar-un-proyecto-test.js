import { test } from 'qunit';
import moduleForAcceptance from 'pilas-editor/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | puede ejecutar un proyecto');

test('visiting /', function(assert) {
  server.createList('project', 1);
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    click($("button:contains('Proyectos')"));
  });

  andThen(function() {
    assert.equal($("button:contains('Ejecutar')").length, 1, "Existe el botón ejecutar en la lista de proyectos.");
    click($("button:contains('Ejecutar')"));
  });

  andThen(function() {
    assert.equal($("iframe").length, 2, "Hay un iframe para el resultado.");
  });
});
