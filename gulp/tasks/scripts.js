const gulp			= require('gulp');
const notify          = require('gulp-notify');
const sourcemaps 		= require('gulp-sourcemaps');
const plumber 		= require('gulp-plumber');
const uglify 			= require('gulp-uglify');
const concat 			= require('gulp-concat');
const config 			= require('../config').js;

gulp.task('scripts', function() {
	return gulp.src( config.src+'/**/*.js' )
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(sourcemaps.write('./maps'))
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(gulp.dest( config.build ))
		.pipe(notify({ message: 'Yo, Script task complete.' }));
});

gulp.task('watch:scripts', function () {
	gulp.watch( config.src+'/**/*.js' , ['scripts']);
});
