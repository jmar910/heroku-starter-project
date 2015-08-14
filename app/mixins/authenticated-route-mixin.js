import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel() {
    if ( !this.get('session.authToken') && !this.get('session.isAuthenticated') ) {
      this.transitionTo('login');
    }
  }
});
