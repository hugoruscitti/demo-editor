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

  allPanelsInvisible: Ember.computed("leftPanelVisible", "rightPanelVisible", "editorPanelVisible", function() {
    return (
      !this.get("leftPanelVisible") &&
      !this.get("rightPanelVisible") &&
      !this.get("editorPanelVisible")
    );
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
    var editorFactory = this.get("editorFactory");
    var that = this;

    if (e.metaKey) {
      if (e.which === 83 || e.which === 13) {
        e.preventDefault();
        that.send('reload', that.get('model'));

        this.get('model').save().then(() => {

          setTimeout(function () {
            editorFactory.tryToFocus();
          }, 100);

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
