module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      'js-hardcore-mode': {
        files: ['**/*.js', '!node_modules/**/*.js'],
        tasks: ['force-jshint', 'js-hardcore-mode-check']
      }
    }
    ,
    jshint: {
      'js-hardcore-mode': {
        src:['**/*.js', '!node_modules/**/*.js'],
        options: {
          laxcomma: true
        }
      }
    },
    clean: {
      'js-hardcore-mode': {
        dot: true,
        src: '*'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('js-hardcore-mode', function() {
    grunt.task.run('watch:js-hardcore-mode');
    grunt.log.ok('\n');
    grunt.log.ok("You are writing JavaScript in Hardcore Mode.");
  });
  grunt.registerTask('force-jshint', function() {
    grunt.option('force', true);
    grunt.task.run('jshint');
  });
  grunt.registerTask('js-hardcore-mode-check', function() {
    if (grunt.fail.warncount) {
      grunt.log.warn('\n');
      grunt.task.run(['clean:js-hardcore-mode', 'js-hardcore-mode-game-over']);
    }
  });
  grunt.registerTask('js-hardcore-mode-game-over', function() {
    grunt.fatal('\n--- GAME OVER ---\n');
  });

};