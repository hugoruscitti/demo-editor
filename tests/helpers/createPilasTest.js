import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default function createPilasTest(context, callback) {
  // context en este caso es el test en si mismo (this).

  return new Ember.RSVP.Promise((resolve) => {


    context.on('onLoad', function(val) {
      let iframe = val.iframeElement;
      let pilas = iframe.contentWindow.eval("pilasengine.iniciar('canvas', {ancho: 640, alto: 384})");

      pilas.cuando("inicia", () => {
        callback(pilas, resolve);
      });

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

  });
}
