class Fondos {
  pilas: Pilas;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
  }

  Plano(x: number = 0, y: number = 0) {
    return this.pilas.escenas.escena_actual.estados.crear_entidad("spriteTiled", {
      imagen: "fondos/plano",
      x: 3
    });
  }
}
