import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractArray: function(store, type, payload) {

    payload.forEach(function(app) {
      app.links = { addons: "/apps/" + app.name + "/addons"};
    });

    payload = { apps: payload };

    return this._super(store, type, payload);
  },

  extractSingle: function(store, type, payload) {
    payload.links = { addons: "/apps/" + payload.name + "/addons"};

    payload = { app: payload };
    return this._super(store, type, payload);
  }
});
