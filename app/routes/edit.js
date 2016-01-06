import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    this.controllerFor('edit').enableShortcuts();
  },

  deactivate() {
    this.controllerFor('edit').disableShortcuts();
  },
});
