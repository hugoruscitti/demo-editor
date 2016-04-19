import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-main-button', 'Integration | Component | x main button', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{x-main-button}}`);
  assert.equal(this.$().text().trim(), '');

});
