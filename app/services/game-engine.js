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
