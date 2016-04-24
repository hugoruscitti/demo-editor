class Fondos extends Actores {

  _vincular_métodos_de_creación() {
    this.vincular(Plano);
  }

/*
  plano(x: number = 0, y: number = 0) {
    return this.pilas.crear_entidad("spriteTiled", {
      imagen: "data:plano.png",
      x: x,
      y: y,
    });
  }
  */
}
