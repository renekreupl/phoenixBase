const gulp			= require('gulp');
const notify          = require('gulp-notify');
const changed 		= require('gulp-changed');
const config 			= require('../config').fonts;

gulp.task('fonts', function() {
	return gulp.src(config.src+'/*')
		.pipe(changed(config.build))
		.pipe(gulp.dest(config.build))
		.pipe(notify({ message: 'Yo, Fonts task complete.' }));
});

gulp.task('watch:fonts', function () {
	gulp.watch( config.src+'/*' , ['fonts']);
});
