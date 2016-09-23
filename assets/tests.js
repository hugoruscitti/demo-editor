define('pilas-editor/tests/acceptance/puede-abrir-un-ejemplo', ['exports', 'qunit', 'pilas-editor/tests/helpers/module-for-acceptance'], function (exports, _qunit, _pilasEditorTestsHelpersModuleForAcceptance) {

  (0, _pilasEditorTestsHelpersModuleForAcceptance['default'])('Acceptance | puede abrir un ejemplo');

  (0, _qunit.test)('visiting /examples', function (assert) {
    visit('/examples');

    andThen(function () {
      assert.equal(currentURL(), '/examples');
    });
  });
});
define('pilas-editor/tests/acceptance/puede-abrir-un-ejemplo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance/puede-abrir-un-ejemplo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/puede-abrir-un-ejemplo.js should pass jshint.');
  });
});
define('pilas-editor/tests/acceptance/puede-ejecutar-un-proyecto-test', ['exports', 'qunit', 'pilas-editor/tests/helpers/module-for-acceptance'], function (exports, _qunit, _pilasEditorTestsHelpersModuleForAcceptance) {

  (0, _pilasEditorTestsHelpersModuleForAcceptance['default'])('Acceptance | puede ejecutar un proyecto');

  (0, _qunit.test)('visiting /', function (assert) {
    server.createList('project', 1);
    visit('/');

    andThen(function () {
      assert.equal(currentURL(), '/');
      click($("button:contains('Proyectos')"));
    });

    andThen(function () {
      assert.equal($("button:contains('Ejecutar')").length, 1, "Existe el botón ejecutar en la lista de proyectos.");
      click($("button:contains('Ejecutar')"));
    });

    andThen(function () {
      assert.equal($("iframe").length, 2, "Hay un iframe para el resultado.");
    });
  });
});
define('pilas-editor/tests/acceptance/puede-ejecutar-un-proyecto-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance/puede-ejecutar-un-proyecto-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/puede-ejecutar-un-proyecto-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/acceptance/puede-visualizar-acercade-test', ['exports', 'qunit', 'pilas-editor/tests/helpers/module-for-acceptance'], function (exports, _qunit, _pilasEditorTestsHelpersModuleForAcceptance) {

  (0, _pilasEditorTestsHelpersModuleForAcceptance['default'])('Acceptance | puede visualizar acercade');

  (0, _qunit.test)('visiting /', function (assert) {
    visit('/');

    andThen(function () {
      assert.equal(currentURL(), '/', "puede ingresar a la sección inicial.");
      click($("button:contains('Acerca de ...')"));
    });

    andThen(function () {
      assert.equal(currentURL(), '/about', "pudo ingresar a la sección about.");
    });
  });
});
define('pilas-editor/tests/acceptance/puede-visualizar-acercade-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance/puede-visualizar-acercade-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/puede-visualizar-acercade-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('pilas-editor/tests/blanket-options', ['exports'], function (exports) {
  /* globals blanket, module */

  var options = {
    modulePrefix: 'pilas-editor',
    filter: '//.*pilas-editor/.*/',
    antifilter: '//.*(tests|template).*/',
    loaderExclusions: [],
    enableCoverage: true,
    cliOptions: {
      reporters: ['json'],
      autostart: true
    }
  };
  if (typeof exports === 'undefined') {
    blanket.options(options);
  } else {
    module.exports = options;
  }
});
define('pilas-editor/tests/blanket-options.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - blanket-options.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'blanket-options.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/modal-dialog.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/modal-dialog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-dialog.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/pilas-spliter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/pilas-spliter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/pilas-spliter.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-back.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-back.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-back.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-canvas.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-canvas.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-canvas.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-editor.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-editor.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-editor.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-example-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-example-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-example-list.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-example-preview.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-example-preview.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-example-preview.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-header.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-header.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-header.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-icon.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-icon.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-icon.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-img.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-img.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-img.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-main-button.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-main-button.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-main-button.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-manual.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-manual.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-manual.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-pushbutton.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-pushbutton.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-pushbutton.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-result.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-result.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-result.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-section-inspector.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-section-inspector.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-section-inspector.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-section-manual.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-section-manual.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-section-manual.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-select.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-select.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-select.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-spinner.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-spinner.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-spinner.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-state-button.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-state-button.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-state-button.js should pass jshint.');
  });
});
define('pilas-editor/tests/components/x-title.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/x-title.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-title.js should pass jshint.');
  });
});
define('pilas-editor/tests/controllers/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit.js should pass jshint.');
  });
});
define('pilas-editor/tests/controllers/edit/settings-modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/edit/settings-modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit/settings-modal.js should pass jshint.');
  });
});
define('pilas-editor/tests/controllers/examples/run-modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/examples/run-modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/examples/run-modal.js should pass jshint.');
  });
});
define('pilas-editor/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('pilas-editor/tests/controllers/index/about.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/index/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index/about.js should pass jshint.');
  });
});
define('pilas-editor/tests/controllers/index/setup.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/index/setup.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index/setup.js should pass jshint.');
  });
});
define('pilas-editor/tests/controllers/mobile/run-modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/mobile/run-modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/mobile/run-modal.js should pass jshint.');
  });
});
define('pilas-editor/tests/controllers/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/project.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/project.js should pass jshint.');
  });
});
define('pilas-editor/tests/controllers/project/run-modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/project/run-modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/project/run-modal.js should pass jshint.');
  });
});
define('pilas-editor/tests/controllers/test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/test.js should pass jshint.');
  });
});
define('pilas-editor/tests/electron', ['exports'], function (exports) {
    /* jshint undef: false */

    var BrowserWindow = require('browser-window');
    var app = require('app');
    var mainWindow = null;

    app.on('window-all-closed', function onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('ready', function onReady() {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600
        });

        delete mainWindow.module;

        if (process.env.EMBER_ENV === 'test') {
            mainWindow.loadUrl('file://' + __dirname + '/index.html');
        } else {
            mainWindow.loadUrl('file://' + __dirname + '/dist/index.html');
        }

        mainWindow.on('closed', function onClosed() {
            mainWindow = null;
        });
    });

    /* jshint undef: true */
});
define('pilas-editor/tests/electron.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - electron.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'electron.js should pass jshint.');
  });
});
define('pilas-editor/tests/helpers/createPilasTest', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = createPilasTest;

  function createPilasTest(context, callback) {
    // context en este caso es el test en si mismo (this).

    return new _ember['default'].RSVP.Promise(function (resolve) {

      context.on('onLoad', function (val) {
        var iframe = val.iframeElement;
        var pilas = iframe.contentWindow.eval("pilasengine.iniciar('canvas', {ancho: 640, alto: 384, omitir_impresion_de_version: true})");

        pilas.cuando("inicia", function () {
          callback(pilas, resolve);
        });
      });

      context.render(_ember['default'].HTMLBars.template((function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type', 'multiple-nodes']
            },
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 9,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n    ');
            dom.appendChild(el0, el1);
            var el1 = dom.createElement('style');
            var el2 = dom.createTextNode('\n      iframe {\n        position: absolute;\n        top:0;\n        bottom: 0;\n      }\n    ');
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n    ');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [['inline', 'x-canvas', [], ['onLoad', 'onLoad'], ['loc', [null, [1, 0], [1, 28]]]]],
          locals: [],
          templates: []
        };
      })()));
    });
  }
});
define('pilas-editor/tests/helpers/createPilasTest.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/createPilasTest.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/createPilasTest.js should pass jshint.');
  });
});
define('pilas-editor/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('pilas-editor/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('pilas-editor/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'pilas-editor/tests/helpers/start-app', 'pilas-editor/tests/helpers/destroy-app'], function (exports, _qunit, _pilasEditorTestsHelpersStartApp, _pilasEditorTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _pilasEditorTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _pilasEditorTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('pilas-editor/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('pilas-editor/tests/helpers/resolver', ['exports', 'ember-resolver', 'pilas-editor/config/environment'], function (exports, _emberResolver, _pilasEditorConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _pilasEditorConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _pilasEditorConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('pilas-editor/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('pilas-editor/tests/helpers/start-app', ['exports', 'ember', 'pilas-editor/app', 'pilas-editor/config/environment'], function (exports, _ember, _pilasEditorApp, _pilasEditorConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _pilasEditorConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _pilasEditorApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('pilas-editor/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/pilasengine-actores-test', ['exports', 'ember-qunit', 'pilas-editor/tests/helpers/createPilasTest'], function (exports, _emberQunit, _pilasEditorTestsHelpersCreatePilasTest) {

  (0, _emberQunit.moduleForComponent)('demo', 'Integration | Component | x-canvas', {
    integration: true
  });

  (0, _emberQunit.test)('puede crear un actor personalizado', function (assert) {
    return (0, _pilasEditorTestsHelpersCreatePilasTest['default'])(this, function (pilas, resolve) {
      var mensaje_error_esperado = /Solo se admiten clases como parámetro./;

      assert.throws(function () {
        pilas.actores.vincular();
      }, mensaje_error_esperado, "Laza un error si no se especifica una clase.");

      assert.throws(function () {
        pilas.actores.vincular("cadena");
      }, mensaje_error_esperado, "También lanza error si no se envía una clase.");

      resolve({});
    });
  });

  (0, _emberQunit.test)('puede crear un actor', function (assert) {

    return (0, _pilasEditorTestsHelpersCreatePilasTest['default'])(this, function (pilas, resolve) {
      var actor = pilas.actores.actor();
      assert.equal(actor.x, 0, "El actor está en la posición inicial X=0.");
      assert.equal(actor.y, 0, "El actor está en la posición inicial Y=0.");

      setTimeout(resolve, 500);
    });
  });

  (0, _emberQunit.test)('puede crear un actor patito', function (assert) {

    return (0, _pilasEditorTestsHelpersCreatePilasTest['default'])(this, function (pilas, resolve) {
      var patito = pilas.actores.patito();
      assert.equal(patito.x, 0, "El actor está en la posición inicial.");
      patito.x = 100;

      setTimeout(resolve, 500);
    });
  });

  (0, _emberQunit.test)('puede autocompletar', function (assert) {

    return (0, _pilasEditorTestsHelpersCreatePilasTest['default'])(this, function (pilas, resolve) {
      assert.deepEqual(pilas.utils.autocompletar(""), [], "Retorna vacío si no especifica prefijo.");
      assert.deepEqual(pilas.utils.autocompletar("noexiste"), [], "Retorna vacío si la variables es incorrecta.");
      assert.deepEqual(pilas.utils.autocompletar("pilasen"), ['pilasengine'], "Autocompleta pilasengine.");
      assert.deepEqual(pilas.utils.autocompletar("PiLASEN"), ['pilasengine'], "Autocompleta incluso ignorando mayúsculas o minúsculas.");
      //assert.deepEqual(pilas.utils.autocompletar("pilas.actores.pat"), ['pilas.actores.patito'], "Autocompleta funciones dentro de un objeto.");
      //assert.deepEqual(pilas.utils.autocompletar("pilas.acto"),        ['pilas.actores'], "Autocompleta funciones dentro de un objeto.");

      setTimeout(resolve, 2000);
    });
  });

  (0, _emberQunit.test)('Puede inicializar y crear actores', function (assert) {
    return (0, _pilasEditorTestsHelpersCreatePilasTest['default'])(this, function (pilas, resolve) {
      assert.ok(pilas.escenas.normal, "Existe la escena normal.");
      assert.ok(!pilas.escenas.norsdsdmal, "No existe una escena norsdsdmal.");
      pilas.reiniciar();

      assert.equal(pilas.obtener_cantidad_de_actores(), 1, "Luego de reiniciar vuelve a haber un solo actor (el fondo).");

      setTimeout(resolve, 2000);
    });
  });

  (0, _emberQunit.test)('Puede cambiar propiedades de los actores', function (assert) {
    return (0, _pilasEditorTestsHelpersCreatePilasTest['default'])(this, function (pilas, resolve) {
      pilas.reiniciar();

      var patito = pilas.actores.patito();

      assert.equal(patito.x, 0, "El actor está en el centro de la pantalla.");
      assert.equal(patito.y, 0, "El actor está en el centro de la pantalla.");

      assert.equal(patito.rotacion, 0, "El actor está sin rotacion.");
      patito.rotacion = 180;
      assert.equal(patito.rotacion, 180, "Pudo cambiar de rotación.");
      patito.rotacion = 0;
      assert.equal(patito.rotacion, 0, "Y pudo restaurar la rotación.");

      setTimeout(resolve, 2000);
    });
  });

  (0, _emberQunit.test)('Puede aplicar interpolaciones a los actores', function (assert) {

    return (0, _pilasEditorTestsHelpersCreatePilasTest['default'])(this, function (pilas, resolve) {
      pilas.reiniciar();

      var patito = pilas.actores.patito();
      patito.escala = [2, 1, 2];

      setTimeout(function () {
        //assert.equal(patito.escala, 2, "Luego de unos segundos escaló correctamente.");

        patito.rotacion = [180];

        setTimeout(function () {
          assert.equal(patito.rotacion, 180, "Puede dar media vuelta.");
          patito.escala = [0];

          setTimeout(function () {
            assert.equal(patito.escala, 0, "Puede cambiar la escala a 0.");
            resolve();
          }, 1000);
        }, 1000);
      }, 2000);
    });
  });

  (0, _emberQunit.test)('test-iniciar: Puede inicializar y crear actores', function (assert) {

    return (0, _pilasEditorTestsHelpersCreatePilasTest['default'])(this, function (pilas, resolve) {
      pilas.reiniciar();

      assert.equal(pilas.obtener_cantidad_de_actores(), 1, "Hay un solo actor en pantalla (el fondo).");

      var patito = pilas.actores.patito();
      assert.ok(patito, "Pudo crear correctamente al actor parito.");

      assert.equal(pilas.obtener_cantidad_de_actores(), 2, "Ahora hay dos, el fondo y el patito.");

      pilas.reiniciar();
      assert.equal(pilas.obtener_cantidad_de_actores(), 1, "Luego de reiniciar vuelve a haber un solo actor (el fondo).");

      resolve();
    });
  });
});
define('pilas-editor/tests/integration/components/pilasengine-actores-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/pilasengine-actores-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/pilasengine-actores-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/pilasengine-etiquetas-test', ['exports', 'ember-qunit', 'pilas-editor/tests/helpers/createPilasTest'], function (exports, _emberQunit, _pilasEditorTestsHelpersCreatePilasTest) {

  (0, _emberQunit.moduleForComponent)('demo', 'Integration | Component | x-canvas | etiquetas', {
    integration: true
  });

  (0, _emberQunit.test)('el actor tiene etiquetas iniciales', function (assert) {
    return (0, _pilasEditorTestsHelpersCreatePilasTest['default'])(this, function (pilas, resolve) {

      var actor = pilas.actores.actor();

      assert.ok(actor.etiquetas, "Existe el objeto etiquetas dentro del actor.");

      assert.equal(actor.etiquetas.tiene_etiqueta('actor'), true, "Tiene la etiqueta de la clase.");
      assert.equal(actor.etiquetas.tiene_etiqueta('ejemplo'), false, "No tiene otra etiqueta incorrecta.");
      assert.deepEqual(actor.etiquetas.obtener_como_lista(), ['actor'], "Puede retornar las etiquetas como una lista.");
      assert.equal(actor.etiquetas.obtener_cantidad(), 1, "Tiene exactamente dos etiquetas.");

      assert.equal(actor.tiene_etiqueta('actor'), true, "El método de consulta también funciona directamente en el actor.");
      assert.equal(actor.obtener_cantidad_de_etiquetas(), 1, "Solo tiene una etiqueta.");

      /* Si agrega otra etiqueta ... */
      actor.agregar_etiqueta('protagonista');
      assert.equal(actor.etiquetas.obtener_cantidad(), 2, "Luego de agregar la etiqueta protagonista ya son dos las etiquetas.");

      /* Agregando varias veces la misma etiqueta no influye. */
      actor.agregar_etiqueta('protagonista');
      actor.agregar_etiqueta('ProtaGonista');
      actor.agregar_etiqueta('protagonista');

      assert.equal(actor.etiquetas.obtener_cantidad(), 2, "Agregar varias veces la misma etiqueta no influye.");

      /* Las etiquetas se pueden eliminar */

      actor.eliminar_etiqueta("ProtagOnista");
      actor.eliminar_etiqueta("pepepe"); // Esta etiqueta no existe, así que no influye.
      assert.equal(actor.etiquetas.obtener_cantidad(), 1, "Las etiquetas se pueden eliminar");

      resolve({});
    });
  });
});
define('pilas-editor/tests/integration/components/pilasengine-etiquetas-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/pilasengine-etiquetas-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/pilasengine-etiquetas-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/pilasengine-imagenes-tests', ['exports', 'ember-qunit', 'pilas-editor/tests/helpers/createPilasTest'], function (exports, _emberQunit, _pilasEditorTestsHelpersCreatePilasTest) {

  (0, _emberQunit.moduleForComponent)('demo', 'Integration | Component | x-canvas | imagenes', {
    integration: true
  });

  (0, _emberQunit.test)('las imágenes cargadas se pueden listar y consultar', function (assert) {
    return (0, _pilasEditorTestsHelpersCreatePilasTest['default'])(this, function (pilas, resolve) {

      //let actor = pilas.actores.actor();

      assert.ok(pilas.imagenes.obtener_como_lista(), "Existe el método para listar todas las imágenes.");
      assert.ok(pilas.imagenes.obtener_como_lista().length, "Retorna una lista como se espera.");

      assert.equal(pilas.imagenes.existe_imagen('data:sin_imagen.png'), true, "Se puede cargar la imagenen 'data:sin_imagen.png'");
      assert.equal(pilas.imagenes.existe_imagen('data:pepepe.png'), true, "Se puede cargar la imagenen 'data:sin_imagen.png'");

      resolve({});
    });
  });
});
define('pilas-editor/tests/integration/components/pilasengine-imagenes-tests.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/pilasengine-imagenes-tests.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/pilasengine-imagenes-tests.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-back-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-back', 'Integration | Component | x back', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 10
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-back', ['loc', [null, [1, 0], [1, 10]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), 'Regresar');
  });
});
define('pilas-editor/tests/integration/components/x-back-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-back-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-back-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-example-list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-example-list', 'Integration | Component | x example list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-example-list', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), '');
  });
});
define('pilas-editor/tests/integration/components/x-example-list-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-example-list-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-example-list-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-example-preview-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-example-preview', 'Integration | Component | x example preview', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 21
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-example-preview', ['loc', [null, [1, 0], [1, 21]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');
  });
});
define('pilas-editor/tests/integration/components/x-example-preview-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-example-preview-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-example-preview-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-header-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-header', 'Integration | Component | x header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 12
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-header', ['loc', [null, [1, 0], [1, 12]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'x-header', [], [], 0, null, ['loc', [null, [2, 4], [4, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('pilas-editor/tests/integration/components/x-header-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-header-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-header-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-icon-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-icon', 'Integration | Component | x icon', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 10
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-icon', ['loc', [null, [1, 0], [1, 10]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'x-icon', [], [], 0, null, ['loc', [null, [2, 4], [4, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('pilas-editor/tests/integration/components/x-icon-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-icon-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-icon-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-img-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-img', 'Integration | Component | x img', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 9
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-img', ['loc', [null, [1, 0], [1, 9]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');
  });
});
define('pilas-editor/tests/integration/components/x-img-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-img-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-img-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-main-button-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-main-button', 'Integration | Component | x main button', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-main-button', ['loc', [null, [1, 0], [1, 17]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), '');
  });
});
define('pilas-editor/tests/integration/components/x-main-button-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-main-button-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-main-button-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-manual-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-manual', 'Integration | Component | x manual', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 12
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-manual', ['loc', [null, [1, 0], [1, 12]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');
  });
});
define('pilas-editor/tests/integration/components/x-manual-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-manual-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-manual-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-pushbutton-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-pushbutton', 'Integration | Component | x pushbutton', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-pushbutton', ['loc', [null, [1, 0], [1, 16]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'x-pushbutton', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('pilas-editor/tests/integration/components/x-pushbutton-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-pushbutton-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-pushbutton-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-section-inspector-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-section-inspector', 'Integration | Component | x section inspector', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 23
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-section-inspector', ['loc', [null, [1, 0], [1, 23]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.ok(this.$().text().trim(), 'Tiene al menos un texto inicial.');
  });
});
define('pilas-editor/tests/integration/components/x-section-inspector-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-section-inspector-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-section-inspector-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-section-manual-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-section-manual', 'Integration | Component | x section manual', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-section-manual', ['loc', [null, [1, 0], [1, 20]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$("iframe").length, 1, "Existe un iframe para el manual.");
  });
});
define('pilas-editor/tests/integration/components/x-section-manual-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-section-manual-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-section-manual-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-select-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-select', 'Integration | Component | x select', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('options', ['uno']);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 28
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['inline', 'x-select', [], ['options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 19], [1, 26]]]]], [], []]], ['loc', [null, [1, 0], [1, 28]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), 'uno');
  });
});
define('pilas-editor/tests/integration/components/x-select-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-select-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-select-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-spinner-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-spinner', 'Integration | Component | x spinner', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-spinner', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), '');
  });
});
define('pilas-editor/tests/integration/components/x-spinner-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-spinner-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-spinner-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-state-button-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-state-button', 'Integration | Component | x state button', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('option', 'A simple option');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-state-button', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), '', 'Sin propiedades no imprime texto.');

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 32
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['inline', 'x-state-button', [], ['option', ['subexpr', '@mut', [['get', 'option', ['loc', [null, [1, 24], [1, 30]]]]], [], []]], ['loc', [null, [1, 0], [1, 32]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), 'A simple option', 'Con un texto lo incluye en el botón.');
  });
});
define('pilas-editor/tests/integration/components/x-state-button-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-state-button-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-state-button-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/integration/components/x-title-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('x-title', 'Integration | Component | x title', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 11
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'x-title', ['loc', [null, [1, 0], [1, 11]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    this.set("title", "hola");
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['empty-body']
            },
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 24
              }
            }
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

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 36
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['block', 'x-title', [], ['title', ['subexpr', '@mut', [['get', 'title', ['loc', [null, [1, 17], [1, 22]]]]], [], []]], 0, null, ['loc', [null, [1, 0], [1, 36]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'hola', "Muestra el título");
  });
});
define('pilas-editor/tests/integration/components/x-title-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/x-title-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-title-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/models/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/project.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/project.js should pass jshint.');
  });
});
define('pilas-editor/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/edit/settings-modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/edit/settings-modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit/settings-modal.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/examples/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/examples/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/index.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/examples/run-modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/examples/run-modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/examples/run-modal.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/manual.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/manual.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/manual.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/mobile.examples.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/mobile.examples.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/mobile.examples.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/mobile.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/mobile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/mobile.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/mobile/examples.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/mobile/examples.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/mobile/examples.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/mobile/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/mobile/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/mobile/index.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/mobile/run-modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/mobile/run-modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/mobile/run-modal.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/project.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/project.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/project.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/project/run-modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/project/run-modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/project/run-modal.js should pass jshint.');
  });
});
define('pilas-editor/tests/routes/test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test.js should pass jshint.');
  });
});
define('pilas-editor/tests/services/editor-factory.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/editor-factory.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/editor-factory.js should pass jshint.');
  });
});
define('pilas-editor/tests/services/electron.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/electron.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/electron.js should pass jshint.');
  });
});
define('pilas-editor/tests/services/example-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/example-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/example-list.js should pass jshint.');
  });
});
define('pilas-editor/tests/services/language-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/language-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/language-service.js should pass jshint.');
  });
});
define('pilas-editor/tests/services/pilas.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/pilas.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/pilas.js should pass jshint.');
  });
});
define('pilas-editor/tests/services/preferences.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/preferences.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/preferences.js should pass jshint.');
  });
});
define('pilas-editor/tests/services/sweetalert.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/sweetalert.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/sweetalert.js should pass jshint.');
  });
});
define('pilas-editor/tests/test-helper', ['exports', 'pilas-editor/tests/helpers/resolver', 'ember-qunit'], function (exports, _pilasEditorTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_pilasEditorTestsHelpersResolver['default']);
});
define('pilas-editor/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/controllers/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:edit', 'Unit | Controller | edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pilas-editor/tests/unit/controllers/edit-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/controllers/index/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:index/about', 'Unit | Controller | index/about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pilas-editor/tests/unit/controllers/index/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/index/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index/about-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/controllers/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:project', 'Unit | Controller | project', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pilas-editor/tests/unit/controllers/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/project-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/project-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/models/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('project', 'Unit | Model | project', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('pilas-editor/tests/unit/models/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/project-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/project-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:edit', 'Unit | Route | edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/edit-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/examples/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:examples/index', 'Unit | Route | examples/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/examples/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/examples/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/examples/index-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/manual-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:manual', 'Unit | Route | manual', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/manual-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/manual-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/manual-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/mobile-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:mobile', 'Unit | Route | mobile', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/mobile-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/mobile-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/mobile-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/mobile.examples-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:mobile.examples', 'Unit | Route | mobile.examples', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/mobile.examples-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/mobile.examples-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/mobile.examples-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/mobile/examples-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:mobile/examples', 'Unit | Route | mobile/examples', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/mobile/examples-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/mobile/examples-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/mobile/examples-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:project', 'Unit | Route | project', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/project-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/project-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/project-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/project/run-modal-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:project/run-modal', 'Unit | Route | project/run modal', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/project/run-modal-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/project/run-modal-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/project/run-modal-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/routes/test-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:test', 'Unit | Route | test', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pilas-editor/tests/unit/routes/test-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/test-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/services/editor-factory-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:editor-factory', 'Unit | Service | editor factory', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('pilas-editor/tests/unit/services/editor-factory-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/editor-factory-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/editor-factory-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/services/electron-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:electron', 'Unit | Service | electron', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('pilas-editor/tests/unit/services/electron-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/electron-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/electron-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/services/example-list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:example-list', 'Unit | Service | example list', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('pilas-editor/tests/unit/services/example-list-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/example-list-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/example-list-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/services/language-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:language-service', 'Unit | Service | language service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('pilas-editor/tests/unit/services/language-service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/language-service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/language-service-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/services/pilas-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:pilas', 'Unit | Service | pilas', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('pilas-editor/tests/unit/services/pilas-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/pilas-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/pilas-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/services/preferences-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:preferences', 'Unit | Service | preferences', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('pilas-editor/tests/unit/services/preferences-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/preferences-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/preferences-test.js should pass jshint.');
  });
});
define('pilas-editor/tests/unit/services/sweetalert-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:sweetalert', 'Unit | Service | sweetalert', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('pilas-editor/tests/unit/services/sweetalert-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/sweetalert-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/sweetalert-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('pilas-editor/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map