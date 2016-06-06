import Ember from 'ember';

export default Ember.Component.extend({
  isActive: Ember.computed("option", "selected", function() {
    return (this.get("option") === this.get("selected"));
  }),

  actions: {
    toggle() {
      if (!this.get("isActive")) {
        this.set("selected", this.get("option"));
      }
    }
  }
});
