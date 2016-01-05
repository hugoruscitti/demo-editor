import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('edit').enableShortcuts();
  },

  deactivate: function() {
    this.controllerFor('edit').disableShortcuts();
  },
});
