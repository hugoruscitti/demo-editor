import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    run(project) {
      var code = project.get("initialCode");
      eval(code);
    }
  }
});
