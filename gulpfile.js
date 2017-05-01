var gulp = require('gulp');
var gulpWatch = require('gulp-watch');
var postCss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();
var mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/styles/main.css')
    .pipe(postCss([cssImport, cssVars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('watch', function() {
  gulpWatch('./app/styles/main.css', function() {
    gulp.start('styles');
  });
});
