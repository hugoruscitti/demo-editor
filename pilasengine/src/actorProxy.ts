
class ActorProxy {
  id: string;
  pilas: Pilas;

  constructor(pilas: Pilas, id: string) {
    this.pilas = pilas;
    this.id = id;
  }

  get x() {
    return this.data.x;
  }

  set x(value: number) {
    this.data.x = value;
  }

  get y() {
    return this.data.y;
  }

  set y(value: number) {
    this.data.y = value;
  }

  get escala_x() {
    return this.data.escala_x;
  }

  set escala_x(value: any) {
    this.setData('escala_x', value);
  }

  setData(property: string, value: any) {

    console.log(value);
    if (value instanceof Array) {
      console.log("Es array", value[0]);
      this.pilas.game.add.tween(this).to({ property: value[0] }, 500, Phaser.Easing.Elastic.Out, true);
    } else {
      this.data[property] = value;
    }

  }

  get escala_y() {
    return this.data.escala_y;
  }

  set escala_y(value: number) {
    this.data.escala_y = value;
  }

  set escala(value: number) {
    this.escala_x = value;
    this.escala_y = value;
  }

  get escala() {
    if (this.escala_x != this.escala_y) {
      console.warn("Los valores de escala_x y escala_y son diferentes, se asume que la escala conjunta es la mayor.");
    }

    return Math.max(this.escala_x, this.escala_y);
  }

  get rotacion() {
    return this.data.rotacion;
  }

  set rotacion(value: number) {
    this.data.rotacion = value;
  }

  private get data() {
    return this.pilas.estados.obtener_entidad_por_id(this.id);
  }

  imprimir() {
    return `<Actor ${this.data.clase} en (${this.x}, ${this.y})>`;
  }

}
