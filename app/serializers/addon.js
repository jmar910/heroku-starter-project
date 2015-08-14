import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractArray: function(store, type, payload) {

    payload = { addons: payload };

    return this._super(store, type, payload);
  }
});
