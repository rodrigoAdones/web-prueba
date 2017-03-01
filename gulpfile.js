var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('cssCompress', function () {
  return gulp.src('./src/stylus/index.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function() {
  gulp.watch('./src/stylus/index.styl', ['cssCompress']);
});

gulp.task('default',['watch'])
