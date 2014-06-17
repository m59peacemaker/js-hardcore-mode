var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');

var jsSrc = 'src/**/*.js';

gulp.task('js-hardcore-mode', function() {
  return gulp.watch(jsSrc, function() {
    return gulp.src(jsSrc)
      .pipe(jshint())
      .pipe(jshint.reporter('fail'))
      .on('error', function() {
        console.log('GAME OVER.');
        return gulp.src([
          'src/**/*',
          'build/**/*'
        ])
          .pipe(clean())
        ;
      })
    ;
  });
});