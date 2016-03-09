var ActorProxy = (function () {
    function ActorProxy(pilas, id) {
        this.pilas = pilas;
        this.id = id;
    }
    Object.defineProperty(ActorProxy.prototype, "x", {
        get: function () {
            return this.data.x;
        },
        set: function (value) {
            this.data.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorProxy.prototype, "y", {
        get: function () {
            return this.data.y;
        },
        set: function (value) {
            this.data.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorProxy.prototype, "escala_x", {
        get: function () {
            return this.data.escala_x;
        },
        set: function (value) {
            this.data.escala_x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorProxy.prototype, "escala_y", {
        get: function () {
            return this.data.escala_y;
        },
        set: function (value) {
            this.data.escala_y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorProxy.prototype, "rotacion", {
        get: function () {
            return this.data.rotacion;
        },
        set: function (value) {
            this.data.rotacion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorProxy.prototype, "data", {
        get: function () {
            return this.pilas.estados.obtener_entidad_por_id(this.id);
        },
        enumerable: true,
        configurable: true
    });
    ActorProxy.prototype.imprimir = function () {
        return "<Actor " + this.data.clase + " en (" + this.x + ", " + this.y + ")>";
    };
    return ActorProxy;
})();
var Actores = (function () {
    function Actores(pilas) {
        this.pilas = pilas;
    }
    /**
     * Representa a un actor genérico, con una imagen y propiedades
     * de transformación como ``x``, ``y``, ``escala_x``, ``escala_y`` etc...
     *
     * ![](../imagenes/sin_imagen.png)
     *
     * @param x - posición horizontal.
     * @param y - posición vertical.
     */
    Actores.prototype.Actor = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var entity = {
            id: 12,
            nombre: "sin_imagen",
            imagen: "sin_imagen",
            x: x,
            y: y,
            scale_x: 1,
            scale_y: 1,
            rotation: 0,
            anchor_x: 0.5,
            anchor_y: 0.5,
            scripts: {
                rotate: {
                    speed: 0.5,
                }
            }
        };
        entity.id = Math.ceil(Math.random() * 1000000000000);
        //this.game.estados.entidades.push(entity);
        return entity;
    };
    Actores.prototype.patito = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return this.pilas.estados.crear_entidad("sprite", {
            imagen: "data:patito.png",
            clase: 'patito'
        });
    };
    Actores.prototype.obtener_por_id = function (id) {
        return new ActorProxy(this.pilas, id);
    };
    Actores.prototype.texto = function (mensaje) {
        var style = { stroke: '#000000', strokeThickness: 4, font: "28px Arial", fill: "#fff" };
        var text = this.pilas.game.add.text(32, 64, "Hola mundo", style);
        window['text'] = text;
    };
    Actores.prototype.crear = function (diccionario) {
        var entidad = {
            id: Math.ceil(Math.random() * 1000000000000),
            nombre: diccionario.nombre || "",
            imagen: diccionario.imagen || "sin_imagen",
            x: diccionario.x || 100,
            y: diccionario.y || 100,
            scale_x: 1,
            scale_y: 1,
            rotation: 0,
            anchor_x: 0.5,
            anchor_y: 0.5,
            scripts: {}
        };
        entidad.contador = diccionario.contador;
        this.pilas.codigos[entidad.nombre] = {
            actualizar: diccionario.actualizar || function () { },
        };
        if (entidad.nombre === "") {
            console.error("Tienes que especificar le nombre de la entidad.", entidad);
            throw new Error("Tienes que especificar le nombre de la entidad.");
        }
        //this.game.estados.entidades.push(entidad);
        return entidad;
    };
    return Actores;
})();
var Depurador = (function () {
    function Depurador(pilas) {
        this.pilas = pilas;
        this.modos = [];
        this.modos_disponibles = {
            'fps': ModoFPS
        };
    }
    Depurador.prototype.cuando_dibuja_actor = function (actor) {
        this.modos.forEach(function (e) {
            e.cuando_dibuja_actor(actor);
        });
    };
    Depurador.prototype.realizar_dibujado = function () {
        this.modos.forEach(function (e) {
            e.realizar_dibujado();
        });
    };
    Depurador.prototype.activar_modo = function (modo) {
        var clase = this.modos_disponibles[modo];
        this.modos.push(new clase(this.pilas));
    };
    Depurador.prototype.desactivar_modo = function (modo) {
        console.error(modo);
    };
    return Depurador;
})();
var Modo = (function () {
    function Modo(pilas) {
        this.pilas = pilas;
    }
    Modo.prototype.realizar_dibujado = function () {
    };
    Modo.prototype.cuando_dibuja_actor = function (actor) {
    };
    return Modo;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ModoFPS = (function (_super) {
    __extends(ModoFPS, _super);
    function ModoFPS() {
        _super.apply(this, arguments);
    }
    ModoFPS.prototype.realizar_dibujado = function () {
        this.pilas.game.debug.text('' + this.pilas.game.time.fps, 2, 14, "#00ff00");
    };
    return ModoFPS;
})(Modo);
var Estados = (function () {
    function Estados(pilas) {
        this.pilas = pilas;
        this.data = { entidades: [] };
        this.cache = {};
    }
    Estados.prototype.actualizar = function (pausa_habilitada) {
        var _this = this;
        this.data.entidades.forEach(function (entidad) {
            switch (entidad.tipo) {
                case "spriteTiled":
                    var sprite = _this.obtener_sprite_tiled(entidad.id, entidad.imagen);
                    break;
                case "sprite":
                    _this.actualizar_entidad_tipo_sprite(entidad);
                    break;
                default:
                    throw new Error("No existe un manejador de entidad para el tipo: " + entidad.tipo);
            }
        });
    };
    Estados.prototype.actualizar_entidad_tipo_sprite = function (entidad) {
        var sprite = this.obtener_sprite(entidad.id, entidad.imagen);
        sprite.position.set(entidad.x, entidad.y);
        sprite.scale.set(entidad.escala_x, entidad.escala_y);
        sprite.anchor.setTo(entidad.anchor_x, entidad.anchor_y);
        sprite.angle = -entidad.rotacion;
    };
    Estados.prototype.obtener_sprite_tiled = function (id, imagen) {
        if (this.cache[id]) {
            return this.cache[id];
        }
        else {
            this.cache[id] = this.pilas.game.add.tileSprite(0, 0, this.pilas.ancho, this.pilas.alto, imagen);
            return this.cache[id];
        }
    };
    Estados.prototype.obtener_sprite = function (id, imagen) {
        if (this.cache[id]) {
            return this.cache[id];
        }
        else {
            if (imagen.indexOf(":") > 0) {
                var items = imagen.split(":");
                var galeria = items[0];
                var imagen = items[1];
                this.cache[id] = this.pilas.game.add.sprite(0, 0, galeria, imagen);
            }
            else {
                this.cache[id] = this.pilas.game.add.sprite(0, 0, imagen);
            }
            return this.cache[id];
        }
    };
    Estados.prototype.obtener_entidad_por_id = function (id) {
        var entidad_buscada = null;
        this.data.entidades.forEach(function (e) {
            if (e.id === id) {
                entidad_buscada = e;
            }
        });
        return entidad_buscada;
    };
    /*

      this.estados.entidades.forEach((entity: any) => {
        let sprite: any = null;

        if (entity.sprite_id) {
          sprite = this._obtener_sprite_por_id(entity.sprite_id);

          sprite.position.set(entity.x, entity.y);
          sprite.scale.set(entity.scale_x, entity.scale_y);
          sprite.anchor.setTo(entity.anchor_x, entity.anchor_y);
          sprite.angle = -entity.rotation;
        } else {

          if (entity["tiled"]) {
            sprite = this.game.add.tileSprite(entity.x, entity.y, this.ancho * 2, this.alto * 2, entity.imagen);
          } else {
            console.log(entity);
            console.log(entity.imagen);

            if (entity.imagen.indexOf(":") > 0) {
              var items = entity.imagen.split(":");
              var galeria = items[0];
              var imagen = items[1];
              sprite = this.game.add.sprite(entity.x, entity.y, galeria, imagen);
            } else {
              sprite = this.game.add.sprite(entity.x, entity.y, entity.imagen);
            }
          }

          var sprite_id = this.add_sprite(sprite);

          entity.sprite_id = sprite_id;

          sprite.position.set(entity.x, entity.y);
          sprite.scale.set(entity.scale_x, entity.scale_y);
          sprite.anchor.setTo(entity.anchor_x, entity.anchor_y);
          sprite.angle = -entity.rotation;
        }

        if (!pause_enabled) {

          if (this.codigos[entity.nombre]) {
            try {
              this.codigos[entity.nombre].actualizar.call(entity);
            } catch (e) {
              console.warn("Hay un error en pilas, así que se activó la pausa. Usá la sentencia 'pilas.unpause()' luego de reparar el error.");
              console.error(e);
              this.pausar();
            }
          }

          // Actualiza las entidades.
          for (var name in entity.scripts) {
            this.aplicar_script(entity, name, entity.scripts[name]);
          }
        }


      });

      if (!pause_enabled) {
        this.historial_estados.save(this.estados);

        // if (timer === 0) {
        //   var data:any = JSON.stringify(this.game_state, null, "  ");
        //   document.getElementById("result").innerHTML = data;
        // }

        // timer += 1;

        // if (timer > 20) {
        //   timer = 0;
        // }

      }


    */
    Estados.prototype.crear_entidad = function (tipo, entidad) {
        var iniciales = {
            tipo: tipo,
            id: Math.ceil(Math.random() * 1000000000000),
            x: 0,
            y: 0,
            tiled: true,
            escala_x: 1,
            escala_y: 1,
            rotacion: 0,
            anchor_x: 0.5,
            anchor_y: 0.5,
            scripts: {}
        };
        for (var i in iniciales) {
            if (entidad[i] != "undefined") {
                entidad[i] = iniciales[i];
            }
        }
        this.data.entidades.push(entidad);
        return new ActorProxy(this.pilas, entidad.id);
    };
    return Estados;
})();
var Fondos = (function () {
    function Fondos(pilas) {
        this.pilas = pilas;
    }
    Fondos.prototype.Plano = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return this.pilas.estados.crear_entidad("spriteTiled", {
            imagen: "fondos/plano",
            x: 3
        });
    };
    return Fondos;
})();
var Historial = (function () {
    function Historial(game) {
        this.pilas = game;
        this.game_state_history = [];
        this.current_step = 0;
    }
    Historial.prototype.reset = function () {
        this.game_state_history = [];
        this.current_step = 0;
    };
    Historial.prototype.get_length = function () {
        return this.game_state_history.length;
    };
    Historial.prototype.save = function (state) {
        this.game_state_history.push(JSON.parse(JSON.stringify(state)));
        this.current_step = this.game_state_history.length;
    };
    Historial.prototype.get_state_by_step = function (step) {
        var total = this.get_length();
        if (step < 0 || step >= total) {
            throw new Error("No se puede recuperar el historial en el paso " + step);
        }
        return this.game_state_history[step];
    };
    return Historial;
})();
var Imagenes = (function () {
    function Imagenes(pilas) {
        this.pilas = pilas;
    }
    Imagenes.prototype.precargar_imagenes_estandar = function () {
        this.cargar("humo", "humo.png");
        this.cargar("sin_imagen", "sin_imagen.png");
        this.cargar("fondos/plano", "fondos/plano.png");
        this.cargar("yamcha", "yamcha.png");
        this.cargar_atlas("data", "sprites.png", "sprites.json");
    };
    Imagenes.prototype.cargar = function (identificador, archivo) {
        var path = this.pilas.utils.join(this.pilas.opciones.data_path, archivo);
        this.pilas.game.load.image(identificador, path);
    };
    Imagenes.prototype.cargar_atlas = function (id, archivo_png, archivo_json) {
        var path_png = this.pilas.utils.join(this.pilas.opciones.data_path, archivo_png);
        var path_json = this.pilas.utils.join(this.pilas.opciones.data_path, archivo_json);
        this.pilas.game.load.atlasJSONHash(id, path_png, path_json);
    };
    return Imagenes;
})();
/// <reference path="../libs/pixi.d.ts"/>
/// <reference path="../libs/p2.d.ts"/>
/// <reference path="../libs/phaser.d.ts"/>
/// <reference path="entidad.ts" />
/// <reference path="actores.ts" />
/// <reference path="fondos.ts" />
/// <reference path="historial.ts" />
/// <reference path="actorProxy.ts" />
/// <reference path="tipos.ts" />
var timer = 0;
var __ha_mostrado_version = false;
var Pilas = (function () {
    function Pilas(id_elemento_html, opciones) {
        this.pause_enabled = false;
        this.sprites = [];
        this.mouse = { x: 0, y: 0 };
        this.utils = new Utils(this);
        var options = {
            preload: this.preload.bind(this),
            create: this.create.bind(this),
            update: this.actualizar.bind(this),
            render: this.render.bind(this)
        };
        this._verificar_correctitud_de_id_elemento_html(id_elemento_html);
        this.id_elemento_html = id_elemento_html;
        this.ocultar_canvas();
        if (!__ha_mostrado_version) {
            console.log("%cpilasengine.js v" + VERSION + " | http://www.pilas-engine.com.ar", "color: blue");
            __ha_mostrado_version = true;
        }
        this.codigos = {};
        this.opciones = opciones;
        this.ancho = opciones.ancho || 640;
        this.alto = opciones.alto || 480;
        this.game = new Phaser.Game(this.ancho, this.alto, Phaser.CANVAS, id_elemento_html, options);
        this.game.antialias = false;
        this.historial_estados = new Historial(this);
        this.estados = new Estados(this);
        this.load_scripts();
        this.actores = new Actores(this);
        this.fondos = new Fondos(this);
        this.imagenes = new Imagenes(this);
        this.depurador = new Depurador(this);
        this.evento_inicia = document.createEvent("Event");
    }
    Pilas.prototype.mostrar_cuadros_por_segundo = function (estado) {
        if (estado) {
            this.depurador.activar_modo('fps');
        }
        else {
            this.depurador.desactivar_modo('fps');
        }
        this.mostrar_fps = estado;
        this.game.time.advancedTiming = estado;
    };
    Pilas.prototype._verificar_correctitud_de_id_elemento_html = function (id_elemento_html) {
        if (!id_elemento_html) {
            throw Error("Tienes que especificar el ID del tag a usar. Algo como pilasengine.iniciar('idElemento')");
        }
        if (!document.getElementById(id_elemento_html)) {
            throw Error("No se encuentra el elemento con ID: " + id_elemento_html);
        }
        if (document.getElementById(id_elemento_html).tagName !== "DIV") {
            throw Error("El elemento ID: " + id_elemento_html + " tiene que ser un tag DIV.");
        }
    };
    Pilas.prototype.cuando = function (nombre_evento, callback) {
        if (nombre_evento === "inicia") {
            this._cuando_inicia_callback = callback;
            window.addEventListener("evento_inicia", function () { callback(); });
        }
        else {
            alert("El evento " + nombre_evento + " no est\u00E1 soportado.");
        }
    };
    Pilas.prototype.load_scripts = function () {
        this.scripts = {
            rotate: function (entity, data) {
                entity.rotation += data.speed;
            },
            move: function (entity, data) {
                entity.x += data.dx;
                entity.y += data.dy;
            }
        };
    };
    /**
     * Concatena dos rutas de manera similar a la función os.path.join
     */
    Pilas.prototype.ejecutar = function () {
        if (this.opciones.en_test) {
            this._cuando_inicia_callback.call(this);
        }
    };
    Pilas.prototype.mostrar_canvas = function () {
        document.getElementById(this.id_elemento_html).style.opacity = "1";
    };
    Pilas.prototype.ocultar_canvas = function () {
        document.getElementById(this.id_elemento_html).style.opacity = "0";
    };
    Pilas.prototype.preload = function () {
        this.game.stage.disableVisibilityChange = true;
        this.imagenes.precargar_imagenes_estandar();
        this.mostrar_cuadros_por_segundo(true);
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.refresh();
    };
    Pilas.prototype.create = function () {
        this.mostrar_canvas();
        window.dispatchEvent(new CustomEvent("evento_inicia"));
    };
    Pilas.prototype.pausar = function () {
        this.pause_enabled = true;
    };
    Pilas.prototype.continuar = function () {
        this.pause_enabled = false;
        this.historial_estados.reset();
    };
    Pilas.prototype.alternar_pausa = function () {
        if (this.pause_enabled) {
            this.continuar();
        }
        else {
            this.pausar();
        }
    };
    Pilas.prototype.actualizar = function () {
        this.estados.actualizar(this.pause_enabled);
        this.mouse.x = this.game.input.x;
        this.mouse.y = this.game.input.y;
    };
    Pilas.prototype.render = function () {
        if (this.mostrar_fps) {
        }
        this.depurador.realizar_dibujado();
    };
    Pilas.prototype.add_sprite = function (sprite) {
        var id = this._crear_id();
        this.sprites.push({ id: id, sprite: sprite });
        return id;
    };
    Pilas.prototype._crear_id = function () {
        return (0 | Math.random() * 9e6).toString(36);
    };
    Pilas.prototype._obtener_sprite_por_id = function (id) {
        for (var i = 0; i < this.sprites.length; i++) {
            var element = this.sprites[i];
            if (element.id === id) {
                return element.sprite;
            }
        }
        throw new Error("No se encuentra el sprite con el ID " + id);
    };
    Pilas.prototype.aplicar_script = function (entity, script_name, script_data) {
        this.obtener_script_por_nombre(script_name)(entity, script_data);
    };
    Pilas.prototype.obtener_script_por_nombre = function (script_name) {
        return this.scripts[script_name];
    };
    Pilas.prototype.listar_actores = function () {
        return this.estados.data.entidades.map(function (e) { return { tipo: "actor", id: e.id }; });
    };
    Pilas.prototype.obtener_actor = function (id) {
        return new ActorProxy(this, this.estados.data.entidades[id]);
    };
    Pilas.prototype.obtener_actores = function () {
        var _this = this;
        return this.estados.data.entidades.map(function (e) {
            return new ActorProxy(_this, e.id);
        });
    };
    return Pilas;
})();
/**
 * Representa el espacio de nombres para acceder a todos los componentes
 * de pilasengine.
 */
var pilasengine = {
    /**
     * Inicializa la biblioteca completa.
     *
     * @example
     *     var pilas = pilasengine.iniciar("canvas_id");
     *
     * @param {OpcionesIniciar} las opciones de inicialización.
     * @return {Game} el objeto instanciado que representa el contexto del juego.
     * @api public
     */
    iniciar: function (element_id, opciones) {
        if (opciones === void 0) { opciones = { data_path: "data", ancho: null, alto: null, en_test: false }; }
        opciones.data_path = opciones["data_path"] || "data";
        opciones.en_test = opciones["en_test"] || false;
        return new Pilas(element_id, opciones);
    }
};
var Utils = (function () {
    function Utils(pilas) {
        this.pilas = pilas;
    }
    /**
     * Concatena dos rutas de manera similar a la función ``os.path.join`` de python.
     */
    Utils.prototype.join = function (a, b) {
        var path = [a, b].map(function (i) {
            return i.replace(/(^\/|\/$)/, "");
        }).join("/");
        return path;
    };
    return Utils;
})();
var VERSION = "0.0.2";
