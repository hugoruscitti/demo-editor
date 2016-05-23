import Ember from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Ember.Component.extend(InboundActions, {
  classNames: ['x-canvas'],
  innerWindow: null,
  onLoad: null, // solo para usar en testing.
  onLoadPilas: null,
  width: 600,
  height: 600,

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, this.initElement);
  },

  initElement() {
    let iframeElement = this.$().find('#innerIframe')[0];

    this.set("iframeElement", iframeElement);

    this.get("iframeElement").onload = () => {

      if (this.get('pilas')) {
        let width = this.get("width");
        let height = this.get("height");

        this.get("pilas").instantiatePilas(iframeElement, {width, height}).
          then((pilas) => {

            /*
             * Invoca a la acción "onReady" que envía el objeto pilas listo
             * para ser utilizado.
             *
             */
            if (this.get('onReady')) {
              this.sendAction("onReady", pilas);
            } else {
              console.warn("Se a iniciado el componente x-canvas sin referencia a la acción onLoad.");
            }
          });
      } else {
        console.warn("Se a iniciado el componente x-canvas sin referencia a pilas.");
      }

      // onLoad solo se utiliza dentro de la batería de tests. Este
      // componente se tendría que usar mediante el servicio "pilas"
      // en cualquier otro lugar.
      this.sendAction('onLoad', {iframeElement});

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
