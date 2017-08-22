var gulp			= require('gulp');
var notify          = require('gulp-notify');
var changed 		= require('gulp-changed');
var imagemin 		= require('gulp-imagemin');
var config 			= require('../config').img;

gulp.task('images', function() {
	return gulp.src(config.src+'/**/*')
		.pipe(changed(config.build))
		.pipe(imagemin(config.options))
		.pipe(gulp.dest(config.build))
		.pipe(notify({ message: 'Yo, Image task complete.' }));
});

gulp.task('watch:images', function () {
	gulp.watch( config.src+'/**/*' , ['images']);
});
