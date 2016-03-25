import Ember from 'ember';

export default Ember.Controller.extend({
  leftPanelVisible: true,
  centerPanelVisible: true,
  editorPanelVisible: true,
  queryParams: ['leftPanelVisible', 'centerPanelVisible', 'editorPanelVisible'],
  editorFactory: Ember.inject.service(),

  itsSaved: Ember.computed("model.hasDirtyAttributes", function() {
    return (!this.get("model.hasDirtyAttributes"));
  }),

  allPanelsInvisible: Ember.computed("leftPanelVisible", "centerPanelVisible", "editorPanelVisible", function() {
    return (
      !this.get("leftPanelVisible") &&
      !this.get("centerPanelVisible") &&
      !this.get("editorPanelVisible")
    );
  }),

  custom_eval_function(code) {
    var out = {};

    let iframeElement = $("iframe#innerIframe")[0];

    try {
      out.completionValue = iframeElement.contentWindow.eval.call(null, code);
    } catch(e) {
      out.error = true;
      out.completionValue = e.message;
      out.recoverable = (e instanceof SyntaxError && e.message.match('^Unexpected (token|end)'));
    }

    return out;
  },

  custom_autocomplete_function(cm) {
    let iframeElement = $("iframe#innerIframe")[0];
    let currentWord = cm.getTokenAt(cm.getCursor()).string;

    let code = `pilas.utils.autocompletar('${currentWord}')`;

    let result = iframeElement.contentWindow.eval.call(null, code);
    let endCursor = CodeMirror.Pos(cm.getCursor().line, cm.getCursor().ch - currentWord.length);

    return {from: cm.getCursor(), to: endCursor, list: result};
  },

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
