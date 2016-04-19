import { test } from 'qunit';
import moduleForAcceptance from 'pilas-editor/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | puede abrir un ejemplo');

test('visiting /examples', function(assert) {
  visit('/examples');

  andThen(function() {
    assert.equal(currentURL(), '/examples');
  });


});
