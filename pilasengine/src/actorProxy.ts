class ActorProxy {
  id: string;
  pilas: Pilas;

  constructor(pilas: Pilas, id: string) {
    this.pilas = pilas;
    this.id = id;
  }

  interpolar(propiedad: string, valor: any, duracion: number = 0.5, tipo: string = "desaceleracion_gradual", infinito: boolean = false) {

    if (!duracion) {
      duracion = 500.0;
    }

    if (!tipo) {
      tipo = "desaceleracion_gradual";
    }

    if (infinito == undefined) {
      infinito = false;
    }

    this.pilas.escenas.escena_actual.interpolaciones.crear_interpolacion(this, propiedad, valor, duracion, tipo, infinito);
  }

  get x() {
    return this.data.x;
  }

  set x(value: number) {
    this.setData('x', value);
  }

  get y() {
    return this.data.y;
  }

  set y(value: number) {
    this.setData('y', value);
  }

  get escala_x() {
    return this.data.escala_x;
  }

  set escala_x(value: any) {
    this.setData('escala_x', value);
  }

  get escala_y() {
    return this.data.escala_y;
  }

  set escala_y(value: number) {
    this.setData('escala_y', value);
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
    this.setData('rotacion', value);
  }

  setData(property: string, value: any) {
    if (value instanceof Array) {
      this.interpolar(property, value)
    } else {
      this.data[property] = value;
    }
  }

  private get data() {
    return this.pilas.escenas.escena_actual.estados.obtener_entidad_por_id(this.id);
  }

  imprimir() {
    return `<Actor ${this.data.clase} en (${this.x}, ${this.y})>`;
  }

}
