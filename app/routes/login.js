import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn: function() {
      this.get('session').open('heroku-oauth2').then((data) => {
        this.get('session').set('isAuthenticated', true)
        this.transitionTo('apps');
      });
    }
  }
});
