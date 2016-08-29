/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pilas-editor',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.keen = {
    logRequests: true
  };

  ENV.KEEN_PROJECT_ID = '57225fe1bcb79c255133ab76';
  ENV.KEEN_WRITE_KEY = '8548e64c285350eb4e35395529b70264fa8121f57618146948964a08aa1776295542abcffaebd98ff86009f706682371eb19bfd3ee1c265e8dca1628e73e2a83ec0870539201639e6db28f8acc7ebf379b365eaf674e8ebf7bc648ab3e078c8f';

  if (environment === 'development') {

    ENV.keen = {
      logRequests: false
    };

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

    ENV.keen = {
      logRequests: false
    };
  }

  if (environment === 'production') {

  }

  return ENV;
};
