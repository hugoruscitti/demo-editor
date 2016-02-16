import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-spinner', 'Integration | Component | x spinner', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-spinner}}`);
  assert.equal(this.$().text().trim(), '');
});
