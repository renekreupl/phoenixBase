const gulp			= require('gulp');
const notify          = require('gulp-notify');
const rename          = require('gulp-rename');
const config 			= require('../config').vendor;

gulp.task('vendor', function() {

	//Copy JS Files from Config File
	gulp.src(config.js)
		.pipe(gulp.dest(config.paths.js))
		.pipe(notify({ message: 'Copy Vendor JS Files. Please check it out' }));

	//Copy Sass Files from Config File
	gulp.src(config.sass)
		.pipe(gulp.dest(config.paths.sass))
		.pipe(notify({ message: 'Copy Vendor Sass Files. Please check it out' }));
});
