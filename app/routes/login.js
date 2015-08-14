import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn: function() {
      // The provider name is passed to `open`
      this.get('session').open('heroku-oauth2');
    }
  }
});
