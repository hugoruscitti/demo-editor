import Ember from 'ember';

export default Ember.Component.extend({
  gameEngine: Ember.inject.service(),
  errors: [],

  didInsertElement() {
    if (this.get("project")) {
      this.send("run", this.get("project"));
    }
  },

  actions: {
    run(project) {
      var initialCode = project.get("initialCode");
      var gameInstance = this.get('gameEngine').get('gameInstance');

      function scopeEvalCode(code, errors, game) {      //jshint ignore:line
        "use strict";
        //var pilas = 123123;
        var windowObject = window;
        var window = {console: {                        //jshint ignore:line
          error: function() {
            //Array.prototype.unshift.call(arguments, '-----');
            alert(arguments);
            //old.apply(this, arguments)
            windowObject.error.apply(this, arguments);
          },

          log: function() {
            alert(arguments);
            //old.apply(this, arguments)
            windowObject.error.apply(this, arguments);
          }
        }};

        try {
          eval(ts.transpile(code));
        } catch(error) {
          errors.pushObject(error);
          console.error(error);
        }
      }


      this.set("errors", []);
      scopeEvalCode(initialCode, this.get("errors"), gameInstance);
    },
  }
});
