import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  code: DS.attr('string'),
  ancho: DS.attr('number'),
  alto: DS.attr('number')
});
