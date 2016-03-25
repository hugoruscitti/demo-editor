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
    new(typeArg: string, eventInitDict?: CustomEventInit): CustomEvent;
};
