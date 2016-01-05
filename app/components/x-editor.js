import Ember from 'ember';

export default Ember.Component.extend({
  // value  - se carga como propiedad.

  onInit: Ember.on("init", function() {
  }),

  didInsertElement() {
    ace.require("ace/ext/language_tools");
    var editor = ace.edit("editor");
    editor.session.setMode("ace/mode/typescript");
    editor.setTheme("ace/theme/monokai");

    // enable autocompletion and snippets
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: false,
      enableLiveAutocompletion: true
    });

    editor.setFontSize(20);

    editor.setKeyboardHandler("ace/keyboard/vim");

    editor.$blockScrolling = Infinity;
    editor.getSession().setValue(this.get('value'));

    editor.on('change', () => {
      this.set('value', editor.getSession().getValue());
    });
  }
});
