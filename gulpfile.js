var gulp = require('gulp');
var stylus = require('gulp-stylus');

//Para Automatizar la generacion del css use gulp, que estaria vigilando los cambios en el archivo de stylus

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
