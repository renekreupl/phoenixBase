const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const config 		= require('../config').js;

gulp.task('scripts', function() {
	return gulp.src( config.src+'/**/*.js' )
		.pipe(use.sourcemaps.init())
		.pipe(use.uglify())
		.pipe(use.concat('main.min.js'))
		.pipe(use.sourcemaps.write('./maps'))
		.pipe(use.plumber({errorHandler: use.notify.onError("Error: <%= error.message %>")}))
		.pipe(gulp.dest( config.build ))
		.pipe(use.notify({ message: 'Yo, Script task complete.' }));
});

gulp.task('watch:scripts', function () {
	gulp.watch( config.src+'/**/*.js' , ['scripts']);
});
