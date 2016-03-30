import Ember from 'ember';

export default Ember.Component.extend({
  preferences: Ember.inject.service(),

  languageService: Ember.inject.service(),
  editorFactory: Ember.inject.service(),
  // value  - se carga como propiedad.

  didInsertElement() {
    var editor = this.get("editorFactory").createEditor("editor");
    var tema = this.get("preferences.theme");

    editor.session.setMode("ace/mode/typescript");
    editor.setTheme(`ace/theme/${tema}`);
    editor.setShowPrintMargin(false);

    editor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true
    });


    let language_tools = ace.require("ace/ext/language_tools");
    let languageService = this.get("languageService");

    var completer = {
        getCompletions: function(editor, session, pos, prefix, callback) {
          let cursor = editor.selection.getCursor();
          let absolutePosition = editor.session.doc.positionToIndex(cursor);
          let code = editor.getSession().getValue();

          if (prefix.length === 0) {
            callback(null, []);
            return ;
          }

          languageService.getCompletions(absolutePosition, code).then((data) => {
            if (!data) {
              callback(null, []);
            } else {

              let list = data.entries.map((element) => {
                return {name: element.name, value: element.name, score: 10, meta: element.kind};
              });

              callback(null, list);
            }

          });

/*
          callback(null, [
            {name: 'hola', value: 'hola', score: 100, meta: "pepepe"}
          ]);
          */

        }
    };

    language_tools.addCompleter(completer);


    editor.setFontSize(16);

    editor.setHighlightActiveLine(false);

    if (this.get("preferences.vimMode")) {
      editor.setKeyboardHandler("ace/keyboard/vim");
    }

    editor.setDisplayIndentGuides(false);

    editor.$blockScrolling = Infinity;
    editor.getSession().setValue(this.get('value'));


    editor.on("input", () => {
      let code = editor.getSession().getValue();

      function obtenerNumeroDeLinea(diagnostic) {
        return diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start).line;
      }

      this.get("languageService").getDiagnosticsFromString(code)
        .then((data) => {
          let messages = [];

          //console.log(data);

          data.semanticDiagnostics.forEach((diagnostic) => {
            messages.push({row: obtenerNumeroDeLinea(diagnostic),
                           text: diagnostic.messageText,
                           type: "warning"});
          });

          data.syntaxDiagnostics.forEach((diagnostic) => {
            messages.push({row: obtenerNumeroDeLinea(diagnostic),
                           text: diagnostic.messageText,
                           type: "error"});
          });

          editor.getSession().setAnnotations(messages);

        });

      this.set('value', editor.getSession().getValue());
      editor.focus();
    });

    editor.focus();
  }
});
