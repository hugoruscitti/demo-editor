class Imagenes {
  pilas: Pilas;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
  }

  precargar_imagenes_estandar() {
    this.cargar("humo", "humo.png");
    this.cargar("sin_imagen", "sin_imagen.png");
    this.cargar("fondos/plano", "fondos/plano.png");
    this.cargar("yamcha", "yamcha.png");

    this.cargar_atlas("data", "sprites.png", "sprites.json");
  }


  private cargar(identificador: string, archivo: string) {
    let path = this.pilas.utils.join(this.pilas.opciones.data_path, archivo);
    this.pilas.game.load.image(identificador, path);
  }

  private cargar_atlas(id: string, archivo_png: string, archivo_json: string) {
    let path_png = this.pilas.utils.join(this.pilas.opciones.data_path, archivo_png);
    let path_json = this.pilas.utils.join(this.pilas.opciones.data_path, archivo_json);
    this.pilas.game.load.atlasJSONHash(id, path_png, path_json);
  }

}
