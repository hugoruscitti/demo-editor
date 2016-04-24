class Actores {
  pilas: Pilas;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
    this._vincular_métodos_de_creación();
  }

  protected _vincular_métodos_de_creación() {
    this.vincular(Actor);
  }

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


    // Si el nombre de la clase es camelcase, también permite
    // crear el actor usando solamente minúsculas.
    if (clase.name !== clase.name.toLocaleLowerCase()) {
      this[clase.name.toLocaleLowerCase()] = this[clase.name];
    }

  }

}
