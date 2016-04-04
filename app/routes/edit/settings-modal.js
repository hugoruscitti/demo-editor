import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    reloadGame(project) {
      this.controllerFor("edit").send("reload", project);
    }
  }
});
