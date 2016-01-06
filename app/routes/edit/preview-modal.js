import Ember from 'ember';

export default Ember.Route.extend({
  editorFactory: Ember.inject.service(),

  actions: {
    toggleModal() {
      var model = this.modelFor('edit/previewModal');
      this.get('editorFactory').tryToFocus();
      this.transitionTo('edit', model);
    }
  }
});
