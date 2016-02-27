import Ember from 'ember';
import ModalDialog from 'ember-modal-dialog/components/modal-dialog';

export default ModalDialog.extend({
  setup: function() {
    Ember.$('body').on('keyup.modal-dialog', (e) => {
      if (e.keyCode === 27) {
        this.sendAction('close');
      }
    });
  }.on('didInsertElement'),

  didInsertElement() {
    this._super();
    this.focusOnOpen();
  },

  focusOnOpen() {
    let focusSelector = this.get('focusSelector');

    if (this.get('focusSelector')) {
      Ember.$(focusSelector).focus();
    }
  },

  teardown: function() {
    Ember.$('body').off('keyup.modal-dialog');
  }.on('willDestroyElement')
});
