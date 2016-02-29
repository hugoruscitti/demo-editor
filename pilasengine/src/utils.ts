class Utils {
  pilas: Pilas;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
  }

  /**
   * Concatena dos rutas de manera similar a la función ``os.path.join`` de python.
   */
  join(a: string, b: string) {
    var path = [a, b].map(function (i) {
      return i.replace(/(^\/|\/$)/, "");
    }).join("/");

    return path;
  }

}
