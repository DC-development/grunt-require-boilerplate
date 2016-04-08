module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'scripts/**/*.js']
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./scripts",
                    paths: {
                        requireLib: '../node_modules/requirejs/require'
                    },
                    name: "main",
                    out: "dist/main.min.js",
                    include: ["requireLib"],
                    optimize: "none"
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'requirejs']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint', 'requirejs']);

};