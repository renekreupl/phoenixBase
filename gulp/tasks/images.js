const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const config 		= require('../config').img;

gulp.task('images', function() {
	return gulp.src(config.src+'/**/*')
		.pipe(use.changed(config.build))
		.pipe(use.imagemin(config.options))
		.pipe(gulp.dest(config.build))
		.pipe(use.notify({ message: 'Yo, Image task complete.' }));
});

gulp.task('watch:images', function () {
	gulp.watch( config.src+'/**/*' , ['images']);
});
