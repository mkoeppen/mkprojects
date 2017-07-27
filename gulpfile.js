var gulp = require('gulp');
var del = require('del');

var paths = {
  source: {
    root: 'src',
    scripts: ['src/js/**/*.js', 'src/js/**/*.ts'],
    styles: ['src/styles/**/*.css', 'src/styles/**/*.scss']
  },
  build: {
    root: 'build',
    scripts: ['build/js/'],
    styles: ['build/styles/']
  }
};

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

gulp.task('styles', ['clean'], function() {
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['images']);
});

gulp.task('default', ['watch', 'scripts', 'styles']);
