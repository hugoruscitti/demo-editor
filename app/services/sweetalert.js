import Ember from 'ember';

export default Ember.Service.extend({
  prompt(options) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      swal(options, function(inputValue) {
        if (inputValue) {
          resolve(inputValue);
        } else {
          reject();
        }
      });
    });
  }
});
