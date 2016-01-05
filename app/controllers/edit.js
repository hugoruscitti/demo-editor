import Ember from 'ember';

export default Ember.Controller.extend({
  itsSaved: Ember.computed("model.hasDirtyAttributes", function() {
    return (!this.get("model.hasDirtyAttributes"));
  }),

  enableShortcuts() {
    window.addEventListener('keydown', this.onKeyDown.bind(this), true);
  },

  disableShortcuts() {
    window.removeEventListener('keydown', this.onKeyDown.bind(this), true);
  },

  onKeyDown(e) {
    if (e.which === 83 && e.metaKey) {
      e.preventDefault();
      this.transitionToRoute("edit.previewModal", this.get('model'));
    }
  },

  actions: {
    save(project) {
      project.save();

    },
  }
});
