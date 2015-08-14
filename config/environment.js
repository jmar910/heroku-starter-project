/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'heroku-starter-project',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii: {
     // a 'session' property will be injected on routes and controllers
     apiSecret: 'b2150b34-43f6-4a6d-b2f0-5fc40e443b7d',
     sessionServiceName: 'session',
     providers: {
       'heroku-oauth2': {
         apiKey:      'e9b1ffbe-31fa-48c2-abba-057f04a6cdc8',
         redirectUri: 'http://localhost:4200/login/oauth'
       }
     }
   },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' https://api.heroku.com",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
