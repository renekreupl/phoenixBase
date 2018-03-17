const gulp			= require('gulp');
const notify          = require('gulp-notify');
const changed 		= require('gulp-changed');
const imagemin 		= require('gulp-imagemin');
const config 			= require('../config').img;

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
