import Ember from 'ember';

export default Ember.Service.extend({
  iframe: null,
  actorCounter: 0,
  pilas: null,

  onLoadIframe(iframe) {
    console.log("onLoadIframe");
    this.set("iframe", iframe);

    //debugger;
    //this.get("iframeElement").onload = onLoadFunction;
    //this.get("iframeElement").contentWindow.location.reload(true);

    let pilas = iframe.contentWindow.eval(`
      var opciones = {ancho: 300, alto: 300};

      pilasengine.iniciar('canvas', opciones);
    `);

    pilas.cuando("inicia", () => {
      console.log("Reiniciando el objeto pilas");
      this.onLoadPilas(pilas);
      this.set('pilas', pilas);

      this.set('actorCounter', pilas.obtener_cantidad_de_actores());

      pilas.eventos.cambia_coleccion_de_actores.add((data) => {
        this.set('actorCounter', data.cantidad);
      });
    });



  },

  onLoadPilas(pilas) {
    console.log("ha cargado pilas", pilas);
  },

  reload(iframe) {
    console.log(iframe);
    this.get("iframe").contentWindow.location.reload(true);
  }

});
