import Ember from 'ember';
import AuthenticatedRouteMixin from '../mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  afterModel() {
    let addonServices = this.store.findAll('addon-service');
    let controller = this.controllerFor('app');
    controller.set('addonServices', addonServices);
  }
});
