import Ember from 'ember';

export default Ember.Service.extend({

  compile(project) {
    return new Ember.RSVP.Promise((success) => {
      var host = this._create_host();
      var code = project.get("code");
      var languageService = ts.createLanguageService(host, ts.createDocumentRegistry());

      host.addFile("script.ts", code);

      var semanticDiagnostics = languageService.getSemanticDiagnostics("script.ts");
      var syntaxDiagnostics = languageService.getSyntacticDiagnostics("script.ts");

      success({semanticDiagnostics, syntaxDiagnostics});
    });
  },


  getCompletions(position, code) {
    return new Ember.RSVP.Promise((success) => {
      var host = this._create_host();
      var languageService = ts.createLanguageService(host, ts.createDocumentRegistry());
      host.addFile("script.ts", code);

      let result = languageService.getCompletionsAtPosition("script.ts", position, true);

      success(result);
    });
  },

  getDiagnosticsFromString(code) {
    return new Ember.RSVP.Promise((success) => {
      var host = this._create_host();
      var languageService = ts.createLanguageService(host, ts.createDocumentRegistry());

      host.addFile("script.ts", code);

      var semanticDiagnostics = languageService.getSemanticDiagnostics("script.ts");
      var syntaxDiagnostics = languageService.getSyntacticDiagnostics("script.ts");

      success({semanticDiagnostics, syntaxDiagnostics});
    });
  },

  execute(project) {

    return new Ember.RSVP.Promise((success) => {
      var host = this._create_host();
      var code = project.get("code");
      var languageService = ts.createLanguageService(host, ts.createDocumentRegistry());

      host.addFile("script.ts", code);

      var output = languageService.getEmitOutput("script.ts").outputFiles[0].text;

      success({output});
    });

  },

  _create_host() {
    var files = [];
    return {
      getCompilationSettings() {
        return ts.getDefaultCompilerOptions();
      },
      getDefaultLibFileName() {
        return "lib";
      },
      getCurrentDirectory: function() {
        return "";
      },
      getScriptFileNames() {
        return Object.keys(files);
      },
      getScriptVersion(/*name*/) {
        return 1;
      },
      getScriptSnapshot(name) {
        return files[name];
      },
      getScriptIsOpen() {
        return true;
      },
      addFile(name, body) {
        files[name] = ts.ScriptSnapshot.fromString(body);
      },
    };

  }
});
