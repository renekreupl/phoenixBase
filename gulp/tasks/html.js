const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const config 		= require('../config').html;

gulp.task('html', function() {
	return gulp.src( config.src+'/*.html' )
		.pipe(use.twig())
		.pipe(use.htmlmin({collapseWhitespace: true}))
		.pipe(use.plumber({errorHandler: use.notify.onError("Error: <%= error.message %>")}))
		.pipe(gulp.dest( config.build ))
		.pipe(use.notify({ message: 'Yo, HTML task complete.' }));
});

gulp.task('watch:html', function () {
	gulp.watch( config.src+'/**/*.html' , ['html']);
});
