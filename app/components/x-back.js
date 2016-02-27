import Ember from 'ember';
const { getOwner } = Ember;

export default Ember.Component.extend({
  classNames: ['x-back-container'],

  actions: {
    back() {
      getOwner(this).lookup('controller:application').transitionToRoute(this.get('to'));
    }
  }
});
