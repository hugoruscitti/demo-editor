import Ember from 'ember';

export default Ember.Component.extend({
  gameEngine: Ember.inject.service(),

  didInsertElement() {
    if (this.get("project")) {
      this.send("run", this.get("project"));
    }
  },

  actions: {
    run(project) {
      var initialCode = project.get("initialCode");
      var gameInstance = this.get('gameEngine').get('gameInstance');

      function scopeEvalCode(code, game) {
        "use strict";
        var pilas = 123123;
        var window = null;

        try {
          eval(code);
        } catch(exception) {
          alert(exception);
        }
      }

      scopeEvalCode(initialCode, gameInstance);
    },
  }
});
