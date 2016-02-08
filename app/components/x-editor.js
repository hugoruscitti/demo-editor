import Ember from 'ember';

export default Ember.Component.extend({
  preferences: Ember.inject.service(),

  editorFactory: Ember.inject.service(),
  // value  - se carga como propiedad.

  onInit: Ember.on("init", function() {
  }),

  didInsertElement() {
    var editor = this.get("editorFactory").createEditor("editor");
    var tema = this.get("preferences.theme");

    editor.session.setMode("ace/mode/typescript");
    editor.setTheme(`ace/theme/${tema}`);

    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: false,
      enableLiveAutocompletion: true
    });

    editor.setFontSize(16);

    editor.setHighlightActiveLine(false);

    if (this.get("preferences.vimMode")) {
      editor.setKeyboardHandler("ace/keyboard/vim");
    }

    editor.setDisplayIndentGuides(false);

    editor.$blockScrolling = Infinity;
    editor.getSession().setValue(this.get('value'));

    editor.on('change', () => {
      this.set('value', editor.getSession().getValue());
    });

    editor.focus();
  }
});
