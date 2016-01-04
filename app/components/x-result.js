import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    if (this.get("project")) {
      this.send("run", this.get("project"));
    }
  },

  actions: {
    run(project) {
      var code = project.get("initialCode");
      try {
        eval(code);
      } catch(exception) {
        alert(exception);
      }
    },
  }
});
