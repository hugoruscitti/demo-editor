class Estados {
  pilas: Pilas;
  data: Estado;
  cache: any;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
    this.data = {entidades: []};
    this.cache = {};
  }

  actualizar() {
    this.data.entidades.forEach((entidad: any) => {

      switch (entidad.tipo) {
        case "spriteTiled":
          this.actualizar_entidad_tipo_sprite_tiled(entidad);
        break;

        case "sprite":
          this.actualizar_entidad_tipo_sprite(entidad);
        break;

        default:
          throw new Error(`No existe un manejador de entidad para el tipo: ${entidad.tipo}`);
      }

      if (entidad.instancia) {
        entidad.instancia.actualizar();
      }

    });
  }

  private actualizar_entidad_tipo_sprite_tiled(entidad: any) {
    let sprite = this.obtener_sprite_tiled(entidad.id, entidad.imagen);
    this.actualizar_sprite_desde_entidad(sprite, entidad);
  }

  private actualizar_entidad_tipo_sprite(entidad: any) {
    let sprite = this.obtener_sprite(entidad.id, entidad.imagen);
    this.actualizar_sprite_desde_entidad(sprite, entidad);
  }

  private actualizar_sprite_desde_entidad(sprite: any, entidad: any) {
    let dx = this.pilas.opciones.ancho / 2;
    let dy = this.pilas.opciones.alto / 2;

    sprite.position.set(dx + entidad.x, dy - entidad.y);
    sprite.scale.set(entidad.escala_x, entidad.escala_y);
    sprite.anchor.setTo(entidad.anchor_x, entidad.anchor_y);
    sprite.angle = -entidad.rotacion;
  }

  private obtener_sprite_tiled(id: string, imagen: string) {
    if (this.cache[id]) {
      return this.cache[id];
    } else {

      if (imagen.indexOf(":") > 0) {
        var items = imagen.split(":");
        var galeria = items[0];
        var imagen = items[1];

        this.cache[id] = this.pilas.game.add.tileSprite(0, 0, this.pilas.opciones.ancho, this.pilas.opciones.alto, galeria, imagen);
      } else {
        this.cache[id] = this.pilas.game.add.tileSprite(0, 0, this.pilas.opciones.ancho, this.pilas.opciones.alto, imagen);
      }

      return this.cache[id];
    }
  }

  private obtener_sprite(id: string, imagen: string) {
    if (this.cache[id]) {
      return this.cache[id];
    } else {

      if (imagen.indexOf(":") > 0) {
        var items = imagen.split(":");
        var galeria = items[0];
        var imagen = items[1];
        this.cache[id] = this.pilas.game.add.sprite(0, 0, galeria, imagen);
      } else {
        this.cache[id] = this.pilas.game.add.sprite(0, 0, imagen);
      }

      return this.cache[id];
    }
  }


  obtener_entidad_por_id(id: string): any {
    var entidad_buscada: any = null;

    this.data.entidades.forEach((e) => {
      if (e.id === id) {
        entidad_buscada = e;
      }
    });

    return entidad_buscada;
  }


  crear_entidad(tipo: string, entidad: any) {
    var iniciales = {
      tipo: tipo,
      id: Math.ceil(Math.random() * 1000000000000),
      x: 0,
      y: 0,
      tiled: true,
      escala_x: 1,
      escala_y: 1,
      rotacion: 0,
      anchor_x: 0.5,
      anchor_y: 0.5,
      scripts: {
      }
    };

    for (var i in iniciales) {
      if (entidad[i] != "undefined") {
        entidad[i] = iniciales[i];
      }
    }

    this.data.entidades.push(entidad);
    return new ActorProxy(this.pilas, entidad.id);
  }
}
