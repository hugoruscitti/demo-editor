import Ember from 'ember';

export default Ember.Route.extend({
  sweetalert: Ember.inject.service(),

  activate() {
    this.controllerFor('edit').enableShortcuts();
  },

  deactivate() {
    this.controllerFor('edit').disableShortcuts();
  },

  actions: {
    willTransition(transition) {

      var message = "¿Vas a abandonar sin guardar el proyecto?";
      var hasUnsavedChanges = ! this.controller.get('itsSaved');

      if (!this.get('allowTransition')) {
        transition.abort();

        if (hasUnsavedChanges && (transition.targetName === "project.index" || transition.targetName === "index.index" )) {
          this.get("sweetalert").confirm({
            title: "mmmm...",
            text: message,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            animation: false,
            confirmButtonText: "Si, abandono",
            cancelButtonText: "No, quiero volver al editor!"
          }).then((hasConfirm) => {

            if (!hasConfirm) {
              transition.abort();
            } else {

              Ember.run.later(() => {
                this.controller.discartModelChanges();
                this.set('allowTransition', true);
                transition.retry();
              }, 10);

            }
          });
        } else {
          Ember.run.later(() => {
            this.controller.discartModelChanges();
            this.set('allowTransition', true);
            transition.retry();
          }, 10);
        }
      } else {
        this.set('allowTransition', false);
        return true;
      }
    }
  }
});
