import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['x-back-container'],

  actions: {
    back() {
      this.container.lookup('controller:application').transitionToRoute(this.get('to'));
    }
  }
});
