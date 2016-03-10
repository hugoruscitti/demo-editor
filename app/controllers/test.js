import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clear() {
      var window = document.getElementById("gameContainer").contentWindow;
      window.location.reload(true);
    },
    run() {
      console.log(this.get('xCanvasHandler'));
      //.send("execute", "alert('alert desde el iframe canvas')");
    }
  }
});
