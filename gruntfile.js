/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: 'vars',
        boss: true,
        eqnull: true,
        loopfunc: true,
        node: true
      },
      gruntfile: {
          src: 'Gruntfile.js'
      },
      src: {
        src: ['src/**/*.js']
      },
    },

    execute: {
      target: {
        src: ['src/index.js']
      }
    },

    'node-inspector': {
      custom: {
        options: {
          'web-port': 8086
        }
      }
    },

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-node-inspector');

  // Default task.
  grunt.registerTask('default', ['jshint', 'execute']);

};