import Ember from 'ember';

export default Ember.Service.extend({
  iframe: null,
  actorCounter: 0,
  pilas: null,

  width: 300,
  height: 300,

  /*
   * Instancia pilas-engine con los atributos que le envíe
   * el componente x-canvas.
   *
   * Este método realiza una conexión con el servicio pilas, y
   * se llamará automáticamente ante dos eventos: se agrega el
   * componente x-canvas a un template o se ha llamado a `reload`
   * en el servicio pilas.
   */
  instantiatePilas(iframeElement, options) {
    this.set("iframe", iframeElement);

    return new Ember.RSVP.Promise((success) => {
      let width = options.width;
      let height = options.height;

      let pilas = iframeElement.contentWindow.eval(`
        var opciones = {ancho: ${width}, alto: ${height}};

        pilasengine.iniciar('canvas', opciones);
      `);

      pilas.cuando("inicia", () => {
        this._vincular_propiedades(pilas);
        success(pilas);
      });

    });
  },

  /**
   * Método privado que se encarga de vincular todas las propiedades
   * que nos permiten observar el comportamiento de pilas.
   */
  _vincular_propiedades(pilas) {
    this.set('actorCounter', pilas.obtener_cantidad_de_actores());

    pilas.eventos.cambia_coleccion_de_actores.add((data) => {
      this.set('actorCounter', data.cantidad);
    });
  },

  /**
   * Permite reiniciar pilas por completo.
   *
   * La acción de reinicio se realiza re-cargando el iframe
   * que contiene a pilas, así que se va a volver a llamar al
   * método `instantiatePilas` automáticamente.
   */
  reload() {
    this.get("iframe").contentWindow.location.reload(true);
  }

});
