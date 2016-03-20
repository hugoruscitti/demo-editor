import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    remove(project) {
      project.destroyRecord();
    },
    newProject() {
      let name = prompt("Indique el nombre del proyecto");

      if (name) {
        let record = this.store.createRecord("project", {
          title: name,
          code: "let pilas;\npilas.fondos.Plano();"
        });

        record.save().then((data) => {
          this.transitionToRoute("edit", record);
        });
      }
    }
  }
});
