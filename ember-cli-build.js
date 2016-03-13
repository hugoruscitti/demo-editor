/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    emberCliFontAwesome: {
      useScss: true
    }
  });

  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  });


  app.import('vendor/ace.js');

  app.import('vendor/ext-language_tools.js');
  app.import('vendor/mode-typescript.js');

  //app.import('vendor/phaser.js');
  //app.import('vendor/pilasengine.js');

  app.import('vendor/theme-monokai.js');
  app.import('vendor/theme-xcode.js');

  app.import('vendor/keybinding-vim.js');

  app.import('vendor/typescriptServices.js');
  app.import('vendor/transpiler.js');


  /* Necesarios para ember-cli-jsconsole */
/*
  app.import("./bower_components/codemirror/lib/codemirror.css");
  app.import("./bower_components/codemirror/theme/eclipse.css");
  app.import("./bower_components/codemirror/lib/codemirror.js");
  app.import("./bower_components/codemirror/addon/hint/javascript-hint.js");
  app.import("./bower_components/codemirror/addon/hint/show-hint.css");
  app.import("./bower_components/codemirror/addon/hint/show-hint.js");
 
  app.import("./bower_components/codemirror/mode/javascript/javascript.js");
 
  app.import("./bower_components/jsconsole/styles/console.css");
  app.import("./bower_components/jsconsole/dist/console.js");
  app.import("./bower_components/jsconsole/styles/gutter-icons.png", {destDir: 'assets/'});
  app.import("./bower_components/jsconsole/styles/meslo/MesloLGSDZ-Regular.woff", {destDir: 'assets/meslo'});
*/
  /* FIN: Necesarios para ember-cli-jsconsole */

  return app.toTree();
};
