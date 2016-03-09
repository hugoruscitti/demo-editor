import Ember from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Ember.Component.extend(InboundActions, {
  gameEngine: Ember.inject.service(),
  languageService: Ember.inject.service(),
  error: [],
  semanticDiagnostics: [],
  syntaxDiagnostics: [],
  project: null,

  areConsoleMessages: Ember.computed('semanticDiagnostics', 'syntaxDiagnostics', function() {
    var syntaxDiagnosticsLength = this.get('syntaxDiagnostics').length;
    var semanticDiagnosticsLength = this.get('semanticDiagnostics').length;

    return (semanticDiagnosticsLength > 0 || syntaxDiagnosticsLength > 0);
  }),

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, this.runProject);
  },

  runProject() {
    if (this.get("project")) {
      this.send("run", this.get("project"));
    }
  },

  _convert_diagnostics_to_string_list(diagnostics) {
    return diagnostics.map((diagnostic) => {
      let {line, character} = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
      let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
      return `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`;
    });
  },

  _executeJavascriptCode(javascriptCode) {
    //var gameInstance = this.get('gameEngine').get('gameInstance');

    function evalCode(code, scope) {
      try {
        window.eval(code);
      } catch(error) {
        scope.set('error', error);
        console.error(error);
      }
    }

    this.set('error', null);

    var code_to_run = `// hook
      var pilas = pilasengine.iniciar('canvas');
      ${javascriptCode}
      console.log(window);
      // hook end
    `;

    evalCode(code_to_run, this);
  },

  actions: {
    run(project) {
      this.get('languageService').
        compile(project).
        then(data => {
          var {semanticDiagnostics, syntaxDiagnostics} = data;

          var warnings = this._convert_diagnostics_to_string_list(semanticDiagnostics);
          var errors = this._convert_diagnostics_to_string_list(syntaxDiagnostics);

          this.set('syntaxDiagnostics', errors);
          this.set('semanticDiagnostics', warnings);

          /* Ejecuta el código completo. */
          this.get('languageService').execute(project).then(data => {
            this._executeJavascriptCode(data.output);
          });
      });
    },
  }
});
