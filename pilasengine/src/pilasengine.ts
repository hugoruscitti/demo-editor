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
  estados: Estados;
  historial_estados: Historial;
  pausa_habilitada: boolean = false;
  sprites: SpriteCache[] = [];
  scripts: any;
  actores: Actores;
  opciones: OpcionesIniciar;
  fondos: Fondos;
  utils: Utils;
  imagenes: Imagenes;
  depurador: Depurador;
  interpolaciones: Interpolaciones;
  escenas: Escenas;

  evento_inicia: any;
  _cuando_inicia_callback: any;
  ancho: number;
  alto: number;
  mouse: {x: number, y: number};

  codigos: any;
  id_elemento_html: string;

  constructor(id_elemento_html: string, opciones: OpcionesIniciar) {

    this.mouse = {x: 0, y: 0};
    this.utils = new Utils(this);

    let options = {
      preload: this.preload.bind(this),
      create: this.create.bind(this),
      update: this.actualizar.bind(this),
      render: this.render.bind(this)
    };

    this._verificar_correctitud_de_id_elemento_html(id_elemento_html);

    this.id_elemento_html = id_elemento_html;
    this.ocultar_canvas();

    if (!__ha_mostrado_version) {
      console.log(`%cpilasengine.js v${VERSION} | http://www.pilas-engine.com.ar`, "color: blue");
      __ha_mostrado_version = true;
    }

    this.codigos = {};
    this.opciones = opciones;
    this.ancho = opciones.ancho || 640;
    this.alto = opciones.alto || 480;
    this.game = new Phaser.Game(this.ancho, this.alto, Phaser.CANVAS, id_elemento_html, options);
    this.game.antialias = false;

    this.escenas = new Escenas(this);
    this.escenas.Normal();

    this.interpolaciones = new Interpolaciones(this);

    this.historial_estados = new Historial(this);
    this.estados = new Estados(this);

    this.load_scripts();
    this.actores = new Actores(this);
    this.fondos = new Fondos(this);
    this.imagenes = new Imagenes(this);
    this.depurador = new Depurador(this);

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
    if (this.pausa_habilitada) {
      console.warn("El modo pausa ya estába habilitado.");
    }

    this.pausa_habilitada = true;
  }

  continuar() {
    if (!this.pausa_habilitada) {
      console.warn("El modo pausa no estába habilitado.");
    }

    this.pausa_habilitada = false;
    this.historial_estados.reset();
  }

  alternar_pausa() {
    if (this.pausa_habilitada) {
      this.continuar();
    } else {
      this.pausar();
    }
  }

  terminar() {

  }

  /**
   * Realiza una actualización de la lógica del videojuego.
   */
  private actualizar() {

    if (!this.pausa_habilitada) {
      this.estados.actualizar(this.pausa_habilitada);
      this.mouse.x = this.game.input.x;
      this.mouse.y = this.game.input.y;
      this.interpolaciones.actualizar();
    }

  }

  render() {
    this.depurador.realizar_dibujado();
  }

  private add_sprite(sprite: Phaser.Sprite) {
    let id = this._crear_id();

    this.sprites.push({id: id, sprite: sprite});

    return id;
  }

  private _crear_id() {
    return (0 | Math.random() * 9e6).toString(36);
  }

  private _obtener_sprite_por_id(id: string) {

    for (let i = 0; i < this.sprites.length; i++) {
      let element = this.sprites[i];

      if (element.id === id) {
        return element.sprite;
      }
    }

    throw new Error("No se encuentra el sprite con el ID " + id);
  }

  private aplicar_script(entity: Entity, script_name: string, script_data: any) {
    this.obtener_script_por_nombre(script_name)(entity, script_data);
  }

  private obtener_script_por_nombre(script_name: string) {
    return this.scripts[script_name];
  }

  listar_actores() {
    return this.estados.data.entidades.map((e) => {
      return {tipo: "actor", id: e.id};
    });
  }

  obtener_actor(id: string) {
    let entidad = this.estados.data.entidades[id];

    if (!entidad) {
      throw new Error(`Lo siento, no existe actor con el ID=${id}`);
    }

    return new ActorProxy(this, entidad);
  }

  obtener_actores() {
    return this.estados.data.entidades.map((e) => {
      return new ActorProxy(this, e.id);
    });
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
