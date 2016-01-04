import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('project');
  this.route('run', {path: "run/:project_id"});
  this.route('edit', {path: "edit/:project_id"});

  this.route('index', {path: "/"}, function() {
    this.route('about');
  });
});

export default Router;
