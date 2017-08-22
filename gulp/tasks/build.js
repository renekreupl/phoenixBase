var gulp			= require('gulp');
var notify          = require('gulp-notify');
var modernizr 		= require('gulp-modernizr');
var uglify 			= require('gulp-uglify');
var runSequence 	= require('run-sequence');
var config 			= require('../config');


gulp.task('build', function() {

	runSequence.apply(null, config.build);

	//Copy pace.min.js
	gulp.src('./node_modules/pace-progress/pace.min.js')
		.pipe(gulp.dest(config.js.src))
		.pipe(notify({ message: 'Copy pace.min.js successful' }));

	//Copy lazysizes.min.js
	gulp.src('./node_modules/lazysizes/lazysizes.min.js')
		.pipe(gulp.dest(config.js.src))
		.pipe(notify({ message: 'Copy lazysizes.min.js successful' }));

	// build modernizr
	gulp.src(config.js.src+'/**/*.js')
		.pipe(modernizr('modernizr.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest( config.vendor.paths.js ))
		.pipe(notify({ message: 'modernizr.min.js generated' }));
});
