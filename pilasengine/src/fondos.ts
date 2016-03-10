class Fondos {
  pilas: Pilas;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
  }

  Plano(x: number = 0, y: number = 0) {
    return this.pilas.estados.crear_entidad("spriteTiled", {
      imagen: "fondos/plano",
      x: 3
    });
  }
}
