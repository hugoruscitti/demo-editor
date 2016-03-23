import Ember from "ember";

export default Ember.Service.extend({
  electronVersion: "",
  inElectron: false,

  init() {

    if (window["process"]) {
      this.set("electronVersion", process.versions.electron);
      this.set('inElectron', true);
    } else {
      this.set("electronVersion", null);
      this.set('inElectron', false);
    }

  }
});
