class Actores {
  pilas: Pilas;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
    this.vincular(Actor);
  }

  /**
   * Representa a un actor genérico, con una imagen y propiedades
   * de transformación como ``x``, ``y``, ``escala_x``, ``escala_y`` etc...
   *
   * ![](../imagenes/sin_imagen.png)
   *
   * @param x - posición horizontal.
   * @param y - posición vertical.
   */
  /*
  actor(x: number= 0, y: number= 0) {
    return this.pilas.crear_entidad("sprite", {
      imagen: "data:sin_imagen.png",
      clase: 'actor'
    });
  }
  */

  /*

  patito(x:number=0, y:number=0) {
    return this.pilas.crear_entidad("sprite", {
      imagen: "data:patito.png",
      clase: 'patito'
    });
  }

  nave(x:number=0, y:number=0) {
    return this.pilas.crear_entidad("sprite", {
      imagen: "data:nave.png",
      clase: 'nave'
    });
  }
  */

  /*
  obtener_por_id(id: string) {
    return new ActorProxy(this.pilas, id);
  }

  texto(mensaje: string) {
    var style = {stroke: '#000000', strokeThickness: 4, font: "28px Arial", fill: "#fff"};
    var text = this.pilas.game.add.text(32, 64, "Hola mundo", style);
    window['text'] = text;
  }
  */

  /**
   * Permite vincular una clase para generar un actor personalizado.
   *
   * El actor puede ser cualquier tipo de clase, pero tiene que tener
   * definida una función llamada "iniciar" que espere un argumento opciones
   * (tipo diccionario).
   */
  vincular(clase: any) {

    if (!clase || !clase.name) {
      throw Error("Solo se admiten clases como parámetro.");
    }

    this[clase.name] = (opciones: any) => {

      let nuevo = new clase(this.pilas);
      this.pilas.escena_actual.agregar(nuevo);

      nuevo.iniciar(opciones);

      nuevo.pre_actualizar();
      nuevo.actualizar();
      nuevo.post_actualizar();

      return nuevo;
    };

  }

}
