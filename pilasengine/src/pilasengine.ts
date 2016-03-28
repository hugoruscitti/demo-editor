/// <reference path="../libs/pixi.d.ts"/>
/// <reference path="../libs/p2.d.ts"/>
/// <reference path="../libs/phaser.d.ts"/>
/// <reference path="entidad.ts" />
/// <reference path="actores.ts" />
/// <reference path="fondos.ts" />
/// <reference path="historial.ts" />
/// <reference path="actorProxy.ts" />
/// <reference path="tipos.ts" />

let timer = 0;
let __ha_mostrado_version = false;

class Pilas {
  game: Phaser.Game;

  /* Submódulos */
  actores: Actores;
  opciones: OpcionesIniciar;
  fondos: Fondos;
  utils: Utils;
  imagenes: Imagenes;
  depurador: Depurador;
  escenas: Escenas;

  evento_inicia: any;
  _cuando_inicia_callback: any;

  codigos: any;
  id_elemento_html: string;
  //scripts: any;

  constructor(id_elemento_html: string, opciones: OpcionesIniciar) {

    this._verificar_correctitud_de_id_elemento_html(id_elemento_html);
    this.id_elemento_html = id_elemento_html;
    this.ocultar_canvas();

    this.utils = new Utils(this);



    if (!__ha_mostrado_version) {
      console.log(`%cpilasengine.js v${VERSION} | http://www.pilas-engine.com.ar`, "color: blue");
      __ha_mostrado_version = true;
    }

    this.codigos = {};
    this.opciones = opciones;

    let options = {
      preload: this.preload.bind(this),
      create: this.create.bind(this),
      update: this.actualizar.bind(this),
      render: this.render.bind(this)
    };

    let ancho = opciones.ancho || 640;
    let alto = opciones.alto || 480;
    this.game = new Phaser.Game(ancho, alto, Phaser.CANVAS, id_elemento_html, options);


    //this.load_scripts();
    this.actores = new Actores(this);
    this.fondos = new Fondos(this);
    this.imagenes = new Imagenes(this);
    this.depurador = new Depurador(this);

    this.escenas = new Escenas(this);
    this.escenas.normal();

    this.evento_inicia = document.createEvent("Event");
  }

  public mostrar_cuadros_por_segundo(estado: boolean) {

    if (estado) {
      this.depurador.activar_modo("fps");
    } else {
      this.depurador.desactivar_modo("fps");
    }

    this.game.time.advancedTiming = estado;
  }

  private _verificar_correctitud_de_id_elemento_html(id_elemento_html: string) {
    if (!id_elemento_html) {
      throw Error(`Tienes que especificar el ID del tag a usar. Algo como pilasengine.iniciar('idElemento')`);
    }

    if (!document.getElementById(id_elemento_html)) {
      throw Error(`No se encuentra el elemento con ID: ${id_elemento_html}`);
    }

    if (document.getElementById(id_elemento_html).tagName !== "DIV") {
      throw Error(`El elemento ID: ${id_elemento_html} tiene que ser un tag DIV.`);
    }
  }

  cuando(nombre_evento: string, callback: CallBackEvento) {
    if (nombre_evento === "inicia") {
      this._cuando_inicia_callback = callback;

      window.addEventListener("evento_inicia", () => {
        callback();
      });

    } else {
      alert(`El evento ${nombre_evento} no está soportado.`);
    }
  }

  /**
   * Elimina todo objeto de la escena y vuelve a cargar la escena normal.
   */
  reiniciar() {
    this.escenas.normal();
  }



  /*
  private load_scripts() {
    this.scripts = {
      rotate: function(entity: Entity, data: any) {
        entity.rotation += data.speed;
      },

      move: function(entity: Entity, data: any) {
        entity.x += data.dx;
        entity.y += data.dy;
      }
    };
  }
  */

  /**
   * Concatena dos rutas de manera similar a la función os.path.join
   */
  ejecutar() {
    if (this.opciones.en_test) {
      this._cuando_inicia_callback.call(this);
    }
  }

  /**
   * Muestra el contenedor que contiene al juego.
   */
  private mostrar_canvas() {
    document.getElementById(this.id_elemento_html).style.opacity = "1";
  }

  /**
   * Oculta el contenedor que contiene al juego.
   */
  private ocultar_canvas() {
    document.getElementById(this.id_elemento_html).style.opacity = "0";
  }

  preload() {
    this.game.stage.disableVisibilityChange = true;
    this.imagenes.precargar_imagenes_estandar();
    this.mostrar_cuadros_por_segundo(true);

    if (this.opciones.escalar) {
      this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
      //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.refresh();

      function gameResized(manager: Phaser.ScaleManager, bounds: Phaser.Rectangle) {
          var scale = Math.min(window.innerWidth / this.game.width, window.innerHeight / this.game.height);
          manager.setUserScale(scale, scale, 0, 0);
      }

      this.game.scale.setResizeCallback(gameResized, this);
    }

  }

  create() {
    this.mostrar_canvas();
    window.dispatchEvent(new CustomEvent("evento_inicia"));
  }

  pausar() {
    this.escenas.pausar();
  }

  continuar() {
    this.escenas.continuar();
  }

  alternar_pausa() {
    this.escenas.alternar_pausa();
  }

  terminar() {

  }

  /**
   * Realiza una actualización de la lógica del videojuego.
   */
  private actualizar() {
    this.escenas.actualizar();
  }

  render() {
    this.depurador.realizar_dibujado();
  }


/*
  private aplicar_script(entity: Entity, script_name: string, script_data: any) {
    this.obtener_script_por_nombre(script_name)(entity, script_data);
  }

*/

/*
  private obtener_script_por_nombre(script_name: string) {
    return this.scripts[script_name];
  }
  */

  listar_actores() {
    return this.escenas.escena_actual.estados.data.entidades.map((e:any) => {
      return {tipo: "actor", id: e.id};
    });
  }

  obtener_actor(id: string) {
    let entidad = this.escenas.escena_actual.estados.data.entidades[id];

    if (!entidad) {
      throw new Error(`Lo siento, no existe actor con el ID=${id}`);
    }

    return new ActorProxy(this, entidad);
  }

  obtener_actores() {
    return this.escenas.escena_actual.estados.data.entidades.map((e:any) => {
      return new ActorProxy(this, e.id);
    });
  }

  /**
   * Retorna la cantidad de actores en pantalla (incluyendo al fondo).
   */
  obtener_cantidad_de_actores() {
    return this.obtener_actores().length;
  }

}

/**
 * Representa el espacio de nombres para acceder a todos los componentes
 * de pilasengine.
 */
let pilasengine = {

  /**
   * Inicializa la biblioteca completa dentro de un contenedor DIV.
   *
   * @example
   *     var pilas = pilasengine.iniciar("id_del_contenedor");
   *
   * @param {OpcionesIniciar} las opciones de inicialización.
   * @return {Game} el objeto instanciado que representa el contexto del juego.
   * @api public
   */
  iniciar: function(element_id: string, opciones: OpcionesIniciar = {data_path: "data", ancho: null, alto: null, escalar: true, en_test: false}) {
    opciones.data_path = opciones["data_path"] || "data";
    opciones.en_test = opciones["en_test"] || false;

    if (opciones["escalar"] === undefined) {
      opciones.escalar = true;
    }

    return new Pilas(element_id, opciones);
  }
};
