import Ember from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Ember.Component.extend(InboundActions, {
  classNames: ['x-result'],
  languageService: Ember.inject.service(),
  electron: Ember.inject.service(),
  error: [],
  semanticDiagnostics: [],
  syntaxDiagnostics: [],
  project: null,
  pilas: Ember.inject.service(),

  areAnyConsoleMessage: Ember.computed('areSomeMessages', 'error', function() {
    return (this.get("areSomeMessages") || this.get('error'));
  }),

  areConsoleMessages: Ember.computed('semanticDiagnostics', 'syntaxDiagnostics', function() {
    var syntaxDiagnosticsLength = this.get('syntaxDiagnostics').length;
    var semanticDiagnosticsLength = this.get('semanticDiagnostics').length;

    return (semanticDiagnosticsLength > 0 || syntaxDiagnosticsLength > 0);
  }),

  //didInsertElement() {
  //  Ember.run.scheduleOnce('afterRender', this, this.onAfterRender);
  //},

  //onAfterRender() {
  //  let iframeElement = this.$().find('#innerIframe')[0];
  //  this.set("iframeElement", iframeElement);

    /*
    setTimeout(() => {
      this.send('reload', this.get('project'));
    }, 10);
    */

  //},

  _convert_diagnostics_to_string_list(diagnostics) {
    return diagnostics.map((diagnostic) => {
      let {line, character} = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
      let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
      return `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`;
    });
  },

  _executeJavascriptCode(pilas, javascriptCode/*, project */) {
    //let iframeElement = this.get("iframeElement");

    /*
    function evalCode(code, scope) {
      try {
        iframeElement.contentWindow.eval(code);
      } catch(error) {
        scope.set('error', error);
        console.error(error);
      }

      //let pilas = iframeElement.contentWindow.eval("pilas");
      //console.warn("Exponiendo la variable `pilas` para depuración:");
      //window['pilas'] = pilas;
    }
    */

    this.set('error', null);

    eval(javascriptCode);

    //pilas.eval(javascriptCode);

    /*
    let ancho = project.get("ancho");
    let alto = project.get("alto");

    var code_to_run = `// hook
      var opciones = {ancho: ${ancho}, alto: ${alto}};

      var pilas = pilasengine.iniciar('canvas', opciones);
      ${javascriptCode}
      // hook end
    `;

    evalCode(code_to_run, this);
    */
  },

  reloadIframe(onLoadFunction) {
    if (this.get("iframeElement").contentWindow) {
      this.get("iframeElement").onload = onLoadFunction;
      this.get("iframeElement").contentWindow.location.reload(false);

      if (this.get("electron.inElectron")) {
        this.get('iframeElement').src = `file://${__dirname}/game.html`;
      } else {
        this.get("iframeElement").src = "game.html";
      }

    } else {
      alert("No hay un canvas para visualizar...");
    }
  },

  actions: {
    onReady(pilas) {
      //console.log("PEPE");
      //this.send('run', pilas, this.get("project"));
      this.sendAction("onReady", pilas);
    },
    reload(project) {
      this.reloadIframe(() => {
        if (project) {
          this.send("run", project);
        }
      });
    },
    run(pilas, project) {
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
            this._executeJavascriptCode(pilas, data.output, project);
          });
      });
    },
  }
});
