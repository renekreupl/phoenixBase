var gulp			= require('gulp');
var notify          = require('gulp-notify');
var sourcemaps 		= require('gulp-sourcemaps');
var plumber 		= require('gulp-plumber');
var uglify 			= require('gulp-uglify');
var concat 			= require('gulp-concat');
var config 			= require('../config').js;

gulp.task('scripts', function() {
	return gulp.src( config.src )
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(sourcemaps.write('./maps'))
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(gulp.dest( config.build ))
		.pipe(notify({ message: 'Yo, Script task complete.' }));
});

gulp.task('watch:scripts', function () {
	gulp.watch( config.src , ['scripts']);
});
