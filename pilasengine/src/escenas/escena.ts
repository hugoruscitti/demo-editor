/**
 * Clase abstracta que representa una escena dentro del juego.
 */
class Escena {
  pilas: Pilas;
  interpolaciones: Interpolaciones;
  actores: any[] = [];

  constructor(pilas: Pilas) {
    this.pilas = pilas;
    this.interpolaciones = new Interpolaciones(this.pilas);
  }

  /* TODO: Reemplazar por un grupo, o algo que simplifique el
           acceso y la gestión de los actores.  */
  agregar_actor(actor: any) {
    this.actores.push(actor);

    function funcion_filtro(unActor: Actor) {
        return unActor.id !== actor.id;
    };

    this.actores = this.actores.filter(funcion_filtro);

  }

  eliminar_actor(actor: any) {
    this.actores.push(actor);
  }


  private _actualizar_actores() {
    this.actores.forEach((e) => {
      e.pre_actualizar();
      e.actualizar();
      e.post_actualizar();
    });
  }

  /**
   * Carga el código inicial para la escena.
   *
   * Este método se invoca por el gestor de escenas una vez
   * que la escena se activa y pasa a ser la escena_actual de pilas.
   */
  iniciar() {

  }

  /**
   * Se invoca seis veces por segundo para mantener en funcionamiento el juego.
   */
  actualizar() {
    this._actualizar_actores();
    this.interpolaciones.actualizar();
  }
}
