import Ember from 'ember';

export default Ember.Component.extend({
  sweetalert: Ember.inject.service(),

  tagName: "",
  actions: {
    change() {
      let options = {
                      title: "Título",
                      text: "Ingresá un título nuevo:",
                      type: "input",
                      inputPlaceholder: this.get("title"),
                      cancelButtonText: "Cancelar",
                      showCancelButton: true};

      this.get("sweetalert").prompt(options).then((data) => {
        this.set("title", data);
      });
    }
  }
});
