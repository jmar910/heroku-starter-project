import ApplicationAdapter from 'torii/adapters/application';
import { configurable } from 'torii/configuration';

export default ApplicationAdapter.extend({

  tokenEndpoint: 'https://api.heroku.com/oauth/tokens',
  apiSecret: configurable('apiSecret'),

  // The authorization argument passed in to `session.open` here is
  // the result of the `torii.open(providerName)` promise
  open: function(authorization) {
    let authCode = authorization.authorizationCode;
    let that = this;

    return new Ember.RSVP.Promise(function(resolve, reject){
      Ember.$.ajax({
        url: that.get('tokenEndpoint'),
        type: 'POST',
        data: {
          'grant_type': 'authorization_code',
          'code' : authCode,
          'client_secret' : that.get('apiSecret')
        },
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then(function(data){
      // The returned object is merged onto the session (basically). Here
      // you may also want to persist the new session with cookies or via
      // localStorage.
      return {
        authToken: data.accessToken
      };
    });

  }
});
