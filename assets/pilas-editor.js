"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('pilas-editor/app', ['exports', 'ember', 'ember-resolver', 'ember-load-initializers', 'pilas-editor/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _pilasEditorConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _pilasEditorConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _pilasEditorConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _pilasEditorConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});

//import loadInitializers from 'ember/load-initializers';
define('pilas-editor/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'pilas-editor/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _pilasEditorConfigEnvironment) {

  var name = _pilasEditorConfigEnvironment['default'].APP.name;
  var version = _pilasEditorConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('pilas-editor/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsPositionedContainer['default'];
    }
  });
});
define('pilas-editor/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('pilas-editor/components/fa-icon', ['exports', 'ember-cli-font-awesome/components/fa-icon'], function (exports, _emberCliFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('pilas-editor/components/fa-list-icon', ['exports', 'ember-cli-font-awesome/components/fa-list-icon'], function (exports, _emberCliFontAwesomeComponentsFaListIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaListIcon['default'];
    }
  });
});
define('pilas-editor/components/fa-list', ['exports', 'ember-cli-font-awesome/components/fa-list'], function (exports, _emberCliFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaList['default'];
    }
  });
});
define('pilas-editor/components/fa-stack', ['exports', 'ember-cli-font-awesome/components/fa-stack'], function (exports, _emberCliFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('pilas-editor/components/js-console', ['exports', 'ember-cli-jsconsole/components/js-console'], function (exports, _emberCliJsconsoleComponentsJsConsole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliJsconsoleComponentsJsConsole['default'];
    }
  });
});
define('pilas-editor/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  exports['default'] = _emberRadioButtonComponentsLabeledRadioButton['default'];
});
define('pilas-editor/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _emberModalDialogComponentsModalDialogOverlay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialogOverlay['default'];
    }
  });
});
define('pilas-editor/components/modal-dialog', ['exports', 'ember', 'ember-modal-dialog/components/modal-dialog'], function (exports, _ember, _emberModalDialogComponentsModalDialog) {
  exports['default'] = _emberModalDialogComponentsModalDialog['default'].extend({

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super();
      this.focusOnOpen();

      _ember['default'].$('body').on('keyup', function (e) {
        if (e.keyCode === 27) {
          _this.sendAction('close');
        }
      });
    },

    focusOnOpen: function focusOnOpen() {
      var focusSelector = this.get('focusSelector');

      if (this.get('focusSelector')) {
        _ember['default'].$(focusSelector).focus();
      }
    },

    willDestroyElement: function willDestroyElement() {
      _ember['default'].$('body').off('keyup');
    }
  });
});
define("pilas-editor/components/pilas-spliter", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    classNames: ["spliter"],

    didInsertElement: function didInsertElement() {
      var _this = this;

      this.$().on("mousedown", function (e) {
        e.preventDefault();

        var left = $(_this.get('left'));
        var right = $(_this.get('right'));

        /* Si alguno de los bloques laterales desaparece evita iniciar el drag */
        if (!left[0] || !right[0]) {
          return;
        }

        $('.over').show();

        //let initialX = event.pageX;

        $('.over').on("mousemove", function (event) {
          var totalWidth = left.width() + right.width();
          var dx = event.pageX - 20 - totalWidth / 2;
          var p = dx / totalWidth;

          console.log({ p: p, dx: dx, totalWidth: totalWidth });

          left.css("flex", p + 0.5 + " 1 0%");
          right.css("flex", 0.5 - p + " 1 0%");
        });

        $('.over').on("mouseup", function () /*event*/{
          $('.over').off("mousemove");
          $('.over').hide();
        });
      });
    }
  });
});
define('pilas-editor/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  exports['default'] = _emberRadioButtonComponentsRadioButtonInput['default'];
});
define('pilas-editor/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  exports['default'] = _emberRadioButtonComponentsRadioButton['default'];
});
define('pilas-editor/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _emberModalDialogComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsTetherDialog['default'];
    }
  });
});
define('pilas-editor/components/x-back', ['exports', 'ember'], function (exports, _ember) {
  var getOwner = _ember['default'].getOwner;
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['x-back-container'],

    actions: {
      back: function back() {
        getOwner(this).lookup('controller:application').transitionToRoute(this.get('to'));
      }
    }
  });
});
define('pilas-editor/components/x-canvas', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['x-canvas'],
    classNameBindings: ['inFullScreen:x-canvas-fullscreen'],
    inFullScreen: false,
    innerWindow: null,
    onLoad: null, // solo para usar en testing.
    onLoadPilas: null,
    width: 600,
    height: 600,

    didInsertElement: function didInsertElement() {
      _ember['default'].run.scheduleOnce('afterRender', this, this.initElement);
    },

    initElement: function initElement() {
      var _this = this;

      var iframeElement = this.$().find('#innerIframe')[0];

      this.set("iframeElement", iframeElement);

      this.get("iframeElement").onload = function () {

        if (_this.get('pilas')) {
          var width = _this.get("width");
          var height = _this.get("height");

          _this.get("pilas").instantiatePilas(iframeElement, { width: width, height: height }).then(function (pilas) {

            /*
             * Invoca a la acción "onReady" que envía el objeto pilas listo
             * para ser utilizado.
             *
             */
            if (_this.get('onReady')) {
              _this.sendAction("onReady", pilas);
            } else {
              //console.warn("Se a iniciado el componente x-canvas sin referencia a la acción onLoad.");
            }
          });
        } else {}
          //console.warn("Se a iniciado el componente x-canvas sin referencia a pilas.");

          // onLoad solo se utiliza dentro de la batería de tests. Este
          // componente se tendría que usar mediante el servicio "pilas"
          // en cualquier otro lugar.
        _this.sendAction('onLoad', { iframeElement: iframeElement });
      };
    },

    reloadIframe: function reloadIframe(onLoadFunction) {
      this.get("iframeElement").onload = onLoadFunction;
      this.get("iframeElement").contentWindow.location.reload(true);
    },

    actions: {
      execute: function execute(code) {
        var _this2 = this;

        this.reloadIframe(function () {
          alert("Ha cargado el código y está todo listo!");
          _this2.get("iframeElement").contentWindow.eval(code);
        });
      },
      clear: function clear() {
        this.reloadIframe();
      },
      quitFullscreen: function quitFullscreen() {
        this.set('inFullScreen', false);
      },
      enterFullscreen: function enterFullscreen() {
        this.set('inFullScreen', true);
      }
    }

  });
});
define("pilas-editor/components/x-editor", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    preferences: _ember["default"].inject.service(),

    languageService: _ember["default"].inject.service(),
    editorFactory: _ember["default"].inject.service(),
    // value  - se carga como propiedad.

    didInsertElement: function didInsertElement() {
      var _this = this;

      var editor = this.get("editorFactory").createEditor("editor");
      var tema = this.get("preferences.theme");

      editor.session.setMode("ace/mode/typescript");
      editor.setTheme("ace/theme/" + tema);
      editor.setShowPrintMargin(false);

      editor.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true
      });

      var language_tools = ace.require("ace/ext/language_tools");
      var languageService = this.get("languageService");

      var completer = {
        getCompletions: function getCompletions(editor, session, pos, prefix, callback) {
          var cursor = editor.selection.getCursor();
          var absolutePosition = editor.session.doc.positionToIndex(cursor);
          var code = editor.getSession().getValue();

          if (prefix.length === 0) {
            callback(null, []);
            return;
          }

          languageService.getCompletions(absolutePosition, code).then(function (data) {
            if (!data) {
              callback(null, []);
            } else {

              var list = data.entries.map(function (element) {
                return { name: element.name, value: element.name, score: 10, meta: element.kind };
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

      editor.on("input", function () {
        var code = editor.getSession().getValue();

        function obtenerNumeroDeLinea(diagnostic) {
          return diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start).line;
        }

        _this.get("languageService").getDiagnosticsFromString(code).then(function (data) {
          var messages = [];

          //console.log(data);

          data.semanticDiagnostics.forEach(function (diagnostic) {
            messages.push({ row: obtenerNumeroDeLinea(diagnostic),
              text: diagnostic.messageText,
              type: "warning" });
          });

          data.syntaxDiagnostics.forEach(function (diagnostic) {
            messages.push({ row: obtenerNumeroDeLinea(diagnostic),
              text: diagnostic.messageText,
              type: "error" });
          });

          editor.getSession().setAnnotations(messages);
        });

        _this.set('value', editor.getSession().getValue());
        editor.focus();
      });

      editor.focus();
    }
  });
});
define('pilas-editor/components/x-example-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("pilas-editor/components/x-example-preview", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    classNames: "x-example-preview-container",

    image_url: _ember["default"].computed("model.name", function () {
      var name = this.get("model.name");
      return "images/examples/ejemplo_" + name + ".png";
    })
  });
});
define("pilas-editor/components/x-header", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    tagName: "",
    electron: _ember["default"].inject.service()
  });
});
define('pilas-editor/components/x-icon', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("pilas-editor/components/x-img", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    tagName: ""
  });
});
define("pilas-editor/components/x-main-button", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    tagName: ""
  });
});
define("pilas-editor/components/x-manual", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    tagName: ""
  });
});
define('pilas-editor/components/x-pushbutton', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    position: "left",
    tagName: '',
    actions: {
      toggle: function toggle() {
        this.toggleProperty('state');
      }
    }
  });
});
define('pilas-editor/components/x-result', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['x-result'],
    languageService: _ember['default'].inject.service(),
    electron: _ember['default'].inject.service(),
    error: [],
    semanticDiagnostics: [],
    syntaxDiagnostics: [],
    project: null,
    pilas: _ember['default'].inject.service(),
    isFirstRun: true,

    areAnyConsoleMessage: _ember['default'].computed('areSomeMessages', 'error', function () {
      return this.get("areSomeMessages") || this.get('error');
    }),

    areConsoleMessages: _ember['default'].computed('semanticDiagnostics', 'syntaxDiagnostics', function () {
      var syntaxDiagnosticsLength = this.get('syntaxDiagnostics').length;
      var semanticDiagnosticsLength = this.get('semanticDiagnostics').length;

      return semanticDiagnosticsLength > 0 || syntaxDiagnosticsLength > 0;
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

    _convert_diagnostics_to_string_list: function _convert_diagnostics_to_string_list(diagnostics) {
      return diagnostics.map(function (diagnostic) {
        var _diagnostic$file$getLineAndCharacterOfPosition = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);

        var line = _diagnostic$file$getLineAndCharacterOfPosition.line;
        var character = _diagnostic$file$getLineAndCharacterOfPosition.character;

        var message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
        return diagnostic.file.fileName + ' (' + (line + 1) + ',' + (character + 1) + '): ' + message;
      });
    },

    _executeJavascriptCode: function _executeJavascriptCode(pilas, javascriptCode /*, project */) {
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

    reloadIframe: function reloadIframe(onLoadFunction) {
      if (this.get("iframeElement").contentWindow) {
        this.get("iframeElement").onload = onLoadFunction;
        this.get("iframeElement").contentWindow.location.reload(false);

        if (this.get("electron.inElectron")) {
          this.get('iframeElement').src = 'file://' + __dirname + '/game.html';
        } else {
          this.get("iframeElement").src = "game.html";
        }
      } else {
        alert("No hay un canvas para visualizar...");
      }
    },

    actions: {
      onReady: function onReady(pilas) {
        if (this.get("isFirstRun")) {
          this.get("pilas").runProjectWithoutReload(this.get("project"));
          this.set("isFirstRun", false);
        } else {
          this.sendAction("onReady", pilas);
        }
      },
      reload: function reload(project) {
        var _this = this;

        this.reloadIframe(function () {
          if (project) {
            _this.send("run", project);
          }
        });
      },
      run: function run(pilas, project) {
        var _this2 = this;

        this.get('languageService').compile(project).then(function (data) {
          var semanticDiagnostics = data.semanticDiagnostics;
          var syntaxDiagnostics = data.syntaxDiagnostics;

          var warnings = _this2._convert_diagnostics_to_string_list(semanticDiagnostics);
          var errors = _this2._convert_diagnostics_to_string_list(syntaxDiagnostics);

          _this2.set('syntaxDiagnostics', errors);
          _this2.set('semanticDiagnostics', warnings);

          /* Ejecuta el código completo. */
          _this2.get('languageService').execute(project).then(function (data) {
            _this2._executeJavascriptCode(pilas, data.output, project);
          });
        });
      }
    }
  });
});
define('pilas-editor/components/x-section-inspector', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    pilasService: _ember['default'].inject.service('pilas')
  });
});
define('pilas-editor/components/x-section-manual', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('pilas-editor/components/x-select', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['toolbar-actions', 'text-center'],
    selected: null,
    options: []
  });
});
define('pilas-editor/components/x-spinner', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: "div",
    classNames: ['content-spinner']
  });
});
define("pilas-editor/components/x-state-button", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    isActive: _ember["default"].computed("option", "selected", function () {
      return this.get("option") === this.get("selected");
    }),

    actions: {
      toggle: function toggle() {
        if (!this.get("isActive")) {
          this.set("selected", this.get("option"));
        }
      }
    }
  });
});
define("pilas-editor/components/x-title", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    sweetalert: _ember["default"].inject.service(),

    tagName: "",
    actions: {
      change: function change() {
        var _this = this;

        var options = {
          title: "Título",
          text: "Ingresá un título nuevo:",
          type: "input",
          inputPlaceholder: this.get("title"),
          cancelButtonText: "Cancelar",
          animation: false,
          showCancelButton: true };

        this.get("sweetalert").prompt(options).then(function (data) {
          _this.set("title", data);
        });
      }
    }
  });
});
define('pilas-editor/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('pilas-editor/controllers/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    leftPanelVisible: true,
    centerPanelVisible: true,
    editorPanelVisible: true,
    showConsole: false,
    queryParams: ['leftPanelVisible', 'centerPanelVisible', 'editorPanelVisible', 'showConsole'],
    editorFactory: _ember['default'].inject.service(),
    pilasService: _ember['default'].inject.service('pilas'),

    loadingPilas: false,
    currentOption: "Inspector",
    options: ["Inspector", "Manual"],

    itsSaved: _ember['default'].computed("model.hasDirtyAttributes", function () {
      return !this.get("model.hasDirtyAttributes");
    }),

    allPanelsInvisible: _ember['default'].computed("leftPanelVisible", "centerPanelVisible", "editorPanelVisible", function () {
      return !this.get("leftPanelVisible") && !this.get("centerPanelVisible") && !this.get("editorPanelVisible");
    }),

    custom_eval_function: function custom_eval_function(code) {
      var out = {};

      var iframeElement = $("iframe#innerIframe")[0];

      try {
        out.completionValue = iframeElement.contentWindow.eval.call(null, code);
      } catch (e) {
        out.error = true;
        out.completionValue = e.message;
        out.recoverable = e instanceof SyntaxError && e.message.match('^Unexpected (token|end)');
      }

      return out;
    },

    custom_autocomplete_function: function custom_autocomplete_function(cm) {
      var end = cm.getCursor().ch;
      var full_line = cm.getValue().substr(0, end);
      var start = full_line.lastIndexOf(" ");

      if (start === -1) {
        start = 0;
      }

      var currentWord = full_line.substr(start, end - start);

      //tests/dummy/app/controllers/application.js

      var iframeElement = $("iframe#innerIframe")[0];
      //let currentWord = cm.getTokenAt(cm.getCursor()).string;

      var code = 'pilas.utils.autocompletar(\'' + currentWord + '\')';

      var result = iframeElement.contentWindow.eval.call(null, code);
      var endCursor = CodeMirror.Pos(cm.getCursor().line, cm.getCursor().ch - currentWord.length);

      return { from: cm.getCursor(), to: endCursor, list: result };
    },

    enableShortcuts: function enableShortcuts() {
      window.addEventListener('keydown', this.onKeyDown.bind(this), true);
    },

    disableShortcuts: function disableShortcuts() {
      window.removeEventListener('keydown', this.onKeyDown.bind(this), true);
    },

    discartModelChanges: function discartModelChanges() {
      var model = this.get('model');

      if (model.get('hasDirtyAttributes')) {
        model.rollbackAttributes();
      }
    },

    onKeyDown: function onKeyDown(e) {
      var editorFactory = this.get("editorFactory");
      var that = this;

      if (e.metaKey) {
        if (e.which === 83 /* S */ || e.which === 13 /* ENTER */) {
            e.preventDefault();

            that.send('reload', that.get('model'));

            this.get('model').save().then(function () {

              setTimeout(function () {
                editorFactory.tryToFocus();
              }, 500);
              setTimeout(function () {
                editorFactory.tryToFocus();
              }, 1000);
            });
          }
      }
    },

    saveProjectAndRun: function saveProjectAndRun(project) {
      var _this = this;

      return new _ember['default'].RSVP.Promise(function (success) {
        project.save().then(function () {
          _this.get("pilasService").runProject(project);
          success();
        });
      });
    },

    actions: {
      saveAndReload: function saveAndReload(project) {
        var _this2 = this;

        this.set("loadingPilas", true);

        this.saveProjectAndRun(project).then(function () {
          _this2.set("loadingPilas", false);
        });
      },
      onReady: function onReady() /*pilas*/{
        this.set("loadingPilas", false);
      },
      reload: function reload(project) {
        var _this3 = this;

        this.set("loadingPilas", true);

        this.saveProjectAndRun(project).then(function () {
          _this3.set("loadingPilas", false);
        });
      }
    }
  });
});
define('pilas-editor/controllers/edit/settings-modal', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    resolution: "640x480",

    actions: {
      toggleModal: function toggleModal() {
        this.transitionToRoute('edit');
      },
      cancel: function cancel() {
        this.send("toggleModal");
      },
      confirm: function confirm() {
        var values = this.get("resolution").split("x");

        this.set("model.ancho", parseInt(values[0], 10));
        this.set("model.alto", parseInt(values[1], 10));

        this.send("toggleModal");
        this.send("reloadGame", this.get("model"));
      }
    }
  });
});
define('pilas-editor/controllers/examples/run-modal', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleModal: function toggleModal() {
        window.history.back();
      }
    }
  });
});
define('pilas-editor/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    electron: _ember['default'].inject.service()
  });
});
define('pilas-editor/controllers/index/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    electron: _ember['default'].inject.service(),

    actions: {
      toggleModal: function toggleModal() {
        this.transitionToRoute('index');
      },

      toggleDeveloperMode: function toggleDeveloperMode() {
        this.get('electron').openDeveloperTools();
      }
    }
  });
});
define('pilas-editor/controllers/index/setup', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    preferences: _ember['default'].inject.service(),

    actions: {
      toggleModal: function toggleModal() {
        this.transitionToRoute('index');
      },
      changeTheme: function changeTheme() {
        var currentTheme = this.get("preferences.currentTheme");
        var themesCounter = this.get("preferences.themes").length;

        currentTheme += 1;

        if (currentTheme >= themesCounter) {
          currentTheme = 0;
        }

        this.set("preferences.currentTheme", currentTheme);
        this.set("preferences.theme", this.get("preferences.themes")[currentTheme]);
      }

    }
  });
});
define('pilas-editor/controllers/mobile/run-modal', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleModal: function toggleModal() {
        window.history.back();
      }
    }
  });
});
define('pilas-editor/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define("pilas-editor/controllers/project", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    sweetalert: _ember["default"].inject.service(),
    actions: {
      remove: function remove(project) {
        project.destroyRecord();
      },
      newProject: function newProject() {
        var _this = this;

        var options = {
          title: "Creando un proyecto",
          text: "Ingresá un título para el proyecto:",
          type: "input",
          inputPlaceholder: this.get("title"),
          cancelButtonText: "Cancelar",
          confirmButtonText: "Crear proyecto",
          animation: false,
          showCancelButton: true };

        this.get("sweetalert").prompt(options).then(function (name) {
          var record = _this.store.createRecord("project", {
            title: name,
            ancho: 640,
            alto: 480,
            code: "pilas.fondos.plano();"
          });

          record.save().then(function () {
            _this.transitionToRoute("edit", record);
          });
        });
      }
    }
  });
});
define('pilas-editor/controllers/project/run-modal', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleModal: function toggleModal() {
        this.transitionToRoute('project');
      }
    }
  });
});
define("pilas-editor/controllers/test", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    pilas: _ember["default"].inject.service(),

    actions: {

      onReady: function onReady(pilas) {
        console.log("LOAD!");
        window.pilas = pilas;
        window.pilasService = this.get("pilas");

        console.log("Listado de imagenes", pilas.imagenes.obtener_como_lista());

        /**
         * Obtiene un listado de todas las imágenes asociadas a una clave del
         * cache.
         */
        function _obtener_nombres_de_frames_individuales(clave_de_cache) {
          var clave = clave_de_cache[0];
          var frames = clave_de_cache[1];

          if (frames.total === 1) {
            return [clave];
          } else {

            return frames.getFrames().map(function obtener_nombre_con_prefijo(f) {
              return clave + ":" + f.name;
            });
          }
        }

        /**
         * Obtiene una lista de todas las imágenes de un cache
         * de phaser.
         *
         * El resultado tendrá los identificadores de cada uno de los
         * frames, tanto de las imágenes individuales como de los
         * frames internos a spritesheets. Por ejemplo:
         *
         *   > obtener_listado_de_imagenes(pilas.game.cache)
         *   ['aceituna', 'data:actor.png', 'data:sin_imagen.png']
         */
        function obtener_listado_de_imagenes(cache) {
          var listado_de_imagenes = [];
          var claves = cache.getKeys();
          var claves_con_contenido = claves.map(function (clave) {
            return [clave, cache.getFrameData(clave)];
          });

          listado_de_imagenes = claves_con_contenido.map(_obtener_nombres_de_frames_individuales);

          listado_de_imagenes = listado_de_imagenes.reduce(function (a, b) {
            return a.concat(b);
          });

          return listado_de_imagenes;
        }

        console.log(obtener_listado_de_imagenes(pilas.game.cache));
      }

    }
  });
});
define('pilas-editor/electron/browser-qunit-adapter', ['exports'], function (exports) {
    (function (window) {
        // Exit immediately if we're not running in Electron
        if (!window.ELECTRON) {
            return;
        }

        function setQUnitAdapter(serverURL) {
            var socket = io(serverURL);

            socket.on('connect', function () {
                // connected to testem server
                socket.emit('browser-login', 'Electron', '1');
            });

            socket.on('start-tests', function () {
                // testem indicated we should re-run
                socket.disconnect();
                window.location.reload();
            });

            qunitAdapter(socket);
        }

        // Adapted from Testem's default qunit-adapter.
        function qunitAdapter(socket) {
            var currentTest, currentModule;

            var id = 1;

            var results = {
                failed: 0,
                passed: 0,
                total: 0,
                tests: []
            };

            QUnit.log(function (details) {
                var item = {
                    passed: details.result,
                    message: details.message
                };

                if (!details.result) {
                    item.actual = details.actual;
                    item.expected = details.expected;
                }

                currentTest.items.push(item);
            });

            QUnit.testStart(function (details) {
                currentTest = {
                    id: id++,
                    name: (currentModule ? currentModule + ': ' : '') + details.name,
                    items: []
                };
                socket.emit('tests-start');
            });

            QUnit.testDone(function (details) {
                currentTest.failed = details.failed;
                currentTest.passed = details.passed;
                currentTest.total = details.total;

                results.total++;

                if (currentTest.failed > 0) {
                    results.failed++;
                } else {
                    results.passed++;
                }

                results.tests.push(currentTest);
                socket.emit('test-result', currentTest);
            });

            QUnit.moduleStart(function (details) {
                currentModule = details.name;
            });

            QUnit.done(function (details) {
                results.runDuration = details.runtime;
                socket.emit('all-test-results', results);
            });
        }

        window.addEventListener('load', function () {
            setQUnitAdapter(process.env.ELECTRON_TESTEM_SERVER_URL);
        });
    })(this);
});
define('pilas-editor/electron/reload', ['exports'], function (exports) {
    /* jshint browser: true */
    (function () {
        // Exit immediately if we're not running in Electron
        if (!window.ELECTRON) {
            return;
        }

        // Reload the page when anything in `dist` changes
        var fs = window.requireNode('fs');
        var watchDir = './dist';

        if (fs.existsSync(watchDir)) {
            fs.watch(watchDir, function () {
                window.location.reload();
            });
        }
    })();
});
define('pilas-editor/electron/tap-qunit-adapter', ['exports'], function (exports) {
    (function (window) {
        // Exit immediately if we're not running in Electron
        if (!window.ELECTRON) {
            return;
        }

        // Log QUnit results to the console so they show up
        // in the `Electron` process output.
        function log(content) {
            var content = '[qunit-logger] ' + content;
            console.log(content);
            window.process.stdout.write(content);
        }

        function setQUnitAdapter() {
            var testCount = 0;

            QUnit.begin(function (details) {
                if (details.totalTests >= 1) {
                    log('1..' + details.totalTests);
                }
            });

            QUnit.testDone(function (details) {
                testCount++;
                if (details.failed === 0) {
                    log('ok ' + testCount + ' - ' + details.module + ' # ' + details.name);
                }
            });

            QUnit.log(function (details) {
                if (details.result !== true) {
                    var actualTestCount = testCount + 1;
                    log('# ' + JSON.stringify(details));
                    log('not ok ' + actualTestCount + ' - ' + details.module + ' - ' + details.name);
                }
            });

            QUnit.done(function (details) {
                log('# done' + (details.failed === 0 ? '' : ' with errors'));
            });
        }

        window.addEventListener('load', setQUnitAdapter);
    })(this);
});
define('pilas-editor/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('pilas-editor/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('pilas-editor/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
define('pilas-editor/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'pilas-editor/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _pilasEditorConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_pilasEditorConfigEnvironment['default'].APP.name, _pilasEditorConfigEnvironment['default'].APP.version)
  };
});
define('pilas-editor/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('pilas-editor/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('pilas-editor/initializers/ember-cli-fastclick', ['exports', 'ember'], function (exports, _ember) {

  var EmberCliFastclickInitializer = {
    name: 'fastclick',

    initialize: function initialize() {
      _ember['default'].run.schedule('afterRender', function () {
        FastClick.attach(document.body);
      });
    }
  };

  exports['default'] = EmberCliFastclickInitializer;
});
define('pilas-editor/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'pilas-editor/config/environment', 'pilas-editor/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _pilasEditorConfigEnvironment, _pilasEditorMirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }
      var environment = _pilasEditorConfigEnvironment['default'].environment;

      if (_shouldUseMirage(environment, _pilasEditorConfigEnvironment['default']['ember-cli-mirage'])) {
        var modules = (0, _emberCliMirageUtilsReadModules['default'])(_pilasEditorConfigEnvironment['default'].modulePrefix);
        var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _pilasEditorMirageConfig['default'], testConfig: _pilasEditorMirageConfig.testConfig });

        new _emberCliMirageServer['default'](options);
      }
    }
  };

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('pilas-editor/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('pilas-editor/initializers/export-application-global', ['exports', 'ember', 'pilas-editor/config/environment'], function (exports, _ember, _pilasEditorConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_pilasEditorConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _pilasEditorConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_pilasEditorConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('pilas-editor/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('pilas-editor/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('pilas-editor/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("pilas-editor/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('pilas-editor/instance-initializers/in-app-livereload', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;
  var run = _ember['default'].run;

  function initialize(app) {
    var config = app.__container__.lookupFactory('config:environment');
    var env = config.environment;

    if (config.cordova && config.cordova.reloadUrl && (env === 'development' || env === 'test')) {
      (function () {

        var url = config.cordova.reloadUrl;
        if (window.location.href.indexOf('file://') > -1) {
          run.later(function () {
            window.location.replace(url);
          }, 50);
        }
      })();
    }
  }

  ;

  exports['default'] = {
    name: 'cordova:in-app-livereload',
    initialize: initialize
  };
});
/* globals cordova */
define('pilas-editor/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {
    this.urlPrefix = '/';

    this.get('/projects');
    this.get('/projects/:id', 'project');
    this.put('/projects/:id', 'project');
    this.patch('/projects/:id', 'project');
    this['delete']('/projects/:id', 'project');
    this.post('/projects');

    this.passthrough("data/sprites.json");
    this.passthrough("ejemplos/**");
    this.passthrough("https://api.keen.io/**");

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
    */
  };
});
define('pilas-editor/mirage/factories/project', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Factory.extend({
    title: function title(i) {
      return 'demo ' + i;
    },
    ancho: 320,
    alto: 240,

    code: function code(i) {
      return 'var patito = pilas.actores.patito();\n';
    }

  });
});
define('pilas-editor/mirage/models/project', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model;
});
define("pilas-editor/mirage/scenarios/default", ["exports"], function (exports) {
  exports["default"] = function (server) {
    server.createList("project", 3);
  };
});
define('pilas-editor/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('pilas-editor/models/project', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    code: _emberData['default'].attr('string'),
    ancho: _emberData['default'].attr('number'),
    alto: _emberData['default'].attr('number')
  });
});
define('pilas-editor/router', ['exports', 'ember', 'pilas-editor/config/environment'], function (exports, _ember, _pilasEditorConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _pilasEditorConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: "/" }, function () {
      this.route('about');
      this.route('setup');
    });

    this.route('edit', { path: "edit/:project_id" }, function () {
      this.route('settingsModal', { path: "settingsModal/:project_id" });
    });

    this.route('project', { path: "/project" }, function () {
      this.route('runModal', { path: "runModal/:project_id" });
    });

    this.route('test');

    this.route('examples', function () {
      this.route('runModal', { path: ":example_id" }); // route like: /examples/5
    });

    this.route('mobile', function () {
      this.route('examples');
      this.route('runModal', { path: ":example_id" }); // route like: /examples/5
    });

    this.route('manual');
  });

  exports['default'] = Router;
});
define('pilas-editor/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('pilas-editor/routes/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    sweetalert: _ember['default'].inject.service(),

    activate: function activate() {
      this.controllerFor('edit').enableShortcuts();
    },

    deactivate: function deactivate() {
      this.controllerFor('edit').disableShortcuts();
    },

    actions: {
      willTransition: function willTransition(transition) {
        var _this = this;

        var message = "¿Vas a abandonar sin guardar el proyecto?";
        var hasUnsavedChanges = !this.controller.get('itsSaved');

        if (!this.get('allowTransition')) {
          transition.abort();

          if (hasUnsavedChanges && (transition.targetName === "project.index" || transition.targetName === "index.index")) {
            this.get("sweetalert").confirm({
              title: "mmmm...",
              text: message,
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              animation: false,
              confirmButtonText: "Si, abandono",
              cancelButtonText: "No, quiero volver al editor!"
            }).then(function (hasConfirm) {

              if (!hasConfirm) {
                transition.abort();
              } else {

                _ember['default'].run.later(function () {
                  _this.controller.discartModelChanges();
                  _this.set('allowTransition', true);
                  transition.retry();
                }, 10);
              }
            });
          } else {
            _ember['default'].run.later(function () {
              _this.controller.discartModelChanges();
              _this.set('allowTransition', true);
              transition.retry();
            }, 10);
          }
        } else {
          this.set('allowTransition', false);
          return true;
        }
      }
    }
  });
});
define("pilas-editor/routes/edit/settings-modal", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    actions: {
      reloadGame: function reloadGame(project) {
        this.controllerFor("edit").send("reload", project);
      }
    }
  });
});
define("pilas-editor/routes/examples/index", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    exampleList: _ember["default"].inject.service(),

    model: function model() {
      return this.get("exampleList").findAll();
    }

  });
});
define("pilas-editor/routes/examples/run-modal", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    exampleList: _ember["default"].inject.service(),

    model: function model(params) {
      return this.get("exampleList").find(parseInt(params.example_id, 10));
    }
  });
});
define('pilas-editor/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    keen: _ember['default'].inject.service(),

    activate: function activate() {
      this.get('keen').sendEvent('app-start', {
        otherData: 1,
        somethingElse: 'foobar'
      });
    }
  });
});
define('pilas-editor/routes/manual', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('pilas-editor/routes/mobile.examples', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('pilas-editor/routes/mobile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("pilas-editor/routes/mobile/examples", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    exampleList: _ember["default"].inject.service(),

    model: function model() {
      return this.get("exampleList").findAll();
    }
  });
});
define('pilas-editor/routes/mobile/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      visitExternalSite: function visitExternalSite() {
        var url = "http://www.pilas-engine.com.ar";
        window.open(url, '_system');
      }
    }
  });
});
define("pilas-editor/routes/mobile/run-modal", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    exampleList: _ember["default"].inject.service(),

    model: function model(params) {
      return this.get("exampleList").find(parseInt(params.example_id, 10));
    }
  });
});
define("pilas-editor/routes/project", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return this.store.findAll("project");
    }
  });
});
define('pilas-editor/routes/project/run-modal', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('pilas-editor/routes/test', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('pilas-editor/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('pilas-editor/services/cordova', ['exports', 'ember-cordova/services/cordova'], function (exports, _emberCordovaServicesCordova) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesCordova['default'];
    }
  });
});
define('pilas-editor/services/device/platform', ['exports', 'ember-cordova/services/device/platform'], function (exports, _emberCordovaServicesDevicePlatform) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesDevicePlatform['default'];
    }
  });
});
define('pilas-editor/services/device/splashscreen', ['exports', 'ember-cordova/services/device/splashscreen'], function (exports, _emberCordovaServicesDeviceSplashscreen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesDeviceSplashscreen['default'];
    }
  });
});
define('pilas-editor/services/editor-factory', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    editor: null,

    createEditor: function createEditor(elementID) {
      ace.require("ace/ext/language_tools");
      var editor = ace.edit(elementID);
      this.set('editor', editor);
      editor.getSession().setUseWorker(false);
      return editor;
    },

    tryToFocus: function tryToFocus() {
      var editor = this.get("editor");

      if (editor) {
        editor.getSession().setUseWorker(false);
        editor.focus();
        editor.blur();
      }
    }
  });
});
define("pilas-editor/services/electron", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Service.extend({
    electronVersion: "",
    inElectron: false,

    init: function init() {

      if (window["process"]) {
        this.set("electronVersion", process.versions.electron);
        this.set('inElectron', true);
      } else {
        this.set("electronVersion", null);
        this.set('inElectron', false);
      }
    },

    openDeveloperTools: function openDeveloperTools() {
      requireNode('remote').getCurrentWindow().toggleDevTools();
    }
  });
});
define("pilas-editor/services/example-list", ["exports", "ember"], function (exports, _ember) {

  var items = [];
  var contadorID = 0;

  function crear_ejemplo(nick, nombre, codigo) {

    var obj = _ember["default"].Object.extend({}).create({
      id: contadorID,
      name: nick,
      title: nombre,
      code: codigo,
      ancho: 100,
      alto: 400
    });

    items.push(obj);

    contadorID += 1;
  }

  crear_ejemplo("interpolaciones", "Interpolar propiedades", "\n    pilas.fondos.plano();\n    let actor = pilas.actores.nave();\n\n    actor.interpolar('escala', [2, 1]);\n    window.nave = actor;\n  ");

  crear_ejemplo("personalizado", "Actor Personalizado", "\n  class MiActor extends pilasengine.Actor {\n    velocidad;\n\n    iniciar(opciones) {\n      this.x = opciones.x;\n      this.velocidad = 1;\n      //console.log(\"llamaron a iniciar asi\", opciones);\n    }\n\n    actualizar() {\n      //console.log(\"actualiza\", this.velocidad);\n      this.rotacion += 5;\n    }\n  }\n\n  //pilas.actualizaciones_por_segundo = 1;\n\n  pilas.actores.vincular(MiActor);\n  let unActor = pilas.actores.MiActor({x: 0, y: 0});\n  unActor.imagen = \"data:patito.png\";\n\n  pilas.fondos.plano();\n\n  ");

  crear_ejemplo("escena_normal", "Hola mundo", "\n    pilas.escenas.normal();\n    let patito = pilas.actores.patito();\n    patito.escala = [2, 1];\n  ");

  crear_ejemplo("disparo", "Nave dispara", "\n    pilas.escenas.normal();\n    let actor = pilas.actores.actor();\n    console.log(pilas.imagenes.listar());\n  ");

  crear_ejemplo("nave", "Actor Nave", "\n    pilas.fondos.plano();\n    let actor = pilas.actores.nave();\n  ");

  exports["default"] = _ember["default"].Service.extend({
    find: function find(id) {
      return items.findBy("id", id);
    },
    findAll: function findAll() {
      return items;
    }
  });
});
define('pilas-editor/services/keen-ajax', ['exports', 'ember-keen/services/keen-ajax'], function (exports, _emberKeenServicesKeenAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeenServicesKeenAjax['default'];
    }
  });
});
define('pilas-editor/services/keen', ['exports', 'ember-keen/services/keen'], function (exports, _emberKeenServicesKeen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeenServicesKeen['default'];
    }
  });
});
define("pilas-editor/services/language-service", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Service.extend({

    compile: function compile(project) {
      var _this = this;

      return new _ember["default"].RSVP.Promise(function (success) {
        var host = _this._create_host();
        var code = project.get("code");
        var languageService = ts.createLanguageService(host, ts.createDocumentRegistry());

        host.addFile("script.ts", code);

        var semanticDiagnostics = languageService.getSemanticDiagnostics("script.ts");
        var syntaxDiagnostics = languageService.getSyntacticDiagnostics("script.ts");

        success({ semanticDiagnostics: semanticDiagnostics, syntaxDiagnostics: syntaxDiagnostics });
      });
    },

    getCompletions: function getCompletions(position, code) {
      var _this2 = this;

      return new _ember["default"].RSVP.Promise(function (success) {
        var host = _this2._create_host();
        var languageService = ts.createLanguageService(host, ts.createDocumentRegistry());
        host.addFile("script.ts", code);

        var result = languageService.getCompletionsAtPosition("script.ts", position, true);

        success(result);
      });
    },

    getDiagnosticsFromString: function getDiagnosticsFromString(code) {
      var _this3 = this;

      return new _ember["default"].RSVP.Promise(function (success) {
        var host = _this3._create_host();
        var languageService = ts.createLanguageService(host, ts.createDocumentRegistry());

        host.addFile("script.ts", code);

        var semanticDiagnostics = languageService.getSemanticDiagnostics("script.ts");
        var syntaxDiagnostics = languageService.getSyntacticDiagnostics("script.ts");

        success({ semanticDiagnostics: semanticDiagnostics, syntaxDiagnostics: syntaxDiagnostics });
      });
    },

    execute: function execute(project) {
      var _this4 = this;

      return new _ember["default"].RSVP.Promise(function (success) {
        var host = _this4._create_host();
        var code = project.get("code");
        var languageService = ts.createLanguageService(host, ts.createDocumentRegistry());

        host.addFile("script.ts", code);

        var output = languageService.getEmitOutput("script.ts").outputFiles[0].text;

        success({ output: output });
      });
    },

    _create_host: function _create_host() {
      var files = [];
      return {
        getCompilationSettings: function getCompilationSettings() {
          return ts.getDefaultCompilerOptions();
        },
        getDefaultLibFileName: function getDefaultLibFileName() {
          return "lib";
        },
        getCurrentDirectory: function getCurrentDirectory() {
          return "";
        },
        getScriptFileNames: function getScriptFileNames() {
          return Object.keys(files);
        },
        getScriptVersion: function getScriptVersion() /*name*/{
          return 1;
        },
        getScriptSnapshot: function getScriptSnapshot(name) {
          return files[name];
        },
        getScriptIsOpen: function getScriptIsOpen() {
          return true;
        },
        addFile: function addFile(name, body) {
          files[name] = ts.ScriptSnapshot.fromString(body);
        }
      };
    }
  });
});
define('pilas-editor/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _emberModalDialogServicesModalDialog) {
  exports['default'] = _emberModalDialogServicesModalDialog['default'];
});
define("pilas-editor/services/pilas", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Service.extend({
    iframe: null,
    actorCounter: 0,
    pilas: null,
    loading: true,

    width: null,
    height: null,

    temporallyCallback: null, /* almacena el callback para avisar si pilas
                                 se reinició correctamente. */

    /*
     * Instancia pilas-engine con los atributos que le envíe
     * el componente x-canvas.
     *
     * Este método realiza una conexión con el servicio pilas, y
     * se llamará automáticamente ante dos eventos: se agrega el
     * componente x-canvas a un template o se ha llamado a `reload`
     * en el servicio pilas.
     */
    instantiatePilas: function instantiatePilas(iframeElement, options) {
      var _this = this;

      this.set("iframe", iframeElement);
      this.set("loading", true);

      return new _ember["default"].RSVP.Promise(function (success) {
        var width = _this.get("width") || options.width;
        var height = _this.get("height") || options.height;

        var pilas = iframeElement.contentWindow.eval("\n        var opciones = {ancho: " + width + ", alto: " + height + "};\n        var pilas = pilasengine.iniciar('canvas', opciones);\n\n        pilas;\n      ");

        pilas.cuando("inicia", function () {
          _this._vincular_propiedades(pilas);
          success(pilas);

          /*
           * Si el usuario llamó a "reload" desde este servicio, tendría
           * que existir una promesa en curso, así que estas lineas se
           * encargan de satisfacer esa promesa llamando al callback success.
           */
          if (_this.get("temporallyCallback")) {
            _this.get("temporallyCallback")(pilas);
            _this.set("temporallyCallback", null);
          }

          _this.set("loading", false);
        });
      });
    },

    /**
     * Método privado que se encarga de vincular todas las propiedades
     * que nos permiten observar el comportamiento de pilas.
     */
    _vincular_propiedades: function _vincular_propiedades(pilas) {
      var _this2 = this;

      this.set('actorCounter', pilas.obtener_cantidad_de_actores());

      pilas.eventos.cambia_coleccion_de_actores.add(function (data) {
        _this2.set('actorCounter', data.cantidad);
      });
    },

    /**
     * Permite reiniciar pilas por completo.
     *
     * La acción de reinicio se realiza re-cargando el iframe
     * que contiene a pilas, así que se va a volver a llamar al
     * método `instantiatePilas` automáticamente.
     *
     * Este método retorna una promesa, que se cumple cuando pilas se
     * halla cargado completamente.
     */
    reload: function reload() {
      var _this3 = this;

      return new _ember["default"].RSVP.Promise(function (success) {
        if (_this3.get("loading")) {
          console.warn("Cuidado, se está reiniciando en medio de la carga.");
        }

        _this3.set("loading", true);
        _this3.get("iframe").contentWindow.location.reload(true);

        _this3.set("temporallyCallback", success); /* Guarda el callback  para
                                                    * que se llame luego de
                                                    * la carga de pilas.
                                                    */
      });
    },

    runProject: function runProject(project) {
      var _this4 = this;

      this.reload().then(function () {
        _this4.runProjectWithoutReload(project);
      });
    },

    runProjectWithoutReload: function runProjectWithoutReload(project) {
      this.get("iframe").contentWindow.eval(project.get("code"));
    }

  });
});
define('pilas-editor/services/preferences', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    vimMode: true,
    theme: 'monokai',

    themes: ['xcode', 'monokai'],
    currentTheme: 1
  });
});
define('pilas-editor/services/sweetalert', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    confirm: function confirm(options) {
      return new _ember['default'].RSVP.Promise(function (resolve) {
        swal(options, function (isConfirm) {
          resolve(isConfirm);
        });
      });
    },
    prompt: function prompt(options) {
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        swal(options, function (inputValue) {
          if (inputValue) {
            resolve(inputValue);
          } else {
            reject();
          }
        });
      });
    }
  });
});
define("pilas-editor/templates/application-loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/application-loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "padding text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Cargando ...");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "x-spinner", ["loc", [null, [2, 6], [2, 19]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "window");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 2], [2, 12]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/labeled-radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/labeled-radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "radio-button", [], ["radioClass", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [2, 15], [2, 25]]]]], [], []], "radioId", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [3, 12], [3, 19]]]]], [], []], "changed", "innerRadioChanged", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [5, 13], [5, 21]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [6, 15], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 9], [7, 13]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 13], [8, 21]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [9, 10], [9, 15]]]]], [], []]], ["loc", [null, [1, 0], [9, 17]]]], ["content", "yield", ["loc", [null, [11, 0], [11, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('pilas-editor/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsModalDialog['default'];
    }
  });
});
define("pilas-editor/templates/components/pilas-spliter", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/pilas-spliter.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          morphs[3] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ember-radio-button ", ["subexpr", "if", [["get", "checked", ["loc", [null, [2, 40], [2, 47]]]], "checked"], [], ["loc", [null, [2, 35], [2, 59]]]], " ", ["get", "joinedClassNames", ["loc", [null, [2, 62], [2, 78]]]]]]], ["attribute", "for", ["get", "radioId", ["loc", [null, [2, 88], [2, 95]]]]], ["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [4, 14], [4, 24]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [5, 11], [5, 18]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [6, 17], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 13], [7, 17]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 17], [8, 25]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [9, 19], [9, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 14], [10, 19]]]]], [], []], "changed", "changed"], ["loc", [null, [3, 4], [11, 27]]]], ["content", "yield", ["loc", [null, [13, 4], [13, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [17, 12], [17, 22]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [18, 9], [18, 16]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [19, 15], [19, 23]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [20, 11], [20, 15]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [21, 15], [21, 23]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [22, 17], [22, 27]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [23, 12], [23, 17]]]]], [], []], "changed", "changed"], ["loc", [null, [16, 2], [24, 25]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('pilas-editor/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _emberModalDialogTemplatesComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsTetherDialog['default'];
    }
  });
});
define("pilas-editor/templates/components/x-back", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "modifiers",
          "modifiers": ["action"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-back.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "type", "button");
        dom.setAttribute(el1, "class", "btn btn-default");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" Regresar");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        return morphs;
      },
      statements: [["element", "action", ["back"], [], ["loc", [null, [1, 22], [1, 39]]]], ["inline", "fa-icon", ["arrow-left"], [], ["loc", [null, [1, 64], [1, 88]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/x-canvas", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/x-canvas.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "close-container");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "");
          dom.setAttribute(el2, "id", "close-button");
          dom.setAttribute(el2, "class", "btn btn-default btn-close");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1, 0, 0);
          return morphs;
        },
        statements: [["element", "action", ["quitFullscreen"], [], ["loc", [null, [5, 33], [5, 60]]]], ["inline", "fa-icon", ["close"], [], ["loc", [null, [5, 95], [5, 114]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/x-canvas.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "close-container");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "");
          dom.setAttribute(el2, "id", "close-button");
          dom.setAttribute(el2, "class", "btn btn-default btn-close");
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["element", "action", ["enterFullscreen"], [], ["loc", [null, [9, 33], [9, 61]]]], ["inline", "x-icon", [], ["icon", "resize-full"], ["loc", [null, [9, 97], [9, 126]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-canvas.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("iframe");
        dom.setAttribute(el1, "class", "gameIframe");
        dom.setAttribute(el1, "id", "innerIframe");
        dom.setAttribute(el1, "src", "game.html");
        dom.setAttribute(el1, "width", "100%");
        dom.setAttribute(el1, "height", "100%");
        dom.setAttribute(el1, "scrolling", "no");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "inFullScreen", ["loc", [null, [3, 6], [3, 18]]]]], [], 0, 1, ["loc", [null, [3, 0], [11, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pilas-editor/templates/components/x-editor", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-editor.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "id", "editor");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/x-example-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/x-example-list.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "x-example-preview", [], ["model", ["subexpr", "@mut", [["get", "example", ["loc", [null, [2, 28], [2, 35]]]]], [], []], "isMobile", ["subexpr", "@mut", [["get", "isMobile", ["loc", [null, [2, 45], [2, 53]]]]], [], []]], ["loc", [null, [2, 2], [2, 55]]]]],
        locals: ["example"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-example-list.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "examples", ["loc", [null, [1, 8], [1, 16]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/components/x-example-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "pilas-editor/templates/components/x-example-preview.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "x-example-preview-title");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element1, 'src');
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["attribute", "src", ["get", "image_url", ["loc", [null, [4, 15], [4, 24]]]]], ["content", "model.title", ["loc", [null, [7, 6], [7, 21]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/x-example-preview.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["mobile.runModal", ["get", "model", ["loc", [null, [2, 31], [2, 36]]]]], [], 0, null, ["loc", [null, [2, 2], [9, 14]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 2
              }
            },
            "moduleName": "pilas-editor/templates/components/x-example-preview.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "x-example-preview-title");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'src');
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["attribute", "src", ["get", "image_url", ["loc", [null, [12, 15], [12, 24]]]]], ["content", "model.title", ["loc", [null, [15, 6], [15, 21]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/x-example-preview.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["examples.runModal", ["get", "model", ["loc", [null, [11, 33], [11, 38]]]]], [], 0, null, ["loc", [null, [11, 2], [17, 14]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-example-preview.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "isMobile", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [18, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pilas-editor/templates/components/x-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "toolbar toolbar-header");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "toolbar-actions");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [4, 4], [4, 13]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/x-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-icon.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/x-img", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-img.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["img ", ["get", "name", ["loc", [null, [1, 18], [1, 22]]]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/x-main-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 101
            }
          },
          "moduleName": "pilas-editor/templates/components/x-main-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("   ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["inline", "x-img", [], ["name", ["subexpr", "@mut", [["get", "icon", ["loc", [null, [1, 78], [1, 82]]]]], [], []]], ["loc", [null, [1, 65], [1, 84]]]], ["content", "text", ["loc", [null, [1, 92], [1, 100]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-main-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "link-to", [["get", "route", ["loc", [null, [1, 11], [1, 16]]]]], ["tagName", "button", "class", "uk-button main-button"], 0, null, ["loc", [null, [1, 0], [1, 113]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/components/x-manual", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-manual.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "loading-p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("iframe");
        dom.setAttribute(el1, "class", "x-manual-iframe");
        dom.setAttribute(el1, "src", "./docs/index.html");
        dom.setAttribute(el1, "width", "100%");
        dom.setAttribute(el1, "height", "100%");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["content", "x-spinner", ["loc", [null, [2, 2], [2, 15]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/x-pushbutton", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "modifiers",
            "modifiers": ["action"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/x-pushbutton.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["uk-button uk-button-small active ", ["get", "extraClass", ["loc", [null, [2, 52], [2, 62]]]], " "]]], ["element", "action", ["toggle"], [], ["loc", [null, [2, 67], [2, 86]]]], ["content", "yield", ["loc", [null, [3, 4], [3, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/x-pushbutton.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createElementMorph(element0);
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["uk-button uk-button-small ", ["get", "extraClass", ["loc", [null, [6, 45], [6, 55]]]]]]], ["element", "action", ["toggle"], [], ["loc", [null, [6, 59], [6, 78]]]], ["content", "yield", ["loc", [null, [7, 4], [7, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-pushbutton.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "state", ["loc", [null, [1, 6], [1, 11]]]]], [], 0, 1, ["loc", [null, [1, 0], [9, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pilas-editor/templates/components/x-result", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.2.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 6
                },
                "end": {
                  "line": 10,
                  "column": 6
                }
              },
              "moduleName": "pilas-editor/templates/components/x-result.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "alert alert-danger");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["content", "error", ["loc", [null, [8, 10], [8, 19]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 14,
                    "column": 10
                  },
                  "end": {
                    "line": 16,
                    "column": 10
                  }
                },
                "moduleName": "pilas-editor/templates/components/x-result.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "alert alert-warning");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
                return morphs;
              },
              statements: [["content", "message", ["loc", [null, [15, 45], [15, 56]]]]],
              locals: ["message"],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.2.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 18,
                    "column": 10
                  },
                  "end": {
                    "line": 20,
                    "column": 10
                  }
                },
                "moduleName": "pilas-editor/templates/components/x-result.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "console-error-line");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
                return morphs;
              },
              statements: [["content", "message", ["loc", [null, [19, 44], [19, 55]]]]],
              locals: ["message"],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.2.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 12,
                  "column": 6
                },
                "end": {
                  "line": 22,
                  "column": 6
                }
              },
              "moduleName": "pilas-editor/templates/components/x-result.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "console-panel");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(element0, 1, 1);
              morphs[1] = dom.createMorphAt(element0, 3, 3);
              return morphs;
            },
            statements: [["block", "each", [["get", "semanticDiagnostics", ["loc", [null, [14, 18], [14, 37]]]]], [], 0, null, ["loc", [null, [14, 10], [16, 19]]]], ["block", "each", [["get", "syntaxDiagnostics", ["loc", [null, [18, 18], [18, 35]]]]], [], 1, null, ["loc", [null, [18, 10], [20, 19]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 25,
                "column": 2
              }
            },
            "moduleName": "pilas-editor/templates/components/x-result.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "overlay-messages");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element1, 1, 1);
            morphs[1] = dom.createMorphAt(element1, 3, 3);
            return morphs;
          },
          statements: [["block", "if", [["get", "error", ["loc", [null, [6, 12], [6, 17]]]]], [], 0, null, ["loc", [null, [6, 6], [10, 13]]]], ["block", "if", [["get", "areConsoleMessages", ["loc", [null, [12, 12], [12, 30]]]]], [], 1, null, ["loc", [null, [12, 6], [22, 13]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 33,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/x-result.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "loading-p");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["block", "if", [["get", "areAnyConsoleMessage", ["loc", [null, [3, 8], [3, 28]]]]], [], 0, null, ["loc", [null, [3, 2], [25, 9]]]], ["content", "x-spinner", ["loc", [null, [28, 4], [28, 17]]]], ["inline", "x-canvas", [], ["pilas", ["subexpr", "@mut", [["get", "pilas", ["loc", [null, [31, 19], [31, 24]]]]], [], []], "onReady", "onReady"], ["loc", [null, [31, 2], [31, 44]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 33,
              "column": 0
            },
            "end": {
              "line": 35,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/components/x-result.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("Se necesita un proyecto.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-result.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "project", ["loc", [null, [1, 6], [1, 13]]]]], [], 0, 1, ["loc", [null, [1, 0], [35, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("pilas-editor/templates/components/x-section-inspector", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-section-inspector.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Inspector");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Cantidad de actores: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["content", "pilasService.actorCounter", ["loc", [null, [3, 24], [3, 53]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/x-section-manual", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-section-manual.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "x-manual", ["loc", [null, [1, 0], [1, 12]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/x-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "pilas-editor/templates/components/x-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "x-stateButton", [], ["option", ["subexpr", "@mut", [["get", "option", ["loc", [null, [3, 27], [3, 33]]]]], [], []], "selected", ["subexpr", "@mut", [["get", "selected", ["loc", [null, [3, 43], [3, 51]]]]], [], []]], ["loc", [null, [3, 4], [3, 53]]]]],
        locals: ["option"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "uk-button-group");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "options", ["loc", [null, [2, 10], [2, 17]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/components/x-spinner", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-spinner.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "spinner");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/x-state-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "modifiers",
          "modifiers": ["action"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-state-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(element0, 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["uk-button uk-button-small ", ["subexpr", "if", [["get", "isActive", ["loc", [null, [1, 46], [1, 54]]]], "active", ""], [], ["loc", [null, [1, 41], [1, 68]]]]]]], ["element", "action", ["toggle"], [], ["loc", [null, [1, 70], [1, 89]]]], ["content", "option", ["loc", [null, [1, 90], [1, 100]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/components/x-title", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "modifiers",
          "modifiers": ["action"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/components/x-title.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "x-title");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        return morphs;
      },
      statements: [["element", "action", ["change"], [], ["loc", [null, [1, 21], [1, 40]]]], ["content", "title", ["loc", [null, [1, 41], [1, 50]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/edit-error", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 4
            },
            "end": {
              "line": 6,
              "column": 44
            }
          },
          "moduleName": "pilas-editor/templates/edit-error.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("lista de proyectos");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/edit-error.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "error-page");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Lo siento, ha ocurrido un error");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("No se puede mostrar el proyecto actual, por favor regresá a la\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["project"], [], 0, null, ["loc", [null, [6, 4], [6, 56]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 6
              },
              "end": {
                "line": 4,
                "column": 96
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["home"], [], ["loc", [null, [4, 77], [4, 95]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 6
              },
              "end": {
                "line": 5,
                "column": 103
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["briefcase"], [], ["loc", [null, [5, 79], [5, 102]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 6
              },
              "end": {
                "line": 15,
                "column": 66
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["info"], [], ["loc", [null, [15, 47], [15, 65]]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 6
              },
              "end": {
                "line": 16,
                "column": 71
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["gamepad"], [], ["loc", [null, [16, 49], [16, 70]]]]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 6
              },
              "end": {
                "line": 17,
                "column": 74
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["align-left"], [], ["loc", [null, [17, 49], [17, 73]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes", "wrong-type"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 21,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/edit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pull-left");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "uk-button-group");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pull-right");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "uk-button-group");
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [1, 1]);
          var element8 = dom.childAt(fragment, [5, 1]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(element7, 1, 1);
          morphs[1] = dom.createMorphAt(element7, 3, 3);
          morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[3] = dom.createMorphAt(element8, 1, 1);
          morphs[4] = dom.createMorphAt(element8, 3, 3);
          morphs[5] = dom.createMorphAt(element8, 5, 5);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["tagName", "button", "class", "uk-button uk-button-mini"], 0, null, ["loc", [null, [4, 6], [4, 108]]]], ["block", "link-to", ["project"], ["tagName", "button", "class", "uk-button uk-button-mini"], 1, null, ["loc", [null, [5, 6], [5, 115]]]], ["inline", "x-title", [], ["title", ["subexpr", "@mut", [["get", "model.title", ["loc", [null, [10, 18], [10, 29]]]]], [], []]], ["loc", [null, [10, 2], [10, 31]]]], ["block", "x-pushbutton", [], ["state", ["subexpr", "@mut", [["get", "leftPanelVisible", ["loc", [null, [15, 28], [15, 44]]]]], [], []]], 2, null, ["loc", [null, [15, 6], [15, 83]]]], ["block", "x-pushbutton", [], ["state", ["subexpr", "@mut", [["get", "centerPanelVisible", ["loc", [null, [16, 28], [16, 46]]]]], [], []]], 3, null, ["loc", [null, [16, 6], [16, 88]]]], ["block", "x-pushbutton", [], ["state", ["subexpr", "@mut", [["get", "editorPanelVisible", ["loc", [null, [17, 28], [17, 46]]]]], [], []]], 4, null, ["loc", [null, [17, 6], [17, 91]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 8
            },
            "end": {
              "line": 39,
              "column": 8
            }
          },
          "moduleName": "pilas-editor/templates/edit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "edit-panel-left");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element6 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element6, 1, 1);
          morphs[1] = dom.createMorphAt(element6, 3, 3);
          return morphs;
        },
        statements: [["inline", "x-select", [], ["selected", ["subexpr", "@mut", [["get", "currentOption", ["loc", [null, [35, 32], [35, 45]]]]], [], []], "options", ["subexpr", "@mut", [["get", "options", ["loc", [null, [35, 54], [35, 61]]]]], [], []]], ["loc", [null, [35, 12], [35, 63]]]], ["inline", "component", [["subexpr", "concat", ["x-section", ["get", "currentOption", ["loc", [null, [36, 44], [36, 57]]]]], [], ["loc", [null, [36, 24], [36, 58]]]]], [], ["loc", [null, [36, 12], [36, 60]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 49,
                "column": 16
              },
              "end": {
                "line": 51,
                "column": 16
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "disabled", "");
            dom.setAttribute(el1, "class", "uk-button uk-button-small");
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element4);
            morphs[1] = dom.createMorphAt(element4, 1, 1);
            return morphs;
          },
          statements: [["element", "action", ["reload", ["get", "model", ["loc", [null, [50, 44], [50, 49]]]]], [], ["loc", [null, [50, 26], [50, 51]]]], ["inline", "fa-icon", ["refresh"], [], ["loc", [null, [50, 96], [50, 117]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 51,
                "column": 16
              },
              "end": {
                "line": 53,
                "column": 16
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "uk-button uk-button-small");
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element3);
            morphs[1] = dom.createMorphAt(element3, 1, 1);
            return morphs;
          },
          statements: [["element", "action", ["reload", ["get", "model", ["loc", [null, [52, 44], [52, 49]]]]], [], ["loc", [null, [52, 26], [52, 51]]]], ["inline", "fa-icon", ["refresh"], [], ["loc", [null, [52, 87], [52, 108]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 62,
                "column": 16
              },
              "end": {
                "line": 62,
                "column": 103
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Intérprete ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["terminal"], [], ["loc", [null, [62, 69], [62, 91]]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 70,
                "column": 12
              },
              "end": {
                "line": 72,
                "column": 12
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "js-console", [], ["eval_function", ["subexpr", "@mut", [["get", "custom_eval_function", ["loc", [null, [71, 41], [71, 61]]]]], [], []], "autocomplete", ["subexpr", "@mut", [["get", "custom_autocomplete_function", ["loc", [null, [71, 75], [71, 103]]]]], [], []]], ["loc", [null, [71, 14], [71, 105]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 43,
              "column": 8
            },
            "end": {
              "line": 75,
              "column": 8
            }
          },
          "moduleName": "pilas-editor/templates/edit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "edit-panel-center");
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "toolbar-actions");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "btn-group pull-right");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "toolbar-actions");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "btn-group");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "btn-group btn-group pull-right");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment(" botones de depuración ");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element5, [1, 1]), 1, 1);
          morphs[1] = dom.createMorphAt(element5, 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element5, [5, 1]), 1, 1);
          morphs[3] = dom.createMorphAt(element5, 7, 7);
          return morphs;
        },
        statements: [["block", "if", [["get", "loadingPilas", ["loc", [null, [49, 22], [49, 34]]]]], [], 0, 1, ["loc", [null, [49, 16], [53, 23]]]], ["inline", "x-result", [], ["pilas", ["subexpr", "@mut", [["get", "pilasService", ["loc", [null, [58, 29], [58, 41]]]]], [], []], "onReady", "onReady", "project", ["subexpr", "@mut", [["get", "model", ["loc", [null, [58, 68], [58, 73]]]]], [], []]], ["loc", [null, [58, 12], [58, 75]]]], ["block", "x-pushbutton", [], ["state", ["subexpr", "@mut", [["get", "showConsole", ["loc", [null, [62, 38], [62, 49]]]]], [], []], "position", "right"], 2, null, ["loc", [null, [62, 16], [62, 120]]]], ["block", "if", [["get", "showConsole", ["loc", [null, [70, 18], [70, 29]]]]], [], 3, null, ["loc", [null, [70, 12], [72, 19]]]]],
        locals: [],
        templates: [child0, child1, child2, child3]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 85,
                "column": 16
              },
              "end": {
                "line": 87,
                "column": 16
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "disabled", "");
            dom.setAttribute(el1, "class", "uk-button uk-button-small");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" Ejecutar");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["refresh"], ["spin", true], ["loc", [null, [86, 69], [86, 100]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 87,
                "column": 16
              },
              "end": {
                "line": 89,
                "column": 16
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "uk-button uk-button-small");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" Ejecutar");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createMorphAt(element0, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["saveAndReload", ["get", "model", ["loc", [null, [88, 51], [88, 56]]]]], [], ["loc", [null, [88, 26], [88, 58]]]], ["inline", "fa-icon", ["play"], [], ["loc", [null, [88, 93], [88, 111]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 91,
                "column": 14
              },
              "end": {
                "line": 92,
                "column": 14
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 92,
                "column": 14
              },
              "end": {
                "line": 93,
                "column": 14
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 96,
                "column": 16
              },
              "end": {
                "line": 96,
                "column": 125
              }
            },
            "moduleName": "pilas-editor/templates/edit.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["cog"], [], ["loc", [null, [96, 107], [96, 124]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 79,
              "column": 8
            },
            "end": {
              "line": 104,
              "column": 8
            }
          },
          "moduleName": "pilas-editor/templates/edit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "edit-panel-editor");
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "toolbar-actions");
          var el3 = dom.createTextNode("\n\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "pull-right");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element2, 1, 1);
          morphs[1] = dom.createMorphAt(element2, 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
          morphs[3] = dom.createMorphAt(element1, 3, 3);
          return morphs;
        },
        statements: [["block", "if", [["get", "loadingPilas", ["loc", [null, [85, 22], [85, 34]]]]], [], 0, 1, ["loc", [null, [85, 16], [89, 23]]]], ["block", "if", [["get", "itsSaved", ["loc", [null, [91, 20], [91, 28]]]]], [], 2, 3, ["loc", [null, [91, 14], [93, 21]]]], ["block", "link-to", ["edit.settingsModal", ["get", "model", ["loc", [null, [96, 48], [96, 53]]]]], ["tagName", "button", "class", "uk-button uk-button-small"], 4, null, ["loc", [null, [96, 16], [96, 137]]]], ["inline", "x-editor", [], ["value", ["subexpr", "@mut", [["get", "model.code", ["loc", [null, [101, 29], [101, 39]]]]], [], []]], ["loc", [null, [101, 12], [101, 41]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 106,
              "column": 8
            },
            "end": {
              "line": 110,
              "column": 8
            }
          },
          "moduleName": "pilas-editor/templates/edit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "allPanelsInvisiblePanel");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 120,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/edit.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "over");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "window-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "pane");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "edit-contenedor");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "edit-principal");
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element9 = dom.childAt(fragment, [4, 1]);
        var element10 = dom.childAt(element9, [1, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(element10, 1, 1);
        morphs[2] = dom.createMorphAt(element10, 3, 3);
        morphs[3] = dom.createMorphAt(element10, 5, 5);
        morphs[4] = dom.createMorphAt(element10, 7, 7);
        morphs[5] = dom.createMorphAt(element10, 9, 9);
        morphs[6] = dom.createMorphAt(element10, 11, 11);
        morphs[7] = dom.createMorphAt(element9, 3, 3);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "x-header", [], [], 0, null, ["loc", [null, [1, 0], [21, 13]]]], ["block", "if", [["get", "leftPanelVisible", ["loc", [null, [32, 14], [32, 30]]]]], [], 1, null, ["loc", [null, [32, 8], [39, 15]]]], ["inline", "pilas-spliter", [], ["left", ".edit-panel-left", "right", ".edit-panel-center"], ["loc", [null, [41, 8], [41, 76]]]], ["block", "if", [["get", "centerPanelVisible", ["loc", [null, [43, 14], [43, 32]]]]], [], 2, null, ["loc", [null, [43, 8], [75, 15]]]], ["inline", "pilas-spliter", [], ["left", ".edit-panel-center", "right", ".edit-panel-editor"], ["loc", [null, [77, 8], [77, 78]]]], ["block", "if", [["get", "editorPanelVisible", ["loc", [null, [79, 14], [79, 32]]]]], [], 3, null, ["loc", [null, [79, 8], [104, 15]]]], ["block", "if", [["get", "allPanelsInvisible", ["loc", [null, [106, 14], [106, 32]]]]], [], 4, null, ["loc", [null, [106, 8], [110, 15]]]], ["content", "outlet", ["loc", [null, [116, 4], [116, 14]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("pilas-editor/templates/edit/settings-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 64
              }
            },
            "moduleName": "pilas-editor/templates/edit/settings-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("100x100");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 64
              }
            },
            "moduleName": "pilas-editor/templates/edit/settings-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("320x240");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 2
              },
              "end": {
                "line": 10,
                "column": 64
              }
            },
            "moduleName": "pilas-editor/templates/edit/settings-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("640x480");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 64
              }
            },
            "moduleName": "pilas-editor/templates/edit/settings-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("800x600");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 19,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/edit/settings-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "dialog-container");
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          dom.setAttribute(el2, "class", "dialog-title");
          var el3 = dom.createTextNode("Configuración");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Tamaño de pantalla:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "dialog-buttons");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "uk-button");
          var el4 = dom.createTextNode("Cancelar");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "uk-button");
          var el4 = dom.createTextNode("Confirmar");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [13]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element1, [3]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(element0, 5, 5);
          morphs[1] = dom.createMorphAt(element0, 7, 7);
          morphs[2] = dom.createMorphAt(element0, 9, 9);
          morphs[3] = dom.createMorphAt(element0, 11, 11);
          morphs[4] = dom.createElementMorph(element2);
          morphs[5] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["block", "radio-button", [], ["value", "100x100", "groupValue", ["subexpr", "@mut", [["get", "resolution", ["loc", [null, [8, 45], [8, 55]]]]], [], []]], 0, null, ["loc", [null, [8, 2], [8, 81]]]], ["block", "radio-button", [], ["value", "320x240", "groupValue", ["subexpr", "@mut", [["get", "resolution", ["loc", [null, [9, 45], [9, 55]]]]], [], []]], 1, null, ["loc", [null, [9, 2], [9, 81]]]], ["block", "radio-button", [], ["value", "640x480", "groupValue", ["subexpr", "@mut", [["get", "resolution", ["loc", [null, [10, 45], [10, 55]]]]], [], []]], 2, null, ["loc", [null, [10, 2], [10, 81]]]], ["block", "radio-button", [], ["value", "800x600", "groupValue", ["subexpr", "@mut", [["get", "resolution", ["loc", [null, [11, 45], [11, 55]]]]], [], []]], 3, null, ["loc", [null, [11, 2], [11, 81]]]], ["element", "action", ["cancel"], [], ["loc", [null, [14, 30], [14, 49]]]], ["element", "action", ["confirm"], [], ["loc", [null, [15, 30], [15, 50]]]]],
        locals: [],
        templates: [child0, child1, child2, child3]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/edit/settings-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "modal-dialog", [], ["close", "toggleModal", "container-class", "settings-dialog"], 0, null, ["loc", [null, [1, 0], [19, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/examples/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 8
              },
              "end": {
                "line": 5,
                "column": 98
              }
            },
            "moduleName": "pilas-editor/templates/examples/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["home"], [], ["loc", [null, [5, 79], [5, 97]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 105
              }
            },
            "moduleName": "pilas-editor/templates/examples/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["briefcase"], [], ["loc", [null, [6, 81], [6, 104]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/examples/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pull-left");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "uk-button-group");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["tagName", "button", "class", "uk-button uk-button-mini"], 0, null, ["loc", [null, [5, 8], [5, 110]]]], ["block", "link-to", ["project"], ["tagName", "button", "class", "uk-button uk-button-mini"], 1, null, ["loc", [null, [6, 8], [6, 117]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/examples/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "window-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "pane padding");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Ejemplos");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "x-header", [], [], 0, null, ["loc", [null, [1, 0], [10, 13]]]], ["inline", "x-example-list", [], ["examples", ["subexpr", "@mut", [["get", "model", ["loc", [null, [16, 30], [16, 35]]]]], [], []]], ["loc", [null, [16, 4], [16, 37]]]], ["content", "yield", ["loc", [null, [24, 0], [24, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/examples/run-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/examples/run-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "close-container");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "");
          dom.setAttribute(el2, "id", "close-button");
          dom.setAttribute(el2, "class", "uk-button");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createElementMorph(element0);
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["inline", "x-result", [], ["project", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 21], [3, 26]]]]], [], []]], ["loc", [null, [3, 2], [3, 28]]]], ["element", "action", ["toggleModal"], [], ["loc", [null, [6, 33], [6, 57]]]], ["inline", "fa-icon", ["close"], [], ["loc", [null, [6, 76], [6, 95]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/examples/run-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "modal-dialog", [], ["close", "toggleModal"], 0, null, ["loc", [null, [1, 0], [9, 17]]]], ["content", "yield", ["loc", [null, [11, 0], [11, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 6
              },
              "end": {
                "line": 5,
                "column": 96
              }
            },
            "moduleName": "pilas-editor/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["home"], [], ["loc", [null, [5, 77], [5, 95]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 6
              },
              "end": {
                "line": 6,
                "column": 103
              }
            },
            "moduleName": "pilas-editor/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["briefcase"], [], ["loc", [null, [6, 79], [6, 102]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 93
              }
            },
            "moduleName": "pilas-editor/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Acerca de ...");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pull-left");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "uk-button-group");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pull-right");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["tagName", "button", "class", "uk-button uk-button-mini"], 0, null, ["loc", [null, [5, 6], [5, 108]]]], ["block", "link-to", ["project"], ["tagName", "button", "class", "uk-button uk-button-mini"], 1, null, ["loc", [null, [6, 6], [6, 115]]]], ["block", "link-to", ["index.about"], ["tagName", "button", "class", "uk-button uk-button-mini"], 2, null, ["loc", [null, [11, 4], [11, 105]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "window-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "pane");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "padding text-center");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "img pilas_logo_128");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("¡Hola, te damos a bienvenida a pilas-editor!");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "text-center padding");
        var el5 = dom.createTextNode("\n        Versión: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [2, 1, 1]);
        var element2 = dom.childAt(element1, [5]);
        var element3 = dom.childAt(element1, [7]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(element2, 1, 1);
        morphs[2] = dom.createMorphAt(element2, 3, 3);
        morphs[3] = dom.createMorphAt(element3, 1, 1);
        morphs[4] = dom.createMorphAt(element3, 3, 3);
        morphs[5] = dom.createMorphAt(element1, 9, 9);
        morphs[6] = dom.createMorphAt(dom.childAt(element1, [11]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "x-header", [], [], 0, null, ["loc", [null, [1, 0], [14, 13]]]], ["inline", "x-mainButton", [], ["icon", "add_folder", "text", "Proyectos", "route", "project"], ["loc", [null, [28, 8], [28, 75]]]], ["inline", "x-mainButton", [], ["icon", "user_manual", "text", "Ver el manual", "route", "manual"], ["loc", [null, [29, 8], [29, 79]]]], ["inline", "x-mainButton", [], ["icon", "settings", "text", "Configuración", "route", "index.setup"], ["loc", [null, [33, 8], [33, 81]]]], ["inline", "x-mainButton", [], ["icon", "filled_box", "text", "Ejemplos", "route", "examples"], ["loc", [null, [34, 8], [34, 75]]]], ["content", "outlet", ["loc", [null, [37, 6], [37, 16]]]], ["content", "app-version", ["loc", [null, [40, 17], [40, 32]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/index/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 4
              },
              "end": {
                "line": 39,
                "column": 4
              }
            },
            "moduleName": "pilas-editor/templates/index/about.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "pull-left uk-button");
            var el2 = dom.createTextNode("Abrir herramientas de desarrollo");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["toggleDeveloperMode"], [], ["loc", [null, [38, 42], [38, 74]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 45,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/index/about.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "dialog-container");
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          dom.setAttribute(el2, "class", "dialog-title");
          var el3 = dom.createTextNode("pilas-editor");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("\n    Esta es una versión experimental de pilas-engine funcionando sobre\n    javascript e incorporando un editor integrado, el objetivo del experimento\n    es evaluar la viabilidad de crear una versión 2.0 de pilas-engine\n    usando este conjunto de herramientas.\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("\n    Si quieres obtener más información, te recomendamos visitar el sitio\n    oficial de pilas-engine o github:\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "href", "http://www.pilas-engine.com.ar");
          dom.setAttribute(el3, "target", "_blank");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "img pilas_logo_60");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "href", "http://www.github.com/pilas-engine");
          dom.setAttribute(el3, "target", "_blank");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "img github");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Este proyecto utiliza varias tecnologías, aquí citamos las más importantes:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          dom.setAttribute(el2, "class", "inner-padding-right");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "href", "http://emberjs.com/");
          dom.setAttribute(el3, "target", "_blank");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "img ember");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "href", "https://www.typescriptlang.org/");
          dom.setAttribute(el3, "target", "_blank");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "img typescript");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "href", "http://phaser.io");
          dom.setAttribute(el3, "target", "_blank");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "img phaser");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "href", "https://greensock.com");
          dom.setAttribute(el3, "target", "_blank");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "img greenSock");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "href", "http://electron.atom.io/");
          dom.setAttribute(el3, "target", "_blank");
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "img electron");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "dialog-buttons");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "uk-button");
          var el4 = dom.createTextNode("Cerrar");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [0, 13]);
          var element2 = dom.childAt(element1, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element1, 1, 1);
          morphs[1] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["block", "if", [["get", "electron.inElectron", ["loc", [null, [37, 10], [37, 29]]]]], [], 0, null, ["loc", [null, [37, 4], [39, 11]]]], ["element", "action", ["toggleModal"], [], ["loc", [null, [41, 30], [41, 54]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/index/about.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "modal-dialog", [], ["close", "toggleModal", "container-class", "about-dialog"], 0, null, ["loc", [null, [1, 0], [45, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/index/setup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 21,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/index/setup.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "dialog-container");
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          dom.setAttribute(el2, "class", "dialog-title");
          var el3 = dom.createTextNode("Configuración");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "for", "vim");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    Modo VIM en el editor (no recomendado para el 90% de los usuarios)\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("\n    Tema: ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "uk-button");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "dialog-buttons");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "uk-button");
          var el4 = dom.createTextNode("Cerrar");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [5, 1]);
          var element2 = dom.childAt(element0, [7, 1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["inline", "input", [], ["id", "vim", "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "preferences.vimMode", ["loc", [null, [7, 45], [7, 64]]]]], [], []]], ["loc", [null, [7, 4], [7, 66]]]], ["element", "action", ["changeTheme"], [], ["loc", [null, [13, 18], [13, 42]]]], ["content", "preferences.theme", ["loc", [null, [13, 61], [13, 82]]]], ["element", "action", ["toggleModal"], [], ["loc", [null, [17, 30], [17, 54]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/index/setup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "modal-dialog", [], ["close", "toggleModal", "focusSelector", "a#close", "container-class", "setup-dialog"], 0, null, ["loc", [null, [1, 0], [21, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/manual", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 8
              },
              "end": {
                "line": 5,
                "column": 98
              }
            },
            "moduleName": "pilas-editor/templates/manual.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["home"], [], ["loc", [null, [5, 79], [5, 97]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 105
              }
            },
            "moduleName": "pilas-editor/templates/manual.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["briefcase"], [], ["loc", [null, [6, 81], [6, 104]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/manual.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pull-left");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "uk-button-group");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["tagName", "button", "class", "uk-button uk-button-mini"], 0, null, ["loc", [null, [5, 8], [5, 110]]]], ["block", "link-to", ["project"], ["tagName", "button", "class", "uk-button uk-button-mini"], 1, null, ["loc", [null, [6, 8], [6, 117]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/manual.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "x-header", [], [], 0, null, ["loc", [null, [1, 0], [10, 13]]]], ["content", "x-manual", ["loc", [null, [12, 0], [12, 12]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/mobile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/mobile.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ratchet-namespace");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 4], [2, 14]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("pilas-editor/templates/mobile/examples", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 2,
              "column": 59
            }
          },
          "moduleName": "pilas-editor/templates/mobile/examples.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" volver ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/mobile/examples.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "bar bar-nav");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "title");
        var el3 = dom.createTextNode("pilas-engine");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "content-padded text-center");
        var el3 = dom.createTextNode("¡Hola, esto es pilas-engine!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["mobile.index"], ["class", "pull-left btn"], 0, null, ["loc", [null, [2, 2], [2, 71]]]], ["inline", "x-example-list", [], ["examples", ["subexpr", "@mut", [["get", "model", ["loc", [null, [8, 28], [8, 33]]]]], [], []], "isMobile", true], ["loc", [null, [8, 2], [8, 49]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/mobile/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 50
            }
          },
          "moduleName": "pilas-editor/templates/mobile/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Ver ejemplos");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/mobile/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "bar bar-nav");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "title");
        var el3 = dom.createTextNode("pilas-engine");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "content");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "content-padded text-center");
        var el3 = dom.createTextNode("¡Hola, esto es pilas-engine!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "card");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "table-view");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "class", "table-view-cell");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "class", "table-view-cell");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "");
        var el6 = dom.createTextNode("Visitar el sitio de pilas-engine.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 3, 1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["block", "link-to", ["mobile.examples"], [], 0, null, ["loc", [null, [12, 8], [12, 62]]]], ["element", "action", ["visitExternalSite"], [], ["loc", [null, [16, 20], [16, 50]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/mobile/run-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/mobile/run-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "close-container");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "");
          dom.setAttribute(el2, "id", "close-button");
          dom.setAttribute(el2, "class", "btn btn-default btn-close");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createElementMorph(element0);
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["inline", "x-result", [], ["project", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 21], [2, 26]]]]], [], []]], ["loc", [null, [2, 2], [2, 28]]]], ["element", "action", ["toggleModal"], [], ["loc", [null, [5, 33], [5, 57]]]], ["inline", "fa-icon", ["close"], [], ["loc", [null, [5, 92], [5, 111]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/mobile/run-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "modal-dialog", [], ["close", "toggleModal"], 0, null, ["loc", [null, [1, 0], [8, 17]]]], ["content", "yield", ["loc", [null, [10, 0], [10, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/project-loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 6
              },
              "end": {
                "line": 5,
                "column": 96
              }
            },
            "moduleName": "pilas-editor/templates/project-loading.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["home"], [], ["loc", [null, [5, 77], [5, 95]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 6
              },
              "end": {
                "line": 6,
                "column": 103
              }
            },
            "moduleName": "pilas-editor/templates/project-loading.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["briefcase"], [], ["loc", [null, [6, 79], [6, 102]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/project-loading.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pull-left");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "uk-button-group");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["tagName", "button", "class", "uk-button uk-button-mini"], 0, null, ["loc", [null, [5, 6], [5, 108]]]], ["block", "link-to", ["project"], ["tagName", "button", "class", "uk-button uk-button-mini"], 1, null, ["loc", [null, [6, 6], [6, 115]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/project-loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "loading-p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "x-header", [], [], 0, null, ["loc", [null, [1, 0], [10, 13]]]], ["content", "x-spinner", ["loc", [null, [15, 2], [15, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/project", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 4,
                "column": 98
              }
            },
            "moduleName": "pilas-editor/templates/project.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["home"], [], ["loc", [null, [4, 79], [4, 97]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 8
              },
              "end": {
                "line": 5,
                "column": 105
              }
            },
            "moduleName": "pilas-editor/templates/project.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["briefcase"], [], ["loc", [null, [5, 81], [5, 104]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/project.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pull-left");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "uk-button-group");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element3, 1, 1);
          morphs[1] = dom.createMorphAt(element3, 3, 3);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["tagName", "button", "class", "uk-button uk-button-mini"], 0, null, ["loc", [null, [4, 8], [4, 110]]]], ["block", "link-to", ["project"], ["tagName", "button", "class", "uk-button uk-button-mini"], 1, null, ["loc", [null, [5, 8], [5, 117]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 14
              },
              "end": {
                "line": 32,
                "column": 58
              }
            },
            "moduleName": "pilas-editor/templates/project.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "project.title", ["loc", [null, [32, 41], [32, 58]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 36,
                "column": 16
              },
              "end": {
                "line": 36,
                "column": 113
              }
            },
            "moduleName": "pilas-editor/templates/project.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Ejecutar");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 16
              },
              "end": {
                "line": 37,
                "column": 99
              }
            },
            "moduleName": "pilas-editor/templates/project.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Editar");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 8
            },
            "end": {
              "line": 41,
              "column": 8
            }
          },
          "moduleName": "pilas-editor/templates/project.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "uk-width-2-3");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "uk-width-1-3");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "uk-button uk-button-mini");
          var el4 = dom.createTextNode("Eliminar");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element1, [5]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createMorphAt(element1, 3, 3);
          morphs[3] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["block", "link-to", ["edit", ["get", "project", ["loc", [null, [32, 32], [32, 39]]]]], [], 0, null, ["loc", [null, [32, 14], [32, 70]]]], ["block", "link-to", ["project.runModal", ["get", "project", ["loc", [null, [36, 46], [36, 53]]]]], ["tagName", "button", "class", "uk-button uk-button-mini"], 1, null, ["loc", [null, [36, 16], [36, 125]]]], ["block", "link-to", ["edit", ["get", "project", ["loc", [null, [37, 34], [37, 41]]]]], ["tagName", "button", "class", "uk-button uk-button-mini"], 2, null, ["loc", [null, [37, 16], [37, 111]]]], ["element", "action", ["remove", ["get", "project", ["loc", [null, [38, 42], [38, 49]]]]], [], ["loc", [null, [38, 24], [38, 51]]]]],
        locals: ["project"],
        templates: [child0, child1, child2]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 8
            },
            "end": {
              "line": 45,
              "column": 8
            }
          },
          "moduleName": "pilas-editor/templates/project.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "colspan", "2");
          var el3 = dom.createTextNode("No hay proyectos para mostrar aún.");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 52,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/project.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "padding");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Proyectos");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "bar");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "uk-button");
        var el4 = dom.createTextNode("Crear un proyecto nuevo");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2, "class", "uk-table  uk-table-striped table-border");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("thead");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Nombre del proyecto");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Acciones");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [2]);
        var element5 = dom.childAt(element4, [3, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element5);
        morphs[2] = dom.createMorphAt(dom.childAt(element4, [5, 3]), 1, 1);
        morphs[3] = dom.createMorphAt(element4, 7, 7);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "x-header", [], [], 0, null, ["loc", [null, [1, 0], [8, 13]]]], ["element", "action", ["newProject"], [], ["loc", [null, [17, 12], [17, 35]]]], ["block", "each", [["get", "model", ["loc", [null, [29, 16], [29, 21]]]]], [], 1, 2, ["loc", [null, [29, 8], [45, 17]]]], ["content", "outlet", ["loc", [null, [49, 2], [49, 12]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("pilas-editor/templates/project/run-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "pilas-editor/templates/project/run-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "close-container");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "");
          dom.setAttribute(el2, "id", "close-button");
          dom.setAttribute(el2, "class", "uk-button uk-button-small");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3, 1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createElementMorph(element0);
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["inline", "x-result", [], ["project", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 21], [3, 26]]]]], [], []]], ["loc", [null, [3, 2], [3, 28]]]], ["element", "action", ["toggleModal"], [], ["loc", [null, [6, 33], [6, 57]]]], ["inline", "fa-icon", ["close"], [], ["loc", [null, [6, 92], [6, 111]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/project/run-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "modal-dialog", [], ["close", "toggleModal"], 0, null, ["loc", [null, [1, 0], [9, 17]]]], ["content", "yield", ["loc", [null, [11, 0], [11, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("pilas-editor/templates/test", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 3
            },
            "end": {
              "line": 1,
              "column": 31
            }
          },
          "moduleName": "pilas-editor/templates/test.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Regresar");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "pilas-editor/templates/test.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" || [loading: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("] || Cantidad de actores: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0, 0, 0);
        morphs[1] = dom.createMorphAt(element0, 2, 2);
        morphs[2] = dom.createMorphAt(element0, 4, 4);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [1, 3], [1, 43]]]], ["content", "pilas.loading", ["loc", [null, [1, 57], [1, 74]]]], ["content", "pilas.actorCounter", ["loc", [null, [1, 100], [1, 122]]]], ["inline", "x-canvas", [], ["width", 200, "height", 200, "pilas", ["subexpr", "@mut", [["get", "pilas", ["loc", [null, [3, 38], [3, 43]]]]], [], []], "onReady", "onReady"], ["loc", [null, [3, 0], [3, 63]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('pilas-editor/config/environment', ['ember'], function(Ember) {
  var prefix = 'pilas-editor';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("pilas-editor/app")["default"].create({"name":"pilas-editor","version":"0.0.46+d6c16fe6"});
}

/* jshint ignore:end */
//# sourceMappingURL=pilas-editor.map