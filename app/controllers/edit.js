import Ember from 'ember';

export default Ember.Controller.extend({
  leftPanelVisible: true,
  rightPanelVisible: true,
  editorPanelVisible: true,
  queryParams: ['leftPanelVisible', 'rightPanelVisible', 'editorPanelVisible'],
  editorFactory: Ember.inject.service(),

  itsSaved: Ember.computed("model.hasDirtyAttributes", function() {
    return (!this.get("model.hasDirtyAttributes"));
  }),

  enableShortcuts() {
    window.addEventListener('keydown', this.onKeyDown.bind(this), true);
  },

  disableShortcuts() {
    window.removeEventListener('keydown', this.onKeyDown.bind(this), true);
  },

  discartModelChanges() {
    var model = this.get('model');

    if (model.get('hasDirtyAttributes')) {
      model.rollbackAttributes();
    }
  },

  onKeyDown(e) {
    if (e.metaKey) {
      if (e.which === 83 || e.which === 13) {
        e.preventDefault();

        this.get('model').save().then(() => {
          this.send('reload', this.get('model'));

          setTimeout(() => {
            this.get("editorFactory").tryToFocus();
            console.log("focus!;");
          }, 3000);
        });

        //this.transitionToRoute("edit.previewModal", this.get('model'));
      }
    }
  },

  actions: {
    save(project) {
      project.save();
    },
    reload(project) {
      this.get("xResultHandler").send('reload', project);
    }
  }
});
