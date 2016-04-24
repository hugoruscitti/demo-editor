import Ember from 'ember';

let codigo_actor_personalizado = `

class MiActor extends pilasengine.Actor {
  velocidad;

  iniciar(opciones) {
    this.x = opciones.x;
    this.velocidad = 1;
    console.log("llamaron a iniciar asi", opciones);
  }

  actualizar() {
    console.log("actualiza", this.velocidad);
    this.rotacion += 5;
  }
}

pilas.cuando('inicia', function() {

  pilas.actualizaciones_por_segundo = 1;

  pilas.actores.vincular(MiActor);
  let unActor = pilas.actores.MiActor({x: 0, y: 0});
  unActor.imagen = "data:patito.png";

});


`;


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
  actor.rotacion = [360];
});
`;

let codigo_nave = `
let pilas;

pilas.cuando('inicia', function() {
  pilas.escenas.normal();
  let actor = pilas.actores.nave();
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

  Ember.Object.extend({}).create({
      id: 3,
      name: "nave",
      title: "Actor Nave",
      code: codigo_nave,
      ancho: 600,
      alto: 600,
    }),

  Ember.Object.extend({}).create({
      id: 4,
      name: "personalizado",
      title: "Actor Personalizado",
      code: codigo_actor_personalizado,
      ancho: 650,
      alto: 216,
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
