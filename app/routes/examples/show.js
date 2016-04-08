import Ember from 'ember';

export default Ember.Route.extend({
  exampleList: Ember.inject.service(),

  model(params) {
    return this.get("exampleList").find(parseInt(params.example_id, 10));
  },
});
