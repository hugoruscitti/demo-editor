import Ember from 'ember';

export default Ember.Controller.extend({
  itsSaved: Ember.computed("model.hasDirtyAttributes", function() {
    return (!this.get("model.hasDirtyAttributes"));
  }),
  actions: {
    save(project) {
      project.save().then(() => {
      });
    },
    saveAndRun(project) {
      project.save().then(() => {
        return this.transitionToRoute("run", project);
      });
    }
  }
});
