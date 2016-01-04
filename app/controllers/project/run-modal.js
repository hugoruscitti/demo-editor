import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleModal: function() {
      this.transitionToRoute('project');
    }
  }
});
