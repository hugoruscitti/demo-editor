import Ember from 'ember';

export default Ember.Service.extend({
  needStart: true,
  gameInstance: null,

  start() {
    return new Ember.RSVP.Promise((success) => {

      if (this.get("needStart")) {
        this.set("needStart", false);

        console.log("gameEngine: iniciando .... ");

        console.log("gameEngine: faltan 3 segundos ...");
        setTimeout(() => {console.log("gameEngine: faltan 2 segundos ...");}, 1000);
        setTimeout(() => {console.log("gameEngine: faltan 1 segundos ...");}, 2000);

        setTimeout(() => {
          this.set("gameInstance", {title: "status"});

          console.log("gameEngine: LISTO, inició !!!");
          success();
        }, 3000);
      } else {
        console.log("gameEngine: Ya se inicializó.");
        success();
      }

    });
  }
});
