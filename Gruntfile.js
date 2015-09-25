module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: { // App specific
                options: {
                    compress: true,
                    cleancss: true
                },
                files: {
                    "css/default.css" : "css/default.less"
                }
            }
        },
        watch: {
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: ['css/*.less'],
                tasks: ['less'],
                options: {
                    livereload: false, // One day...
                    nospawn: true
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};