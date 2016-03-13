import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `demo ${i}`;
  },
  code(i) {
      return `let pilas;

pilas.fondos.Plano();`;
    }
});
