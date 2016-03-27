import Ember from 'ember';

export default Ember.Controller.extend({
  resolution: "640x480",

  actions: {
    toggleModal() {
      this.transitionToRoute('edit');
    },
    cancel() {
      this.send("toggleModal");
    },
    confirm() {
      let values = this.get("resolution").split("x");

      this.set("model.ancho", parseInt(values[0], 10));
      this.set("model.alto", parseInt(values[1], 10));

      this.send("toggleModal");
    }
  }
});
