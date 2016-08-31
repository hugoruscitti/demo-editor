import Ember from 'ember';
import ModalDialog from 'ember-modal-dialog/components/modal-dialog';

export default ModalDialog.extend({

  didInsertElement() {
    this._super();
    this.focusOnOpen();

    Ember.$('body').on('keyup', (e) => {
      if (e.keyCode === 27) {
        this.sendAction('close');
      }
    });

  },

  focusOnOpen() {
    let focusSelector = this.get('focusSelector');

    if (this.get('focusSelector')) {
      Ember.$(focusSelector).focus();
    }
  },

  willDestroyElement: function() {
    Ember.$('body').off('keyup');
  }
});
