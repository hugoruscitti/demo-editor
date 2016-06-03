import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-section-manual', 'Integration | Component | x section manual', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{x-section-manual}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#x-section-manual}}
      template block text
    {{/x-section-manual}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
