import Ember from 'ember';

export default Ember.Service.extend({
  electronVersion: "",

  init() {

    if (window['process']) {
      this.set('electronVersion', process.versions.electron);
    } else {
      this.set('electronVersion', "???");
    }

  }
});
