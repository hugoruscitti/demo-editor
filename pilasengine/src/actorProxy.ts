
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

  set escala_x(value: number) {
    this.data.escala_x = value;
  }

  get escala_y() {
    return this.data.escala_y;
  }

  set escala_y(value: number) {
    this.data.escala_y = value;
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
