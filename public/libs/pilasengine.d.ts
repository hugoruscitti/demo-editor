/// <reference path="../libs/pixi.d.ts" />
/// <reference path="../libs/p2.d.ts" />
/// <reference path="../libs/phaser.d.ts" />
declare class ActorProxy {
    id: string;
    pilas: Pilas;
    habilidades: Array<Habilidad>;
    constructor(pilas: Pilas, id: string);
    interpolar(propiedad: string, valor: any, duracion?: number, tipo?: string, infinito?: boolean): void;
    x: number;
    y: number;
    escala_x: any;
    escala_y: number;
    escala: number;
    rotacion: number;
    setData(property: string, value: any): void;
    private data;
    imprimir(): string;
    actualizar_habilidades(): void;
    aprender(nombre_de_habilidad: string): void;
}
declare class Actores {
    pilas: Pilas;
    constructor(pilas: Pilas);
    /**
     * Representa a un actor genérico, con una imagen y propiedades
     * de transformación como ``x``, ``y``, ``escala_x``, ``escala_y`` etc...
     *
     * ![](../imagenes/sin_imagen.png)
     *
     * @param x - posición horizontal.
     * @param y - posición vertical.
     */
    actor(x?: number, y?: number): ActorProxy;
    patito(x?: number, y?: number): ActorProxy;
    obtener_por_id(id: string): ActorProxy;
    texto(mensaje: string): void;
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
/**
 * Representa una entidad dentro del motor, como un actor por ejemplo.
 *
 * Esta interfaz no se utiliza de forma directa, sino que solamente sirve
 * para agrupar todos los datos referidos a una entidad.
 *
 */
interface Entity {
    nombre: string;
    id: number;
    x: number;
    y: number;
    sprite_id?: string;
    scale_x: number;
    scale_y: number;
    rotation: number;
    anchor_x: number;
    anchor_y: number;
    image: string;
    scripts?: any;
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
    constructor(pilas: Pilas);
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
    constructor(pilas: Pilas);
    actualizar(): void;
    private actualizar_entidad_tipo_sprite_tiled(entidad);
    private actualizar_entidad_tipo_sprite(entidad);
    private actualizar_sprite_desde_entidad(sprite, entidad);
    private obtener_sprite_tiled(id, imagen);
    private obtener_sprite(id, imagen);
    obtener_entidad_por_id(id: string): any;
    crear_entidad(tipo: string, entidad: any): ActorProxy;
}
declare class Fondos {
    pilas: Pilas;
    constructor(pilas: Pilas);
    plano(x?: number, y?: number): ActorProxy;
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
    constructor(id_elemento_html: string, opciones: OpcionesIniciar);
    mostrar_cuadros_por_segundo(estado: boolean): void;
    private _verificar_correctitud_de_id_elemento_html(id_elemento_html);
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
    create(): void;
    pausar(): void;
    continuar(): void;
    alternar_pausa(): void;
    terminar(): void;
    /**
     * Realiza una actualización de la lógica del videojuego.
     */
    private actualizar();
    render(): void;
    listar_actores(): {
        tipo: string;
        id: any;
    }[];
    obtener_actor(id: string): ActorProxy;
    obtener_actores(): ActorProxy[];
    /**
     * Retorna la cantidad de actores en pantalla (incluyendo al fondo).
     */
    obtener_cantidad_de_actores(): number;
    crear_entidad(tipo: string, entidad: any): ActorProxy;
}
/**
 * Representa el espacio de nombres para acceder a todos los componentes
 * de pilasengine.
 */
declare let pilasengine: {
    iniciar: (element_id: string, opciones?: OpcionesIniciar) => Pilas;
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
