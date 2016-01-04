import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['x-back-container'],

  actions: {
    back() {
      window.history.back();
    }
  }
});
