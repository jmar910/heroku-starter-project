import Ember from 'ember';

export default Ember.Controller.extend({
  filteredModels: Ember.computed('filterType', function() {
    let type = this.get('filterType');

    if (type === 'all') {
      return this.get('model');
    }
    else {
      return this.get('model').filterBy('state', type);
    }
  }),

  filterType: 'all',

  actions: {
    filterModels(type) {
      this.set('filterType', type);
    }
  }

});
