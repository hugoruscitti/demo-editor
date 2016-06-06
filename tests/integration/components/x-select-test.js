import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-select', 'Integration | Component | x select', {
  integration: true
});

test('it renders', function(assert) {
  this.set('options', ['uno']);
  this.render(hbs`{{x-select options=options}}`);

  assert.equal(this.$().text().trim(), 'uno');
});
