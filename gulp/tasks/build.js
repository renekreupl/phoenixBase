var gulp			= require('gulp');
var notify          = require('gulp-notify');
var modernizr 		= require('gulp-modernizr');
var uglify 			= require('gulp-uglify');
var config 			= require('../config');

gulp.task('build', config.build, function() {

	// build modernizr
	gulp.src(config.js.src)
		.pipe(modernizr('modernizr.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest( config.vendor.paths.js ))
		.pipe(notify({ message: 'modernizr.min.js generated' }));
});
