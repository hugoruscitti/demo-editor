import Ember from 'ember';

export default Ember.Route.extend({
  gameEngine: Ember.inject.service(),

  afterModel() {
    return this.get("gameEngine").start();
  }
});
