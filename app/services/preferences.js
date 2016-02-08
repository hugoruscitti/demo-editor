import Ember from 'ember';

export default Ember.Service.extend({
  vimMode: true,
  theme: 'monokai',

  themes: ['xcode', 'monokai'],
  currentTheme: 1
});
