import Ember from 'ember';

let items = [];
let contadorID = 0;

function crear_ejemplo(nick, nombre, codigo) {

  let obj = Ember.Object.extend({}).create({
    id: contadorID,
    name: nick,
    title: nombre,
    code: codigo,
    ancho: 100,
    alto: 400
  });

  items.push(obj);

  contadorID += 1;
}

crear_ejemplo("interpolaciones", "Interpolar propiedades",
  `
    pilas.fondos.plano();
    let actor = pilas.actores.nave();

    actor.interpolar('escala', [2, 1]);
    window.nave = actor;
  `);

crear_ejemplo("personalizado", "Actor Personalizado",
  `
  class MiActor extends pilasengine.Actor {
    velocidad;

    iniciar(opciones) {
      this.x = opciones.x;
      this.velocidad = 1;
      //console.log("llamaron a iniciar asi", opciones);
    }

    actualizar() {
      //console.log("actualiza", this.velocidad);
      this.rotacion += 5;
    }
  }

  //pilas.actualizaciones_por_segundo = 1;

  pilas.actores.vincular(MiActor);
  let unActor = pilas.actores.MiActor({x: 0, y: 0});
  unActor.imagen = "data:patito.png";

  pilas.fondos.plano();

  `);

crear_ejemplo("escena_normal", "Hola mundo",
  `
    pilas.escenas.normal();
    let patito = pilas.actores.patito();
    patito.escala = [2, 1];
  `);

crear_ejemplo("disparo", "Nave dispara",
  `
    pilas.escenas.normal();
    let actor = pilas.actores.actor();
    actor.aprender("SeguirClicks");
    actor.rotacion = [360];
  `);

crear_ejemplo("nave", "Actor Nave",
  `
    pilas.fondos.plano();
    let actor = pilas.actores.nave();
  `);


export default Ember.Service.extend({
  find(id) {
    return items.findBy("id", id);
  },
  findAll() {
    return items;
  }
});
