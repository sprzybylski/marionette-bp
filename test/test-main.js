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
        'test/spec': '../test/spec'
    },
    callback: window.__karma__.start
});
