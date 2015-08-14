import ApplicationAdapter from 'torii/adapters/application';
import { configurable } from 'torii/configuration';

export default ApplicationAdapter.extend({

  tokenEndpoint: 'https://api.heroku.com/oauth/tokens',
  apiSecret: configurable('apiSecret'),

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

      return {
        authToken: data.access_token.token
      };
    });

  },

  close: function() {
    return new Ember.RSVP.Promise(function(resolve, reject){
      resolve();
    });
  }
});
