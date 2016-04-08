import Ember from 'ember';

export default Ember.Component.extend({
  electron: Ember.inject.service(),
  init() {
    this._super(...arguments);

    if (this.get("electron.inElectron")) {
      let fs = requireNode("fs");

      fs.watch("dist", {recursive: true}, function() {
        window.location.reload();
      });
    }
  }
});
