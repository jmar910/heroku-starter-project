import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('addon-services');
  this.route('addon-service', { path: '/addon-services/:addon-service_id' });
  this.route('apps');
  this.route('app',  { path: '/apps/:app_id' });
});

export default Router;
