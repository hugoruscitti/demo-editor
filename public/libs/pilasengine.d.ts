/// <reference path="../libs/pixi.d.ts" />
/// <reference path="../libs/p2.d.ts" />
/// <reference path="../libs/phaser.d.ts" />
declare class ActorProxy {
}
declare class Actores {
    pilas: Pilas;
    constructor(pilas: Pilas);
    protected _vincular_métodos_de_creación(): void;
    /**
     * Permite vincular una clase para generar un actor personalizado.
     *
     * El actor puede ser cualquier tipo de clase, pero tiene que tener
     * definida una función llamada "iniciar" que espere un argumento opciones
     * (tipo diccionario).
     */
    vincular(clase: any): void;
}
declare class Actor {
    x: number;
    y: number;
    _imagen: any;
    _sprite: any;
    pilas: Pilas;
    rotacion: number;
    anchor_x: number;
    anchor_y: number;
    escala_x: number;
    escala_y: number;
    id: number;
    constructor(pilas: Pilas);
    /**
     * Retorna un identificador aleatorio para el Actor.
     */
    private generar_id();
    iniciar(opciones: any): void;
    imagen: string;
    protected _crear_sprite_interno(galeria: string, imagen: string): void;
    pre_actualizar(): void;
    private _actualizar_propiedades();
    actualizar(): void;
    post_actualizar(): void;
}
declare class Depurador {
    pilas: Pilas;
    modos: any;
    modos_disponibles: any;
    constructor(pilas: Pilas);
    cuando_dibuja_actor(actor: any): void;
    realizar_dibujado(): void;
    activar_modo(modo: string): void;
    desactivar_modo(modo: string): void;
}
declare class Modo {
    pilas: Pilas;
    constructor(pilas: Pilas);
    realizar_dibujado(): void;
    cuando_dibuja_actor(actor: any): void;
}
declare class ModoFPS extends Modo {
    realizar_dibujado(): void;
}
declare class Escenas {
    pilas: Pilas;
    escena_actual: Escena;
    pausa_habilitada: boolean;
    mouse: {
        x: number;
        y: number;
    };
    constructor(pilas: Pilas);
    normal(): void;
    actualizar(): void;
    pausar(): void;
    continuar(): void;
    alternar_pausa(): void;
}
/**
 * Clase abstracta que representa una escena dentro del juego.
 */
declare class Escena {
    pilas: Pilas;
    estados: Estados;
    historial_estados: Historial;
    sprites: SpriteCache[];
    interpolaciones: Interpolaciones;
    actores: any[];
    constructor(pilas: Pilas);
    /** TMP */
    agregar(actor: any): void;
    private _actualizar_actores();
    /**
     * Carga el código inicial para la escena.
     *
     * Este método se invoca por el gestor de escenas una vez
     * que la escena se activa y pasa a ser la escena_actual de pilas.
     */
    iniciar(): void;
    /**
     * Se invoca seis veces por segundo para mantener en funcionamiento el juego.
     */
    actualizar(): void;
}
declare class EscenaNormal extends Escena {
    pilas: Pilas;
    iniciar(): void;
}
declare class Estados {
    pilas: Pilas;
    data: Estado;
    cache: any;
    private obtener_sprite_tiled(id, imagen);
}
declare class Fondos extends Actores {
    _vincular_métodos_de_creación(): void;
}
declare class ActorFondo extends Actor {
    protected _crear_sprite_interno(galeria: string, imagen: string): void;
}
declare class Plano extends ActorFondo {
    iniciar(): void;
}
declare class Habilidad {
    pilas: Pilas;
    constructor(pilas: Pilas);
    actualizar(): void;
}
declare class SeguirClicks extends Habilidad {
    actualizar(): void;
}
declare class Historial {
    pilas: Pilas;
    game_state_history: Estado[];
    current_step: number;
    constructor(pilas: Pilas);
    reset(): void;
    get_length(): number;
    save(state: Estado): void;
    get_state_by_step(step: number): Estado;
}
declare class Imagenes {
    pilas: Pilas;
    constructor(pilas: Pilas);
    precargar_imagenes_estandar(): void;
    private cargar(identificador, archivo);
    private cargar_atlas(id, archivo_png, archivo_json);
}
declare var TWEEN: any;
declare class Interpolaciones {
    pilas: Pilas;
    time: number;
    constructor(pilas: Pilas);
    actualizar(): void;
    reiniciar(): void;
    crear_interpolacion(actor: ActorProxy, propiedad: string, valor: any, duracion?: number, tipo?: string, infinito?: boolean): void;
}
interface Estado {
    entidades: any[];
}
interface SpriteCache {
    id: string;
    sprite: Phaser.Sprite;
}
interface OpcionesIniciar {
    data_path: string;
    en_test: boolean;
    ancho: number;
    alto: number;
    escalar: boolean;
}
interface CallBackEvento {
    (): void;
}
interface CustomEvent extends Event {
    initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: any): void;
}
declare var CustomEvent: {
    prototype: CustomEvent;
    new (typeArg: string, eventInitDict?: CustomEventInit): CustomEvent;
};
declare let timer: number;
declare let __ha_mostrado_version: boolean;
declare class Pilas {
    game: Phaser.Game;
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
    Actor: Actor;
    actor: Actor;
    constructor(id_elemento_html: string, opciones: OpcionesIniciar);
    /**
     * Retorna una refencia a la escena en curso.
     */
    escena_actual: Escena;
    /**
     * Retorna la cantidad de actualizaciones por segundo (generalmente 60).
     */
    /**
     * Define la cantidad de veces que se actualizarán los actores por segundo.
     *
     * Por omisión este atributo vale 60, porque se actualiza 60 veces por segundo.
     */
    actualizaciones_por_segundo: number;
    /**
     * Activa o desactiva el visor de rendimiento o cuadros por segundo.
     *
     * Este indicador es interno de Phaser, la bibliteca multimedia que
     * utiliza pilas, y es independiente a las actualizaciones lógicas
     * que se configuran con la propiedad `actualizaciones_por_segundo`.
     */
    mostrar_cuadros_por_segundo(estado: boolean): void;
    /**
     * Realiza chequeos para verificar que se tiene acceso al canvas html.
     */
    private _verificar_correctitud_de_id_elemento_html(id_elemento_html);
    /**
     * Permite conectar una función a un evento interno de pilas-engine.
     *
     * Los eventos que se pueden conectar son:
     *
     *  - "inicia": Se invoca cuando pilas está listo para ejecutar código.
     */
    cuando(nombre_evento: string, callback: CallBackEvento): void;
    /**
     * Elimina todo objeto de la escena y vuelve a cargar la escena normal.
     */
    reiniciar(): void;
    /**
     * Concatena dos rutas de manera similar a la función os.path.join
     */
    ejecutar(): void;
    /**
     * Muestra el contenedor que contiene al juego.
     */
    private mostrar_canvas();
    /**
     * Oculta el contenedor que contiene al juego.
     */
    private ocultar_canvas();
    preload(): void;
    /**
     * Callback iterno que se ejecuta cuando se puede comenzar a ejecutar código.
     */
    create(): void;
    /**
     * Detiene la actualización lógica del motor.
     */
    pausar(): void;
    /**
     * Reanuda la actualización lógica del motor.
     */
    continuar(): void;
    /**
     * Permite permutar el estado de pausa y ejecución.
     */
    alternar_pausa(): void;
    /**
     * Realiza una actualización de la lógica del videojuego.
     */
    private actualizar();
    /**
     * Realiza el actualizado gráfico.
     */
    render(): void;
    /**
     * Retorna una lista de todos los actores en la escena.
     */
    listar_actores(): any[];
    /**
     * Retorna una lista de actores pero especificando
     * el id de cada uno.
     */
    listar_actores_con_ids(): {
        id: any;
        actor: any;
    }[];
    /**
     * Retorna la cantidad de actores en pantalla (incluyendo al fondo).
     */
    obtener_cantidad_de_actores(): number;
    /**
     * Busca entre los actores y retorna el que tenga el ID buscado.
     */
    obtener_actor_por_id(id: number): any;
}
/**
 * Representa el espacio de nombres para acceder a todos los componentes
 * de pilasengine.
 */
declare let pilasengine: {
    iniciar: (element_id: string, opciones?: OpcionesIniciar) => Pilas;
    Actor: typeof Actor;
    actor: typeof Actor;
};
declare class Utils {
    pilas: Pilas;
    constructor(pilas: Pilas);
    /**
     * Concatena dos rutas de manera similar a la función ``os.path.join`` de python.
     */
    join(a: string, b: string): string;
    /**
     * Intentan autocompletar el nombre de una función, método o varible.
     *
     * Esta función se utiliza dentro del editor de pilas-engine y sirve
     * para que el intérprete interactivo retorne información de la API
     * mientras se escribe.
     */
    autocompletar(prefijo: string): Array<String>;
}
declare var VERSION: string;
