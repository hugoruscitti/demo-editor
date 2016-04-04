import Ember from 'ember';

var s = 10;

export default Ember.Service.extend({
  needStart: true,
  gameInstance: null,

  start() {
    return new Ember.RSVP.Promise((success) => {

      if (this.get("needStart")) {
        this.set("needStart", false);

        console.log("gameEngine: iniciando .... ");

        console.log("gameEngine: faltan 3 segundos ...");
        setTimeout(() => {console.log("gameEngine: faltan 2 segundos ...");}, s*1);
        setTimeout(() => {console.log("gameEngine: faltan 1 segundos ...");}, s*2);

        setTimeout(() => {
          this.set("gameInstance", {title: "status"});

          console.log("gameEngine: LISTO, inició !!!");
          success();
        }, s*3);
      } else {
        console.log("gameEngine: Ya se inicializó.");
        success();
      }

    });
  }
});
