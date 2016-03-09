import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clear() {
      var window = document.getElementById("gameContainer").contentWindow;
      window.location.reload(true);
    },
    run() {
      var window = document.getElementById("gameContainer").contentWindow;
      window.eval(`
        var pilas = pilasengine.iniciar("canvas");
        pilas.fondos.Plano();
      `);
    }
  }
});
