import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-back', 'Integration | Component | x back', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-back}}`);
  assert.equal(this.$().text().trim(), 'Regresar');
});
