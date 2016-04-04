import Ember from 'ember';

export default Ember.Service.extend({
  editor: null,

  createEditor(elementID) {
    ace.require("ace/ext/language_tools");
    var editor = ace.edit(elementID);
    this.set('editor', editor);
    editor.getSession().setUseWorker(false);
    return editor;
  },

  tryToFocus() {
    let editor = this.get("editor");

    if (editor) {
      editor.getSession().setUseWorker(false);
      editor.focus();
      editor.blur();
    }
  }
});
