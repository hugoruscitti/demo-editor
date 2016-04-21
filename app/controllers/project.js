import Ember from 'ember';

export default Ember.Controller.extend({
  sweetalert: Ember.inject.service(),
  actions: {
    remove(project) {
      project.destroyRecord();
    },
    newProject() {

      let options = {
                      title: "Creando un proyecto",
                      text: "Ingresá un título para el proyecto:",
                      type: "input",
                      inputPlaceholder: this.get("title"),
                      cancelButtonText: "Cancelar",
                      confirmButtonText: "Crear proyecto",
                      showCancelButton: true};

      this.get("sweetalert").prompt(options).then((name) => {
        let record = this.store.createRecord("project", {
          title: name,
          ancho: 640,
          alto: 480,
          code: "let pilas;\npilas.fondos.plano();"
        });

        record.save().then(() => {
          this.transitionToRoute("edit", record);
        });
      });

    }
  }
});
