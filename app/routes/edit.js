import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    this.controllerFor('edit').enableShortcuts();
  },

  deactivate() {
    this.controllerFor('edit').disableShortcuts();
  },

  actions: {
    willTransition(transition) {
      var message = "¿Estás seguro de abandonar sin guardar?";
      var hasUnsavedChanges = ! this.controller.get('itsSaved');

      if (hasUnsavedChanges && transition.targetName === "project.index") {
        var hasConfirm = confirm(message);

        if (!hasConfirm) {
          transition.abort();
        } else {
          this.controller.discartModelChanges();
          return true;
        }
      } else {
        return true;
      }
    }
  }
});
