const gulp			= require('gulp');
const notify          = require('gulp-notify');
const sass 			= require('gulp-sass');
const autoprefixer 	= require('gulp-autoprefixer');
const sourcemaps 		= require('gulp-sourcemaps');
const rename          = require('gulp-rename');
const config 			= require('../config').sass;

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
