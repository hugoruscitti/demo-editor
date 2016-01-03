import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('project');
  this.route('run', {path: "run/:project_id"});
});

export default Router;
