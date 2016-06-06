import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-section-inspector', 'Integration | Component | x section inspector', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-section-inspector}}`);
  assert.ok(this.$().text().trim(), 'Tiene al menos un texto inicial.');
});
