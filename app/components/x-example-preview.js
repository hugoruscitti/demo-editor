import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "x-example-preview-container",
  image_class: Ember.computed("model.name", function() {
    let name = this.get("model.name");
    return `img-ejemplo_${name}`;
  })
});
