declare var TWEEN: any

class Interpolaciones {
  pilas: Pilas;
  time: number;

  constructor(pilas: Pilas) {
    this.pilas = pilas;
    this.time = window.performance.now();
  }

  actualizar() {
    this.time += 1000.0/60;
    TWEEN.update(this.time);
  }

  reiniciar() {
    TWEEN.removeAll();
  }

  crear_interpolacion(actor: ActorProxy, propiedad: string, valor: any, duracion: number = 500.0, tipo: string = "desaceleracion_gradual", infinito: boolean = false) {

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

    let interporlacion_como_constante = algoritmos[tipo];

    if (!interporlacion_como_constante) {
      throw new Error(`No existe el tipo de interpolación ${tipo}`);
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
  }
}
