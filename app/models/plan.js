import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  humanName: DS.attr('string'),
  price: DS.attr(),

  addonService: DS.belongsTo('addon-service')
});
