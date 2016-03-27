import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `demo ${i}`;
  },
  ancho: 320,
  alto: 240,

  code(i) {
      return `let pilas;

pilas.fondos.Plano();`;
    },

});
