import Ember from 'ember';

export default Ember.Controller.extend({

  filteredModels: Ember.computed('filterType', 'filterText', function() {
    let type = this.get('filterType');

    let searchFilteredModels = this._searchFilter();

    if (type === 'all') {
      return searchFilteredModels;
    }
    else {
      return searchFilteredModels.filterBy('state', type);
    }
  }),

  filterType: 'all',

  filterText: '',

  _searchFilter: function() {
    let models = this.get('model');
    let filterText = this.get('filterText');

    return models.filter(function(model) {
      return model.get('humanName').toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    });
  },

  actions: {
    filterModels(type) {
      this.set('filterType', type);
    }
  }

});
