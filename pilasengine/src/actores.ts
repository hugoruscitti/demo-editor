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
  Actor(x: number= 0, y: number= 0) {
    let entity = {
      id: 12,
      nombre: "sin_imagen",
      imagen: "sin_imagen",
      x: x,
      y: y,
      scale_x: 1,
      scale_y: 1,
      rotation: 0,
      anchor_x: 0.5,
      anchor_y: 0.5,
      scripts: {
        rotate: {
          speed: 0.5,
        }
      }
    };

    entity.id = Math.ceil(Math.random() * 1000000000000);

    //this.game.estados.entidades.push(entity);
    return entity;
  }

  patito(x:number=0, y:number=0) {
    return this.pilas.estados.crear_entidad("sprite", {
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

  crear(diccionario: any) {
    let entidad: any = {
      id: Math.ceil(Math.random() * 1000000000000),
      nombre: diccionario.nombre || "",
      imagen: diccionario.imagen || "sin_imagen",
      x: diccionario.x || 100,
      y: diccionario.y || 100,
      scale_x: 1,
      scale_y: 1,
      rotation: 0,
      anchor_x: 0.5,
      anchor_y: 0.5,
      scripts: {
      }
    };

    entidad.contador = diccionario.contador;

    this.pilas.codigos[entidad.nombre] = {
      actualizar: diccionario.actualizar || function () {},
    };

    if (entidad.nombre === "") {
      console.error("Tienes que especificar le nombre de la entidad.", entidad);
      throw new Error("Tienes que especificar le nombre de la entidad.");
    }

    //this.game.estados.entidades.push(entidad);
    return entidad;
  }

}
