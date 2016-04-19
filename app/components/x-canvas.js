import Ember from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Ember.Component.extend(InboundActions, {
  classNames: ['x-canvas'],
  innerWindow: null,
  onLoad: null,

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, this.initElement);
  },

  initElement() {
    let iframeElement = this.$().find('#innerIframe')[0];

    this.set("iframeElement", iframeElement);
    window.iframeElement = iframeElement;

    this.get("iframeElement").onload = () => {
      if (this.get('onLoad')) {
        this.sendAction('onLoad', {iframeElement});
      }
    };

  },

  reloadIframe(onLoadFunction) {
    this.get("iframeElement").onload = onLoadFunction;
    this.get("iframeElement").contentWindow.location.reload(true);
  },

  actions: {
    execute(code) {
      this.reloadIframe(() => {
        this.get("iframeElement").contentWindow.eval(code);
      });
    },
    clear() {
      this.reloadIframe();
    }
  }

});
