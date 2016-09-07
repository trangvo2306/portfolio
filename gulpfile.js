// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var compass = require('compass-importer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
//var bourbon = require('node-bourbon');
var browserSync = require('browser-sync').create();


//static server
gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: './'
    }) ;

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch(['./*.html' , './**/*.html'], ['html']).on('change', browserSync.reload);
});

gulp.task('sass', function(){
    gulp.src('./sass/*.scss')
        .pipe(sass({importer: compass, includePaths: require('node-bourbon').includePaths}).on('error', sass.logError))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('html', function(){
    //gulp.src('./*.html, ./**/*.html');
    gulp.src(['./*.html' , './**/*.html']);
});

gulp.task('default', ['serve']);
