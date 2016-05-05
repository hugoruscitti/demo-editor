import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    didLoad(iframe) {
      console.log("Ha cargado, y con el argumento ", iframe);
      window['ifr'] = iframe;
    }
  }
});
