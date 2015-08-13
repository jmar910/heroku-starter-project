import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  headers: {
    "Accept" : "application/vnd.heroku+json; version=3"
  }
});
