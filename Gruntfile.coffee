loadGruntTasks = require('load-grunt-tasks')

config =
    app: 'app'

module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON('package.json')
        connect:
            server:
                options:
                    base: config.app
                    port: 8080
                    keepalive: true


    loadGruntTasks grunt

    grunt.registerTask "default", ["uglify"]
