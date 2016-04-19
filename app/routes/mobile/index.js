import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    visitExternalSite() {
      let url = "http://www.pilas-engine.com.ar";
      window.open(url, '_system');
    }
  }
});
