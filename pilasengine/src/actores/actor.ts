
class Actor {
  x: number = 0;
  y: number = 0;
  _imagen: any = null;
  _sprite: any = null;
  pilas: Pilas = null;
  rotacion: number = 0;
  anchor_x: number = 0.5;
  anchor_y: number = 0.5;
  escala_x: number = 1;
  escala_y: number = 1;
  id: number = 0;

  constructor(pilas: Pilas) {
    this.id = this.generar_id();
    this.pilas = pilas;
    this.imagen = "data:sin_imagen.png";
    this.pre_actualizar();
  }

  /**
   * Retorna un identificador aleatorio para el Actor.
   */
  private generar_id() {
    return Math.round(Math.random() * 100000 + 100000);
  }

  iniciar(opciones: any) {

  }

  set imagen(valor: string) {
    this._imagen = valor;

    let items = valor.split(":");
    let galeria = items[0];
    let img = items[1];

    if (this._sprite) {
      this._cambiar_imagen_de_sprite_interno(galeria, img);
    } else {
      this._crear_sprite_interno(galeria, img);
    }

    this._actualizar_propiedades();
  }

  protected _cambiar_imagen_de_sprite_interno(galeria: string, imagen: string) {
    if (galeria) {
      this._sprite.loadTexture(galeria, imagen);
    } else {
      this._sprite.loadTexture(imagen);
    }
  }

  protected _crear_sprite_interno(galeria: string, imagen: string) {
    if (galeria) {
      this._sprite = this.pilas.game.add.sprite(0, 0, galeria, imagen);
    } else {
      this._sprite = this.pilas.game.add.sprite(0, 0, imagen);
    }
  }

  pre_actualizar() {
    this._actualizar_propiedades();
  }

  private _actualizar_propiedades() {

    if (this._sprite) {
      let dx = this.pilas.opciones.ancho / 2;
      let dy = this.pilas.opciones.alto / 2;

      this._sprite.position.set(dx + this.x, dy - this.y);
      this._sprite.scale.set(this.escala_x, this.escala_y);
      this._sprite.anchor.setTo(this.anchor_x, this.anchor_y);
      this._sprite.angle = -this.rotacion;
    }

  }

  actualizar() {

  }

  post_actualizar() {

  }
}
