import Ember from 'ember';

let items = [
  Ember.Object.extend({}).create({
    id: 1,
    name: "escena_normal",
    title: "Hola mundo",
    code: `
let pilas;

pilas.cuando('inicia', function() {
  pilas.escenas.normal();
  let patito = pilas.actores.patito();
  patito.escala = [2, 1];
});
`,
    ancho: 400,
    alto: 400,
  }),
];

export default Ember.Service.extend({
  find(id) {
    return items.findBy("id", id);
  },
  findAll() {
    return items;
  }
});
