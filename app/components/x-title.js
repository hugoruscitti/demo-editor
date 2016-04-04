import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "",
  actions: {
    change() {
      var newTitle = prompt("Ingrese un nuevo título", this.get('title'));

      if (newTitle) {
        this.set("title", newTitle);
      }
    }
  }
});
