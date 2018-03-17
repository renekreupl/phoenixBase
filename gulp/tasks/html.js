const gulp			= require('gulp');
const notify          = require('gulp-notify');
const htmlmin 		= require('gulp-htmlmin');
const plumber 		= require('gulp-plumber');
const twig 			= require('gulp-twig');
const config 			= require('../config').html;

gulp.task('html', function() {
	return gulp.src( config.src+'/*.html' )
		.pipe(twig())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(gulp.dest( config.build ))
		.pipe(notify({ message: 'Yo, HTML task complete.' }));
});

gulp.task('watch:html', function () {
	gulp.watch( config.src+'/**/*.html' , ['html']);
});
