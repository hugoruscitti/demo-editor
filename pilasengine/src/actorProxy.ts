
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

  private get data() {
    return this.pilas.estados.obtener_entidad_por_id(this.id);
  }

}
