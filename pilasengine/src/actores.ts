class Actores {
  pilas: Pilas;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
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
  actor(x: number= 0, y: number= 0) {
    return this.pilas.crear_entidad("sprite", {
      imagen: "data:tortuga.png",
      clase: 'actor'
    });
  }

  patito(x:number=0, y:number=0) {
    return this.pilas.crear_entidad("sprite", {
      imagen: "data:patito.png",
      clase: 'patito'
    });
  }

  obtener_por_id(id: string) {
    return new ActorProxy(this.pilas, id);
  }

  texto(mensaje: string) {
    var style = {stroke: '#000000', strokeThickness: 4, font: "28px Arial", fill: "#fff"};
    var text = this.pilas.game.add.text(32, 64, "Hola mundo", style);
    window['text'] = text;
  }

}
