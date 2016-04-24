class Estados {
  pilas: Pilas;
  data: Estado;
  cache: any;

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

}
