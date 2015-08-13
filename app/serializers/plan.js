import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractArray: function(store, type, payload) {

    payload.forEach(function(plan) {
      let addonName = plan.name.split(':')[0];
      plan.links = { addonService: '/addon-service/' + addonName };
    });

    payload = { plans: payload };

    return this._super(store, type, payload);
  }
});
