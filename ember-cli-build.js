/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    emberCliFontAwesome: {
      useScss: true
    }
  });

  app.import('bower_components/uikit/css/uikit.almost-flat.css');
  app.import('bower_components/uikit/js/uikit.js');

  app.import('vendor/ace.js');
  app.import('vendor/ext-language_tools.js');
  app.import('vendor/mode-typescript.js');

  app.import('vendor/theme-monokai.js');
  app.import('vendor/theme-xcode.js');

  app.import('vendor/keybinding-vim.js');

  app.import('vendor/typescriptServices.js');
  app.import('vendor/transpiler.js');

  return app.toTree();
};
