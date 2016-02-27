import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-canvas', 'Integration | Component | x canvas', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-canvas}}`);

  assert.equal(this.$().text().trim(), '');
});
