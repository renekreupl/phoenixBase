var gulp			= require('gulp');
var notify          = require('gulp-notify');
var changed 		= require('gulp-changed');
var config 			= require('../config').fonts;

gulp.task('fonts', function() {
	return gulp.src(config.src+'/*')
		.pipe(changed(config.build))
		.pipe(gulp.dest(config.build))
		.pipe(notify({ message: 'Yo, Fonts task complete.' }));
});

gulp.task('watch:fonts', function () {
	gulp.watch( config.src+'/*' , ['fonts']);
});
