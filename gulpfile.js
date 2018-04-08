'use strict';

// include the required packages.
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require ('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

// paths
var sourceCss = './assets/stylesheets';
var destinationCss = './public/css';
var sourceHtml = './src';
var destinationHtml = './public';

gulp.task('build', function () {
  gulp.src(sourceCss + '/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(destinationCss));
});

gulp.task('buildHtml', function () {
  gulp.src(sourceHtml + '/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(destinationHtml))
});

gulp.task('minify-css',() => {
  gulp.src(destinationCss + '/styles.scss')
    .pipe(cleanCSS())
    .pipe(gulp.dest(destinationCss));
});

gulp.task('watch', function () {
  gulp.watch(sourceCss + '/*.scss', ['build']);
  gulp.watch(sourceHtml + '/*.html', ['buildHtml']);
});

// Default gulp task to run
gulp.task('default', ['build']);
