import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: "/"}, function() {
    this.route('about');
  });

  this.route('run', {path: "run/:project_id"});
  this.route('edit', {path: "edit/:project_id"}, function() {
    this.route('previewModal');
  });

  this.route('project', {path: "/project"}, function() {
    this.route('runModal', {path: "project/runModal/:project_id"});
  });

});

export default Router;
