import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "x-example-preview-container",
  image_url: Ember.computed("model.name", function() {
    let name = this.get("model.name");
    return `ejemplos/${name}.png`;
  })
});
