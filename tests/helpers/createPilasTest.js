import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

/*
function contarActoresConEtiqueta(pilas, etiqueta) {
  var escena = pilas.escena_actual();

  function tieneEtiquetaBuscada(actor) {
    return actor.tiene_etiqueta(etiqueta);
  }

  return escena.actores.filter(tieneEtiquetaBuscada).length;
}
*/

export default function createPilasTest(context, callback) {
  // context en este caso es el test en si mismo (this).

  return new Ember.RSVP.Promise((resolve) => {


    context.on('onLoad', function(val) {
      let iframe = val.iframeElement;
      let pilas = iframe.contentWindow.eval("pilasengine.iniciar('canvas', {ancho: 640, alto: 384})");

      callback(pilas, resolve);

    /*
      pilas.cuando("inicia", () => {
        let patito = pilas.actores.patito();
        patito.rotacion = [150, -150];
        window.patito = patito;

        assert.equal(patito.x, 0, "El actor aparece en la posición inicial X.");
        assert.equal(patito.y, 0, "El actor aparece en la posición inicial Y.");

        //resolve();
      });

      */
    });

    context.render(hbs`{{x-canvas onLoad='onLoad'}}
    <style>
      iframe {
        position: absolute;
        top:0;
        bottom: 0;
      }
    </style>
    `);

    //setTimeout(resolve, 4000);

    //this.on('onLoad', function(/*val*/) {
    //});


   // context.render(hbs`{{x-canvas}}`);

    //callback({}, resolve);

    //var cantidad_de_actores = contarActoresConEtiqueta(window['pilas'], etiqueta)
    //assert.equal(cantidad, cantidad_de_actores, `Hay ${cantidad} actores con la e
  });
}
