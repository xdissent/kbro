'use strict';

module.exports = function(karma) {
  karma.set({

    frameworks: [ 'jasmine', 'browserify' ],

    files: [
      'vendor/external.js',
      // common-js source file, accidently included
      // (there is usually no reason to do this. We should not fail though if you try ;-)
      'lib/a.js',
      'test/**/*Spec.js'
    ],

    reporters: [ 'dots' ],

    preprocessors: {
      // common-js source file, accidently included
      // (there is usually no reason to do this. We should not fail though if you try ;-)
      'lib/*.js': [ 'browserify' ],
      'test/**/*Spec.js': [ 'browserify' ]
    },

    browsers: [ 'PhantomJS' ],

    logLevel: 'LOG_DEBUG',

    singleRun: true,
    autoWatch: false,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [ 'brfs' ]
    }
  });
};
