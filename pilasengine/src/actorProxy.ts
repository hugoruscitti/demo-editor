
class ActorProxy {
  id: number;
  pilas: Pilas;

  constructor(pilas: Pilas, id:number) {
    this.id = id;
    this.pilas = pilas;
  }

  public set x(value: number) {
    this.data.x = value;
  }

  public set y(value: number) {
    this.data.y = value;
  }

  public get data() {
    return this.pilas.obtener_entidad_por_id(this.id);
  }

}
