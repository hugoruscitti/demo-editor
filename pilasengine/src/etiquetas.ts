class Etiquetas {
  listado_de_etiquetas: String[];

  constructor() {
    this.listado_de_etiquetas = [];
  }

  agregar(etiqueta: String) {
    this.listado_de_etiquetas.push(etiqueta.toLowerCase());
  }

  tiene_etiqueta(etiqueta: String) {
    return (this.listado_de_etiquetas.indexOf(etiqueta.toLowerCase()) > -1);
  }

  obtener_como_lista() {
    return this.listado_de_etiquetas;
  }

  obtener_cantidad() {
    return this.listado_de_etiquetas.length;
  }

}
