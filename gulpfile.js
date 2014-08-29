var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');

gulp.task('js-hardcore-mode', function() {
  var match = ['**/*.js', '!node_modules/**/*.js'];
  var watcher = gulp.watch(match, function() {
    return gulp.src(match)
      .pipe(jshint())
      .pipe(jshint.reporter('fail'))
      .once('error', function() {
        console.log('--- GAME OVER ---');
        watcher.end();
        return gulp.src('*', {dot: true})
          .pipe(clean())
        ;
      })
    ;
  });
  watcher.on('ready', function() {
    console.log("You are writing JavaScript in Hardcore Mode.");
  });
});