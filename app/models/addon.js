import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  addonService: DS.attr(),
  plan: DS.attr(),

  planName: function() {
    let plan = this.get('plan');

    return plan.name.split(':')[1]
  }.property('plan')
});
