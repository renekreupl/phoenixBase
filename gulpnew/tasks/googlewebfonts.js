const gulp				= require('gulp');
const use			= require('gulp-load-plugins')();
const googleWebFonts = require('gulp-google-webfonts');
const config 			= require('../config').fonts;

gulp.task('googlefonts', function () {
	return gulp.src('./fonts.list')
		.pipe(googleWebFonts(config.googlefonts))
		.pipe(gulp.dest(config.src))
		.pipe(use.notify({ message: 'Yo, Google Fonts task complete.' }));
});
