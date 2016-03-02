class Estados {
  pilas: Pilas;
  data: Estado;
  cache: any;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
    this.data = {entidades: []};
    this.cache = {};
  }

  actualizar(pausa_habilitada: boolean) {
    this.data.entidades.forEach((entidad: any) => {

      switch (entidad.tipo) {
        case "spriteTiled":
          var sprite = this.obtener_sprite_tiled(entidad.id, entidad.imagen);
        break;

        case "sprite":
          this.actualizar_entidad_tipo_sprite(entidad);
        break;

        default:
          throw new Error(`No existe un manejador de entidad para el tipo: ${entidad.tipo}`);
      }

    });
  }

  private actualizar_entidad_tipo_sprite(entidad: any) {
    var sprite = this.obtener_sprite(entidad.id, entidad.imagen);

    sprite.position.set(entidad.x, entidad.y);
    sprite.scale.set(entidad.escala_x, entidad.escala_y);
    sprite.anchor.setTo(entidad.anchor_x, entidad.anchor_y);
    sprite.angle = -entidad.rotacion;

  }

  private obtener_sprite_tiled(id: string, imagen: string) {
    if (this.cache[id]) {
      return this.cache[id];
    } else {
      this.cache[id] = this.pilas.game.add.tileSprite(0, 0, this.pilas.ancho, this.pilas.alto, imagen);
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



    /*

      this.estados.entidades.forEach((entity: any) => {
        let sprite: any = null;

        if (entity.sprite_id) {
          sprite = this._obtener_sprite_por_id(entity.sprite_id);

          sprite.position.set(entity.x, entity.y);
          sprite.scale.set(entity.scale_x, entity.scale_y);
          sprite.anchor.setTo(entity.anchor_x, entity.anchor_y);
          sprite.angle = -entity.rotation;
        } else {

          if (entity["tiled"]) {
            sprite = this.game.add.tileSprite(entity.x, entity.y, this.ancho * 2, this.alto * 2, entity.imagen);
          } else {
            console.log(entity);
            console.log(entity.imagen);

            if (entity.imagen.indexOf(":") > 0) {
              var items = entity.imagen.split(":");
              var galeria = items[0];
              var imagen = items[1];
              sprite = this.game.add.sprite(entity.x, entity.y, galeria, imagen);
            } else {
              sprite = this.game.add.sprite(entity.x, entity.y, entity.imagen);
            }
          }

          var sprite_id = this.add_sprite(sprite);

          entity.sprite_id = sprite_id;

          sprite.position.set(entity.x, entity.y);
          sprite.scale.set(entity.scale_x, entity.scale_y);
          sprite.anchor.setTo(entity.anchor_x, entity.anchor_y);
          sprite.angle = -entity.rotation;
        }

        if (!pause_enabled) {

          if (this.codigos[entity.nombre]) {
            try {
              this.codigos[entity.nombre].actualizar.call(entity);
            } catch (e) {
              console.warn("Hay un error en pilas, así que se activó la pausa. Usá la sentencia 'pilas.unpause()' luego de reparar el error.");
              console.error(e);
              this.pausar();
            }
          }

          // Actualiza las entidades.
          for (var name in entity.scripts) {
            this.aplicar_script(entity, name, entity.scripts[name]);
          }
        }


      });

      if (!pause_enabled) {
        this.historial_estados.save(this.estados);

        // if (timer === 0) {
        //   var data:any = JSON.stringify(this.game_state, null, "  ");
        //   document.getElementById("result").innerHTML = data;
        // }

        // timer += 1;

        // if (timer > 20) {
        //   timer = 0;
        // }

      }


    */



  crear_entidad(tipo: string, entidad: any) {
    var iniciales = {
      tipo: tipo,
      id: Math.ceil(Math.random() * 1000000000000),
      x: 0,
      y: 0,
      tiled: true,
      scale_x: 1,
      scale_y: 1,
      rotation: 0,
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
