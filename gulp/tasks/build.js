const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const runSequence 	= require('run-sequence');
const config 		= require('../config');


gulp.task('build', function() {

	runSequence.apply(null, config.build);

	//Copy pace.min.js
	gulp.src('./node_modules/pace-progress/pace.min.js')
		.pipe(gulp.dest(config.js.src))
		.pipe(use.notify({ message: 'Copy pace.min.js successful' }));

	//Copy lazysizes.min.js
	gulp.src('./node_modules/lazysizes/lazysizes.js')
		.pipe(gulp.dest(config.js.src))
		.pipe(use.notify({ message: 'Copy lazysizes.min.js successful' }));

	// build modernizr
	gulp.src(config.js.src+'/**/*.js')
		.pipe(use.modernizr('modernizr.min.js'))
		.pipe(use.uglify())
		.pipe(gulp.dest( config.vendor.paths.js ))
		.pipe(use.notify({ message: 'modernizr.min.js generated' }));
});
