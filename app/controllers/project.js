import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    remove(project) {
      project.destroyRecord();
    }
  }
});
