import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-state-button', 'Integration | Component | x state button', {
  integration: true
});

test('it renders', function(assert) {
  this.set('option', 'A simple option');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{x-state-button}}`);
  assert.equal(this.$().text().trim(), '', 'Sin propiedades no imprime texto.');

  this.render(hbs`{{x-state-button option=option}}`);
  assert.equal(this.$().text().trim(), 'A simple option', 'Con un texto lo incluye en el botón.');
});
