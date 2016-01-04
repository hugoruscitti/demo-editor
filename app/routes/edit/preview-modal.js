import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleModal() {
      var model = this.modelFor('edit/previewModal');
      this.transitionTo('edit', model);
    }
  }
});
