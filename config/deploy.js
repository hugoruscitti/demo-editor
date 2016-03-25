/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    'ssh-index': {
      remoteDir: "/home/hugoruscitti/editor.pilas-engine.com.ar/",
      host: "162.243.50.192",
      username: "hugoruscitti",
      privateKeyFile: "/Users/hugo/.ssh/id_rsa",
      allowOverwrite: true
    },
    rsync: {
      dest: "/home/hugoruscitti/editor.pilas-engine.com.ar",
      username: "hugoruscitti",
      host: "162.243.50.192",
      delete: false
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
