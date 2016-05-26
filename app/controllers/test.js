import Ember from 'ember';

export default Ember.Controller.extend({
  pilas: Ember.inject.service(),

  actions: {

    onReady(pilas) {
      window.pilas = pilas;
      window.pilasService = this.get("pilas");
    },

  }
});
