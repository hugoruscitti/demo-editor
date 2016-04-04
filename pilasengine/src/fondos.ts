class Fondos {
  pilas: Pilas;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
  }

  plano(x: number = 0, y: number = 0) {
    return this.pilas.crear_entidad("spriteTiled", {
      imagen: "data:plano.png",
      x: x,
      y: y,
    });
  }
}
