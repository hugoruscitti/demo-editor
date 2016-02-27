import Ember from 'ember';

export default Ember.Controller.extend({
  preferences: Ember.inject.service(),

  actions: {
    toggleModal() {
      this.transitionToRoute('index');
    },
    changeTheme() {
      var currentTheme = this.get("preferences.currentTheme");
      var themesCounter = this.get("preferences.themes").length;

      currentTheme += 1;

      if (currentTheme >= themesCounter) {
        currentTheme = 0;
      }

      this.set("preferences.currentTheme", currentTheme);
      this.set("preferences.theme", this.get("preferences.themes")[currentTheme]);
    }

  }
});
