var gulp			= require('gulp');
var notify          = require('gulp-notify');
var htmlmin 		= require('gulp-htmlmin');
var config 			= require('../config').html;

gulp.task('html', function() {
	return gulp.src( config.src )
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest( config.build ))
		.pipe(notify({ message: 'Yo, HTML task complete.' }));
});

gulp.task('watch:html', function () {
	gulp.watch( config.src , ['html']);
});
