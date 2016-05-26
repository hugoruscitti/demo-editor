import Ember from 'ember';

export default Ember.Service.extend({
  iframe: null,
  actorCounter: 0,
  pilas: null,
  loading: true,

  width: null,
  height: null,

  temporallyCallback: null, /* almacena el callback para avisar si pilas
                               se reinició correctamente. */

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
    this.set("loading", true);

    return new Ember.RSVP.Promise((success) => {
      let width = this.get("width") || options.width;
      let height = this.get("height") || options.height;

      let pilas = iframeElement.contentWindow.eval(`
        var opciones = {ancho: ${width}, alto: ${height}};

        pilasengine.iniciar('canvas', opciones);
      `);

      pilas.cuando("inicia", () => {
        this._vincular_propiedades(pilas);
        success(pilas);

        /*
         * Si el usuario llamó a "reload" desde este servicio, tendría
         * que existir una promesa en curso, así que estas lineas se
         * encargan de satisfacer esa promesa llamando al callback success.
         */
        if (this.get("temporallyCallback")) {
          this.get("temporallyCallback")(pilas);
          this.set("temporallyCallback", null);
        }

        this.set("loading", false);
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
   *
   * Este método retorna una promesa, que se cumple cuando pilas se
   * halla cargado completamente.
   */
  reload() {
    return new Ember.RSVP.Promise((success) => {
      if (this.get("loading")) {
        console.warn("Cuidado, se está reiniciando en medio de la carga.");
      }

      this.set("loading", true);
      this.get("iframe").contentWindow.location.reload(true);

      this.set("temporallyCallback", success); /* Guarda el callback  para
                                                * que se llame luego de
                                                * la carga de pilas.
                                                */
    });
  }
});
