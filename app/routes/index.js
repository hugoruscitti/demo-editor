import Ember from 'ember';

export default Ember.Route.extend({
  keen: Ember.inject.service(),

  activate() {
    this.get('keen').sendEvent('app-start', {
      otherData: 1,
      somethingElse: 'foobar'
    });
  }
});
