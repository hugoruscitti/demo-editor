import Ember from 'ember';

export default Ember.Route.extend({
  exampleList: Ember.inject.service(),

  model(params) {
    return this.get("exampleList").find(parseInt(params.example_id, 10));
  },

  afterModel(model) {
    let name = model.get("name");
    let url = `/ejemplos/${name}.js`;


    return new Ember.RSVP.Promise((success, error) => {
      $.get(url).then((reason) => {
        model.set("code", reason);
        error(model);
      }, (response) => {
        model.set("code", response.responseText);
        success(model);
      });
    });

  }
});
