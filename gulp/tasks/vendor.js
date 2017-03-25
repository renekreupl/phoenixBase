var gulp			= require('gulp');
var notify          = require('gulp-notify');
var rename          = require('gulp-rename');
var config 			= require('../config').vendor;

gulp.task('vendor', function() {

	//Copy JS Files from Config File
	gulp.src(config.js)
		.pipe(gulp.dest(config.paths.js))
		.pipe(notify({ message: 'Copy Vendor JS Files. Please check it out' }));

});
