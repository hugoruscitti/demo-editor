import Ember from 'ember';

export default Ember.Controller.extend({
  layout: Ember.on("init", function() {
    $("#MySplitter").splitter();
  }),

  actions: {
    clear() {
      this.get('xCanvasHandler').send("clear");
    },
    run() {
      let code = `var pilas = pilasengine.iniciar('canvas');
      pilas.fondos.Plano();
      `;
      this.get('xCanvasHandler').send("execute", code);
    }
  }
});
