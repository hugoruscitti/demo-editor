import Ember from 'ember';

let items = [
  Ember.Object.extend({}).create({id: 1, name: "escena_normal", title: "Hola mundo", ancho: 400, alto: 400}),
];

export default Ember.Service.extend({
  find(id) {
    return items.findBy("id", id);
  },
  findAll() {
    return items;
  }
});
