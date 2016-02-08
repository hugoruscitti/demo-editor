import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-title', 'Integration | Component | x title', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{x-title}}`);

  assert.equal(this.$().text().trim(), '');


  this.set("title", "hola");
  this.render(hbs`{{#x-title title=title}}{{/x-title}}`);

  assert.equal(this.$().text().trim(), 'hola', "Muestra el título");
});
