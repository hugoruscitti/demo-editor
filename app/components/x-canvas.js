import Ember from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Ember.Component.extend(InboundActions, {
  classNames: ['x-canvas'],
  innerWindow: null,

  didInsertElement() {
    let iframeElement = this.$().find('#innerIframe').first();
    console.log(iframeElement);
    window.ipp = iframeElement;

    //this.reloadIframe();
    //this.set('innerWindow', iframeElement.contentWindow);
  },

  reloadIframe() {

    $('#innerIframe')[0].contentWindow.onload = function() {
      alert("ASDASD");
    };
    $('#innerIframe')[0].contentWindow.location.reload(true);

    /*
    $('#innerIframe').contents().find('html').html(`
      <h1>inner</h1>

      <p>iframe</p>
    `);
    */
  },

  actions: {
    execute(code) {
      this.get("innerWindow").eval(code);
    },
    clear() {
      this.reloadIframe();
    }
  }
});
