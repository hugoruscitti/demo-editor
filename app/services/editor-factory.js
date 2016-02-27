import Ember from 'ember';

export default Ember.Service.extend({
  editor: null,

  createEditor(elementID) {
    ace.require("ace/ext/language_tools");
    var editor = ace.edit(elementID);
    this.set('editor', editor);
    return editor;
  },

  tryToFocus() {
    if (this.get("editor")) {
      this.get("editor").focus();
    }
  }
});
