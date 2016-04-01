/* jshint node: true */

var electron = require('electron');

var app = electron.app;
var mainWindow = null;
var BrowserWindow = electron.BrowserWindow;


var fs = require('fs');

electron.crashReporter.start();

app.on('window-all-closed', function onWindowAllClosed() {
  app.quit();
});

app.on('ready', function onReady() {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'hidden' 
  });

  delete mainWindow.module;

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function onClosed() {
    mainWindow = null;
  });


  fs.watchFile('dist/index.html', function() {
    mainWindow.reload();
  });

});
