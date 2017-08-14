var gulp			= require('gulp');
var notify          = require('gulp-notify');
var sass 			= require('gulp-sass');
var autoprefixer 	= require('gulp-autoprefixer');
var sourcemaps 		= require('gulp-sourcemaps');
var rename          = require('gulp-rename');
var config 			= require('../config').sass;

gulp.task('sass', function() {
	return gulp.src( [
		config.src+'/**/*.scss',
		'!src/sass/core/sprite-template.scss'
	] )
		.pipe(sourcemaps.init())
		.pipe(rename({ suffix: '.min'}))
		.pipe(sass( config.output )
			.on('error', sass.logError)
			.on('error', notify.onError('Sass Compile Error!')))
		.pipe(autoprefixer( config.autoprefixer ))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest( config.build ))
		.pipe(notify({ message: 'Yo, Sass task complete.' }));
});

gulp.task('watch:sass', function () {
	gulp.watch( config.src+'/**/*.scss' , ['sass']);
});
