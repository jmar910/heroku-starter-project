import Ember from 'ember';

export default Ember.Component.extend({
  theAction: 'filterModels',

  classNames: ['filter-link'],

  classNameBindings: ['isActive:active'],

  isActive: function() {
    let currentFilterType = this.get('currentFilterType');
    let myType = this.get('type')
    return currentFilterType === myType
  }.property('currentFilterType'),

  click() {
    this.sendAction('theAction', this.get('type'))
  }

});
