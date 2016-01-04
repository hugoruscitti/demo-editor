import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    run(project) {
      var code = project.get("initialCode");
      try {
        eval(code);
      } catch(exception) {
        alert(exception);
      }
    },
    onLoadCanvas() {
      this.send("run", this.get("model"));
    }
  }
});
