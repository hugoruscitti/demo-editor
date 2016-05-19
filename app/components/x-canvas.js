import Ember from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Ember.Component.extend(InboundActions, {
  classNames: ['x-canvas'],
  innerWindow: null,
  onLoad: null, // solo para usar en testing.
  onLoadPilas: null,

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, this.initElement);
  },

  initElement() {
    let iframeElement = this.$().find('#innerIframe')[0];

    this.set("iframeElement", iframeElement);

    this.get("iframeElement").onload = () => {

      if (this.get('pilas')) {
        this.get("pilas").onLoadIframe(iframeElement);
      }

      // onLoad solo se utiliza dentro de la batería de tests. Este
      // componente se tendría que usar mediante el servicio "pilas"
      // en cualquier otro lugar.
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
        alert("Ha cargado el código y está todo listo!");
        this.get("iframeElement").contentWindow.eval(code);
      });
    },
    clear() {
      this.reloadIframe();
    }
  }

});
