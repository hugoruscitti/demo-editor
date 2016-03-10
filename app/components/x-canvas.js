import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['x-canvas'],
  init() {
    this._super();
    console.log(this.$('#innerIframe'));
  },
  actions: {
    execute(code) {
      
    }
  }
});
