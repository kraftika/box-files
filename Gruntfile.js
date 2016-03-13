module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    express: {
      options: {
      },
      dev: {
        options: {
          script: 'server/server.js'
        }
      },
      prod: {
        options: {
          script: 'server/server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server/server.js'
        }
      }
    },
    watch: {
      frontend: {
        options: {
          livereload: true
        },
        files: [
          // triggering livereload when the .css file is updated
          // (compared to triggering when sass completes)
          // allows livereload to not do a full page refresh
          'app/**/*.js',
          'app/**/*.html',
          '*.html'
        ]
      },
      web: {
        files: [
          'server/**/*.js'
        ],
        tasks: [
          'express:dev'
        ],
        options: {
          nospawn: true, //Without this option specified express won't be reloaded
          atBegin: true,
        }
      }
    },
    web: {
      files: [
        'server/**/*.js'
      ],
      tasks: [
        'express:dev'
      ],
      options: {
        nospawn: true, //Without this option specified express won't be reloaded
        atBegin: true,
      }
    },
    parallel: {
      web: {
        options: {
          stream: true
        },
        tasks: [{
          grunt: true,
          args: ['watch:frontend']
        }, {
          grunt: true,
          args: ['watch:web']
        }]
      },
    }
  });

  grunt.registerTask('web', 'launch webserver and watch tasks', [
    'parallel:web',
  ]);

  grunt.registerTask('default', ['web']);
}
