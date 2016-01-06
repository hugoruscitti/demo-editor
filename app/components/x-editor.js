import Ember from 'ember';

export default Ember.Component.extend({

  editorFactory: Ember.inject.service(),
  // value  - se carga como propiedad.

  onInit: Ember.on("init", function() {
  }),

  didInsertElement() {
    var editor = this.get("editorFactory").createEditor("editor");

    editor.session.setMode("ace/mode/typescript");
    editor.setTheme("ace/theme/monokai");

    // enable autocompletion and snippets
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: false,
      enableLiveAutocompletion: true
    });

    editor.setFontSize(18);

    editor.setKeyboardHandler("ace/keyboard/vim");
    editor.setDisplayIndentGuides(false);

    editor.$blockScrolling = Infinity;
    editor.getSession().setValue(this.get('value'));

    editor.on('change', () => {
      this.set('value', editor.getSession().getValue());
    });

    editor.focus();
  }
});
