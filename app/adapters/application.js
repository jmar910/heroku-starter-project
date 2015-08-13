import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.heroku.com',
  
  pathForType(modelName) {
    var dasherized = Ember.String.dasherize(modelName);
    return Ember.String.pluralize(dasherized);
  }
});
