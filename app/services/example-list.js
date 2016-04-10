import Ember from 'ember';

let codigo_escena_normal = `
let pilas;

pilas.cuando('inicia', function() {
  pilas.escenas.normal();
  let patito = pilas.actores.patito();
  patito.escala = [2, 1];
});
`;

let codigo_disparo = `
let pilas;

pilas.cuando('inicia', function() {
  pilas.escenas.normal();
  let actor = pilas.actores.actor();
  actor.aprender("SeguirClicks");
});
`;

let items = [
  Ember.Object.extend({}).create({
      id: 1,
      name: "escena_normal",
      title: "Hola mundo",
      code: codigo_escena_normal,
      ancho: 400,
      alto: 400,
    }),
  Ember.Object.extend({}).create({
      id: 2,
      name: "disparo",
      title: "Nave dispara",
      code: codigo_disparo,
      ancho: 600,
      alto: 600,
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
