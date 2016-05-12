import Ember from 'ember';

export default Ember.Controller.extend({
  pilas: Ember.inject.service(),

  onInit: Ember.on("init", function() {
    window.pilasService = this.get("pilas");
  }),

  actions: {
    didLoad(iframe) {
      console.log("Ha cargado, y con el argumento ", iframe);
      window['ifr'] = iframe;

      iframe.iframeElement.contentWindow.eval(`
        var pilas = pilasengine.iniciar('canvas', opciones);
      `);

    }
  }
});
