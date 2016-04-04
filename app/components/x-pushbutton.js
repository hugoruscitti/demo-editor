import Ember from 'ember';

export default Ember.Component.extend({
  position: "left",
  tagName: '',
  actions: {
    toggle() {
      this.toggleProperty('state');
    }
  }
});
