import ApplicationAdapter from 'torii/adapters/application';

export default ApplicationAdapter.extend({

  // The authorization argument passed in to `session.open` here is
  // the result of the `torii.open(providerName)` promise
  open: function(authorization) {
    console.log('open');

  }
});
