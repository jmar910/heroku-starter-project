import ApplicationSerializer from './application'

export default ApplicationSerializer.extend({
  extractArray: function(store, type, payload) {

    payload.forEach(function(as) {
      as.links = { plans: "/addon-services/" + as.name + "/plans"};
    });

    payload = { addonServices: payload };

    return this._super(store, type, payload);
  },

  extractSingle: function(store, type, payload) {
    payload.links = { plans: "/addon-services/" + payload.name + "/plans"};

    payload = { addonService: payload };
    return this._super(store, type, payload);
  }
});
