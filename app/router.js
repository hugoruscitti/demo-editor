import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: "/"}, function() {
    this.route('about');
    this.route('setup');
  });

  this.route('edit', {path: "edit/:project_id"}, function() {
    this.route('previewModal');
    this.route('settingsModal', {path: "settingsModal/:project_id"});
  });

  this.route('project', {path: "/project"}, function() {
    this.route('runModal', {path: "runModal/:project_id"});
  });

  this.route('test');
  this.route('game');
  this.route('examples', function() {
    this.route('show', {path: "show/:example_id"}); // route like: /examples/5
    this.route('runModal', {path: ":example_id"}); // route like: /examples/5
  });
});

export default Router;
