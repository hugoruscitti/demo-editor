import { test } from 'qunit';
import moduleForAcceptance from 'demo-editor/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | puede visualizar acercade');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/', "puede ingresar a la sección inicial.");
    click($("a:contains('Acerca de ...')"));
  });

  andThen(function() {
    assert.equal(currentURL(), '/about', "pudo ingresar a la sección about.");
  });
});
