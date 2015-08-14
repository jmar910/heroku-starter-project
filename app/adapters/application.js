import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: function() {
    let headers = { "Accept" : "application/vnd.heroku+json; version=3" }
    if (this.get('session.authToken')) {
      headers["Authorization"] = "Bearer " + this.get('session.authToken');
    }

    return headers;
  }.property('session.authToken'),

  host: 'https://api.heroku.com',

  pathForType(modelName) {
    let dasherized = Ember.String.dasherize(modelName);
    return Ember.String.pluralize(dasherized);
  }
});
