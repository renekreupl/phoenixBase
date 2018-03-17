const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const config 		= require('../config').fonts;

gulp.task('fonts', function() {
	return gulp.src(config.src+'/*')
		.pipe(use.changed(config.build))
		.pipe(gulp.dest(config.build))
		.pipe(use.notify({ message: 'Yo, Fonts task complete.' }));
});

gulp.task('watch:fonts', function () {
	gulp.watch( config.src+'/*' , ['fonts']);
});
