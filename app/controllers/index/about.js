import Ember from 'ember';

export default Ember.Controller.extend({
  electron: Ember.inject.service(),

  actions: {
    toggleModal() {
      this.transitionToRoute('index');
    },

    toggleDeveloperMode() {
      this.get('electron').openDeveloperTools();
    }
  }
});
