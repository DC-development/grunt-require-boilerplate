module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js',
                'scripts/helper/**/*.js',
                'scripts/util/**/*.js',
                'scripts/*.js'
            ],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./scripts",
                    paths: {
                        requireLib: 'libs/require'
                    },
                    name: "main",
                    out: "dist/main.min.js",
                    include: ["requireLib"]
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