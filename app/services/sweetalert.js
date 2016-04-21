import Ember from 'ember';

export default Ember.Service.extend({
  confirm(options) {
    return new Ember.RSVP.Promise((resolve) => {
      swal(options, function(isConfirm) {
        resolve(isConfirm);
      });
    });
  },
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
