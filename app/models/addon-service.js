import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  humanName: DS.attr('string'),
  plans: DS.hasMany('plan', { async: true })
});
