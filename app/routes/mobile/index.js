import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    visitExternalSite() {
      navigator.app.loadUrl("http://google.com", {openExternal : true});
    }
  }
});
