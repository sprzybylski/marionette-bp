var TEST_REGEXP = /test\/spec[\s\S]*(\.coffee)?(\.js)?$/i;
var allTestFiles = [];

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '').replace(/\.cofee$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    baseUrl: '/base/app',
    deps: allTestFiles,
    paths: {
        'test/spec': '../test/spec',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore',
        jquery: 'bower_components/jquery/dist/jquery',
        marionette: 'bower_components/marionette/lib/backbone.marionette'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        }
    },
    callback: window.__karma__.start
});
