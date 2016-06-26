import Ember from 'ember';

export default Ember.Controller.extend({
  pilas: Ember.inject.service(),

  actions: {

    onReady(pilas) {
      console.log("LOAD!");
      window.pilas = pilas;
      window.pilasService = this.get("pilas");


      console.log("Listado de imagenes", pilas.imagenes.obtener_como_lista());


      /**
       * Obtiene un listado de todas las imágenes asociadas a una clave del
       * cache.
       */
      function _obtener_nombres_de_frames_individuales(clave_de_cache) {
        let clave = clave_de_cache[0];
        let frames = clave_de_cache[1];

        if (frames.total === 1) {
          return [clave];
        } else {

          return frames.getFrames().map(function obtener_nombre_con_prefijo(f) {
            return `${clave}:${f.name}`;
          });

        }

      }

      /**
       * Obtiene una lista de todas las imágenes de un cache
       * de phaser.
       *
       * El resultado tendrá los identificadores de cada uno de los
       * frames, tanto de las imágenes individuales como de los
       * frames internos a spritesheets. Por ejemplo:
       *
       *   > obtener_listado_de_imagenes(pilas.game.cache)
       *   ['aceituna', 'data:actor.png', 'data:sin_imagen.png']
       */
      function obtener_listado_de_imagenes(cache) {
        let listado_de_imagenes = [];
        let claves = cache.getKeys();
        let claves_con_contenido = claves.map((clave) => {
          return [clave, cache.getFrameData(clave)];
        });

        listado_de_imagenes = claves_con_contenido.map(_obtener_nombres_de_frames_individuales);

        listado_de_imagenes = listado_de_imagenes.reduce((a, b) => {
          return a.concat(b);
        });

        return listado_de_imagenes;
      }


      console.log(obtener_listado_de_imagenes(pilas.game.cache));

    },

  }
});
