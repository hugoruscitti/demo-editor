import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-section-manual', 'Integration | Component | x section manual', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-section-manual}}`);
  assert.equal(this.$("iframe").length, 1, "Existe un iframe para el manual.");
});
