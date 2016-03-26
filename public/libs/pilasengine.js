var ActorProxy = (function () {
    function ActorProxy(pilas, id) {
        this.pilas = pilas;
        this.id = id;
    }
    ActorProxy.prototype.interpolar = function (propiedad, valor, duracion, tipo, infinito) {
        if (duracion === void 0) { duracion = 500.0; }
        if (tipo === void 0) { tipo = "desaceleracion_gradual"; }
        if (infinito === void 0) { infinito = false; }
        if (!duracion) {
            duracion = 500.0;
        }
        if (!tipo) {
            tipo = "desaceleracion_gradual";
        }
        if (infinito == undefined) {
            infinito = false;
        }
        this.pilas.interpolaciones.crear_interpolacion(this, propiedad, valor, duracion, tipo, infinito);
    };
    Object.defineProperty(ActorProxy.prototype, "x", {
        get: function () {
            return this.data.x;
        },
        set: function (value) {
            this.setData('x', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorProxy.prototype, "y", {
        get: function () {
            return this.data.y;
        },
        set: function (value) {
            this.setData('y', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorProxy.prototype, "escala_x", {
        get: function () {
            return this.data.escala_x;
        },
        set: function (value) {
            this.setData('escala_x', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorProxy.prototype, "escala_y", {
        get: function () {
            return this.data.escala_y;
        },
        set: function (value) {
            this.setData('escala_y', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorProxy.prototype, "escala", {
        get: function () {
            if (this.escala_x != this.escala_y) {
                console.warn("Los valores de escala_x y escala_y son diferentes, se asume que la escala conjunta es la mayor.");
            }
            return Math.max(this.escala_x, this.escala_y);
        },
        set: function (value) {
            this.escala_x = value;
            this.escala_y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorProxy.prototype, "rotacion", {
        get: function () {
            return this.data.rotacion;
        },
        set: function (value) {
            this.setData('rotacion', value);
        },
        enumerable: true,
        configurable: true
    });
    ActorProxy.prototype.setData = function (property, value) {
        if (value instanceof Array) {
            this.interpolar(property, value);
        }
        else {
            this.data[property] = value;
        }
    };
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
var Escenas = (function () {
    function Escenas(pilas) {
        this.pilas = pilas;
    }
    Escenas.prototype.Normal = function () {
    };
    return Escenas;
})();
var Escena = (function () {
    function Escena(pilas) {
        this.pilas = pilas;
    }
    Escena.prototype.actualizar = function () {
    };
    return Escena;
})();
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
                    _this.actualizar_entidad_tipo_sprite_tiled(entidad);
                    break;
                case "sprite":
                    _this.actualizar_entidad_tipo_sprite(entidad);
                    break;
                default:
                    throw new Error("No existe un manejador de entidad para el tipo: " + entidad.tipo);
            }
        });
    };
    Estados.prototype.actualizar_entidad_tipo_sprite_tiled = function (entidad) {
        var sprite = this.obtener_sprite_tiled(entidad.id, entidad.imagen);
        this.actualizar_sprite_desde_entidad(sprite, entidad);
    };
    Estados.prototype.actualizar_entidad_tipo_sprite = function (entidad) {
        var sprite = this.obtener_sprite(entidad.id, entidad.imagen);
        this.actualizar_sprite_desde_entidad(sprite, entidad);
    };
    Estados.prototype.actualizar_sprite_desde_entidad = function (sprite, entidad) {
        var dx = this.pilas.ancho / 2;
        var dy = this.pilas.alto / 2;
        sprite.position.set(dx + entidad.x, dy - entidad.y);
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
var Interpolaciones = (function () {
    function Interpolaciones(pilas) {
        this.pilas = pilas;
        if (this.pilas.opciones.en_test) {
            this.time = 0;
        }
        else {
            this.time = window.performance.now();
        }
    }
    Interpolaciones.prototype.actualizar = function () {
        this.time += 1000.0 / 60;
        TWEEN.update(this.time);
    };
    Interpolaciones.prototype.reiniciar = function () {
        TWEEN.removeAll();
    };
    Interpolaciones.prototype.crear_interpolacion = function (actor, propiedad, valor, duracion, tipo, infinito) {
        if (duracion === void 0) { duracion = 500.0; }
        if (tipo === void 0) { tipo = "desaceleracion_gradual"; }
        if (infinito === void 0) { infinito = false; }
        if (!duracion) {
            duracion = 500.0;
        }
        if (!tipo) {
            tipo = "desaceleracion_gradual";
        }
        if (infinito == undefined) {
            infinito = false;
        }
        var attrs = {};
        attrs[propiedad] = valor;
        // Se asegura que la demora sea de cada paso de la interpolación.
        if (valor instanceof Array) {
            duracion *= valor.length;
        }
        if (infinito) {
            if (valor instanceof Array) {
                valor.push(actor[propiedad]);
            }
        }
        var tween = new TWEEN.Tween(actor).to(attrs, duracion);
        var algoritmos = {
            "lineal": TWEEN.Easing.Linear.None,
            "aceleracion_gradual": TWEEN.Easing.Quadratic.In,
            "desaceleracion_gradual": TWEEN.Easing.Quadratic.InOut,
            "elastico": TWEEN.Easing.Elastic.Out,
        };
        var interporlacion_como_constante = algoritmos[tipo];
        if (!interporlacion_como_constante) {
            throw new Error("No existe el tipo de interpolaci\u00F3n " + tipo);
        }
        if (infinito) {
            tween.repeat(Infinity);
        }
        tween.easing(interporlacion_como_constante);
        /*
        tween.onStart(function(){
        });
    
        tween.onUpdate(function(){
          console.log("tewwn");
        });
    
        tween.onComplete(function(){
        });
        */
        tween.start();
    };
    return Interpolaciones;
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
        this.pausa_habilitada = false;
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
    Pilas.prototype.mostrar_cuadros_por_segundo = function (estado) {
        if (estado) {
            this.depurador.activar_modo("fps");
        }
        else {
            this.depurador.desactivar_modo("fps");
        }
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
    /**
     * Muestra el contenedor que contiene al juego.
     */
    Pilas.prototype.mostrar_canvas = function () {
        document.getElementById(this.id_elemento_html).style.opacity = "1";
    };
    /**
     * Oculta el contenedor que contiene al juego.
     */
    Pilas.prototype.ocultar_canvas = function () {
        document.getElementById(this.id_elemento_html).style.opacity = "0";
    };
    Pilas.prototype.preload = function () {
        this.game.stage.disableVisibilityChange = true;
        this.imagenes.precargar_imagenes_estandar();
        this.mostrar_cuadros_por_segundo(true);
        if (this.opciones.escalar) {
            this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.refresh();
            function gameResized(manager, bounds) {
                var scale = Math.min(window.innerWidth / this.game.width, window.innerHeight / this.game.height);
                manager.setUserScale(scale, scale, 0, 0);
            }
            this.game.scale.setResizeCallback(gameResized, this);
        }
    };
    Pilas.prototype.create = function () {
        this.mostrar_canvas();
        window.dispatchEvent(new CustomEvent("evento_inicia"));
    };
    Pilas.prototype.pausar = function () {
        if (this.pausa_habilitada) {
            console.warn("El modo pausa ya estába habilitado.");
        }
        this.pausa_habilitada = true;
    };
    Pilas.prototype.continuar = function () {
        if (!this.pausa_habilitada) {
            console.warn("El modo pausa no estába habilitado.");
        }
        this.pausa_habilitada = false;
        this.historial_estados.reset();
    };
    Pilas.prototype.alternar_pausa = function () {
        if (this.pausa_habilitada) {
            this.continuar();
        }
        else {
            this.pausar();
        }
    };
    /**
     * Realiza una actualización de la lógica del videojuego.
     */
    Pilas.prototype.actualizar = function () {
        if (!this.pausa_habilitada) {
            this.estados.actualizar(this.pausa_habilitada);
            this.mouse.x = this.game.input.x;
            this.mouse.y = this.game.input.y;
            this.interpolaciones.actualizar();
        }
    };
    Pilas.prototype.render = function () {
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
        return this.estados.data.entidades.map(function (e) {
            return { tipo: "actor", id: e.id };
        });
    };
    Pilas.prototype.obtener_actor = function (id) {
        var entidad = this.estados.data.entidades[id];
        if (!entidad) {
            throw new Error("Lo siento, no existe actor con el ID=" + id);
        }
        return new ActorProxy(this, entidad);
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
     * Inicializa la biblioteca completa dentro de un contenedor DIV.
     *
     * @example
     *     var pilas = pilasengine.iniciar("id_del_contenedor");
     *
     * @param {OpcionesIniciar} las opciones de inicialización.
     * @return {Game} el objeto instanciado que representa el contexto del juego.
     * @api public
     */
    iniciar: function (element_id, opciones) {
        if (opciones === void 0) { opciones = { data_path: "data", ancho: null, alto: null, escalar: true, en_test: false }; }
        opciones.data_path = opciones["data_path"] || "data";
        opciones.en_test = opciones["en_test"] || false;
        if (opciones["escalar"] === undefined) {
            opciones.escalar = true;
        }
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
    /**
     * Intentan autocompletar el nombre de una función, método o varible.
     *
     * Esta función se utiliza dentro del editor de pilas-engine y sirve
     * para que el intérprete interactivo retorne información de la API
     * mientras se escribe.
     */
    Utils.prototype.autocompletar = function (prefijo) {
        function comienza_con(cadena, stringBuscada) {
            return cadena.indexOf(stringBuscada) === 0;
        }
        function obtener_atributos(objeto) {
            var atributos = [];
            for (var i in objeto) {
                atributos.push(i);
            }
            return atributos;
        }
        if (!prefijo) {
            return [];
        }
        else {
            var values = [];
            var partes = prefijo.split(".");
            if (partes.length === 1) {
                return obtener_atributos(window).filter(function (e) {
                    return comienza_con(e, prefijo.toLowerCase());
                });
            }
            else {
                console.log(partes);
                var inicio = partes.slice(0, partes.length - 1).join(".");
                var prefijo_1 = partes[partes.length - 1];
                if (partes[0] == "pilas") {
                    partes[0] = "this.pilas";
                }
                try {
                    return obtener_atributos(eval.call(window, inicio)).filter(function (e) {
                        return comienza_con(e, prefijo_1.toLowerCase());
                    });
                }
                catch (e) {
                    console.info(e);
                    return [];
                }
            }
        }
    };
    return Utils;
})();
var VERSION = "0.0.2";

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

// Include a performance.now polyfill
(function () {

	if ('performance' in window === false) {
		window.performance = {};
	}

	// IE 8
	Date.now = (Date.now || function () {
		return new Date().getTime();
	});

	if ('now' in window.performance === false) {
		var offset = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart
		                                                                                    : Date.now();

		window.performance.now = function () {
			return Date.now() - offset;
		};
	}

})();

var TWEEN = TWEEN || (function () {

	var _tweens = [];

	return {

		getAll: function () {

			return _tweens;

		},

		removeAll: function () {

			_tweens = [];

		},

		add: function (tween) {

			_tweens.push(tween);

		},

		remove: function (tween) {

			var i = _tweens.indexOf(tween);

			if (i !== -1) {
				_tweens.splice(i, 1);
			}

		},

		update: function (time) {

			if (_tweens.length === 0) {
				return false;
			}

			var i = 0;

			time = time !== undefined ? time : window.performance.now();

			while (i < _tweens.length) {

				if (_tweens[i].update(time)) {
					i++;
				} else {
					_tweens.splice(i, 1);
				}

			}

			return true;

		}
	};

})();

TWEEN.Tween = function (object) {

	var _object = object;
	var _valuesStart = {};
	var _valuesEnd = {};
	var _valuesStartRepeat = {};
	var _duration = 1000;
	var _repeat = 0;
	var _yoyo = false;
	var _isPlaying = false;
	var _reversed = false;
	var _delayTime = 0;
	var _startTime = null;
	var _easingFunction = TWEEN.Easing.Linear.None;
	var _interpolationFunction = TWEEN.Interpolation.Linear;
	var _chainedTweens = [];
	var _onStartCallback = null;
	var _onStartCallbackFired = false;
	var _onUpdateCallback = null;
	var _onCompleteCallback = null;
	var _onStopCallback = null;

	// Set all starting values present on the target object
	for (var field in object) {
		_valuesStart[field] = parseFloat(object[field], 10);
	}

	this.to = function (properties, duration) {

		if (duration !== undefined) {
			_duration = duration;
		}

		_valuesEnd = properties;

		return this;

	};

	this.start = function (time) {

		TWEEN.add(this);

		_isPlaying = true;

		_onStartCallbackFired = false;

		_startTime = time !== undefined ? time : window.performance.now();
		_startTime += _delayTime;

		for (var property in _valuesEnd) {

			// Check if an Array was provided as property value
			if (_valuesEnd[property] instanceof Array) {

				if (_valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);

			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (_valuesStart[property] === undefined) {
				continue;
			}

			_valuesStart[property] = _object[property];

			if ((_valuesStart[property] instanceof Array) === false) {
				_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			_valuesStartRepeat[property] = _valuesStart[property] || 0;

		}

		return this;

	};

	this.stop = function () {

		if (!_isPlaying) {
			return this;
		}

		TWEEN.remove(this);
		_isPlaying = false;

		if (_onStopCallback !== null) {
			_onStopCallback.call(_object);
		}

		this.stopChainedTweens();
		return this;

	};

	this.stopChainedTweens = function () {

		for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
			_chainedTweens[i].stop();
		}

	};

	this.delay = function (amount) {

		_delayTime = amount;
		return this;

	};

	this.repeat = function (times) {

		_repeat = times;
		return this;

	};

	this.yoyo = function (yoyo) {

		_yoyo = yoyo;
		return this;

	};


	this.easing = function (easing) {

		_easingFunction = easing;
		return this;

	};

	this.interpolation = function (interpolation) {

		_interpolationFunction = interpolation;
		return this;

	};

	this.chain = function () {

		_chainedTweens = arguments;
		return this;

	};

	this.onStart = function (callback) {

		_onStartCallback = callback;
		return this;

	};

	this.onUpdate = function (callback) {

		_onUpdateCallback = callback;
		return this;

	};

	this.onComplete = function (callback) {

		_onCompleteCallback = callback;
		return this;

	};

	this.onStop = function (callback) {

		_onStopCallback = callback;
		return this;

	};

	this.update = function (time) {

		var property;
		var elapsed;
		var value;

		if (time < _startTime) {
			return true;
		}

		if (_onStartCallbackFired === false) {

			if (_onStartCallback !== null) {
				_onStartCallback.call(_object);
			}

			_onStartCallbackFired = true;

		}

		elapsed = (time - _startTime) / _duration;
		elapsed = elapsed > 1 ? 1 : elapsed;

		value = _easingFunction(elapsed);

		for (property in _valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (_valuesStart[property] === undefined) {
				continue;
			}

			var start = _valuesStart[property] || 0;
			var end = _valuesEnd[property];

			if (end instanceof Array) {

				_object[property] = _interpolationFunction(end, value);

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof (end) === 'string') {

					if (end.startsWith('+') || end.startsWith('-')) {
						end = start + parseFloat(end, 10);
					} else {
						end = parseFloat(end, 10);
					}
				}

				// Protect against non numeric properties.
				if (typeof (end) === 'number') {
					_object[property] = start + (end - start) * value;
				}

			}

		}

		if (_onUpdateCallback !== null) {
			_onUpdateCallback.call(_object, value);
		}

		if (elapsed === 1) {

			if (_repeat > 0) {

				if (isFinite(_repeat)) {
					_repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in _valuesStartRepeat) {

					if (typeof (_valuesEnd[property]) === 'string') {
						_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property], 10);
					}

					if (_yoyo) {
						var tmp = _valuesStartRepeat[property];

						_valuesStartRepeat[property] = _valuesEnd[property];
						_valuesEnd[property] = tmp;
					}

					_valuesStart[property] = _valuesStartRepeat[property];

				}

				if (_yoyo) {
					_reversed = !_reversed;
				}

				_startTime = time + _delayTime;

				return true;

			} else {

				if (_onCompleteCallback !== null) {
					_onCompleteCallback.call(_object);
				}

				for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					_chainedTweens[i].start(_startTime + _duration);
				}

				return false;

			}

		}

		return true;

	};

};


TWEEN.Easing = {

	Linear: {

		None: function (k) {

			return k;

		}

	},

	Quadratic: {

		In: function (k) {

			return k * k;

		},

		Out: function (k) {

			return k * (2 - k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return - 0.5 * (--k * (k - 2) - 1);

		}

	},

	Cubic: {

		In: function (k) {

			return k * k * k;

		},

		Out: function (k) {

			return --k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);

		}

	},

	Quartic: {

		In: function (k) {

			return k * k * k * k;

		},

		Out: function (k) {

			return 1 - (--k * k * k * k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return - 0.5 * ((k -= 2) * k * k * k - 2);

		}

	},

	Quintic: {

		In: function (k) {

			return k * k * k * k * k;

		},

		Out: function (k) {

			return --k * k * k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);

		}

	},

	Sinusoidal: {

		In: function (k) {

			return 1 - Math.cos(k * Math.PI / 2);

		},

		Out: function (k) {

			return Math.sin(k * Math.PI / 2);

		},

		InOut: function (k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));

		}

	},

	Exponential: {

		In: function (k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);

		},

		Out: function (k) {

			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

		}

	},

	Circular: {

		In: function (k) {

			return 1 - Math.sqrt(1 - k * k);

		},

		Out: function (k) {

			return Math.sqrt(1 - (--k * k));

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function (k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			return - (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));

		},

		Out: function (k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			return (a * Math.pow(2, - 10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);

		},

		InOut: function (k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			if ((k *= 2) < 1) {
				return - 0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
			}

			return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

		}

	},

	Back: {

		In: function (k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);

		},

		Out: function (k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;

		},

		InOut: function (k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

		}

	},

	Bounce: {

		In: function (k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

		},

		Out: function (k) {

			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}

		},

		InOut: function (k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

	},

	Bezier: function (v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;

	},

	CatmullRom: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

		}

	},

	Utils: {

		Linear: function (p0, p1, t) {

			return (p1 - p0) * t + p0;

		},

		Bernstein: function (n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);

		},

		Factorial: (function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;

			};

		})(),

		CatmullRom: function (p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

		}

	}

};

// UMD (Universal Module Definition)
(function (root) {

	if (typeof define === 'function' && define.amd) {

		// AMD
		define([], function () {
			return TWEEN;
		});

	} else if (typeof module !== 'undefined' && typeof exports === 'object') {

		// Node.js
		module.exports = TWEEN;

	} else if (root !== undefined) {

		// Global variable
		root.TWEEN = TWEEN;

	}

})(this);
