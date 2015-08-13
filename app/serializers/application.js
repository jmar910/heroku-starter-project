import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForAttribute(attr, method) {
    if (method === 'serialize') {
      return Ember.String.camelize(attr);

    }
    
    else if (method === 'deserialize') {
      return Ember.String.decamelize(attr);
    }
  }
});
