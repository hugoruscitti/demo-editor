import Ember from 'ember';

export default Ember.Route.extend({
  exampleList: Ember.inject.service(),

  model() {
    return this.get("exampleList").findAll();
  }
});
