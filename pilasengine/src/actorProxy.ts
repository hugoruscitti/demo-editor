
class ActorProxy {
  id: string;
  pilas: Pilas;

  constructor(pilas: Pilas, id: string) {
    this.pilas = pilas;
    this.id = id;
  }

  public set x(value: number) {
    this.data.x = value;
  }

  public set y(value: number) {
    this.data.y = value;
  }

  public get data() {
    return this.pilas.estados.obtener_entidad_por_id(this.id);
  }

}
