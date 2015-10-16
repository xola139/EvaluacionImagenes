module.exports = function (grunt) {

 grunt.initConfig({
express: {
    options: {
      // Override defaults here 
    },
    dev: {
      options: {
        script: 'app.js'
      }
    },
    prod: {
      options: {
        script: 'path/to/prod/server.js',
        node_env: 'production'
      }
    },
    test: {
      options: {
        script: 'path/to/test/server.js'
      }
    }
  },


  watch: {
      project: {
        files: ['public/javascripts/*.js', 
                'public/stylesheets/*.css',
                'views/*.ejs'],
        options: {
          livereload: true
        },
        express: {
          files:  [ '**/*.js' ],
          tasks:  [ 'express:dev' ],
          options: {
            spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded 
          }
        }



      }
    }

});
 
 grunt.loadNpmTasks('grunt-express-server'); 
 grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', [ 'express:dev', 'watch' ])

  //grunt.registerTask('default', [ 'watch','express']);

  //grunt.registerTask('dev', ['rebuild', 'express', 'watch']);

};
