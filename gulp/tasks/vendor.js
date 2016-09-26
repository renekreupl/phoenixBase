var gulp			= require('gulp');
var notify          = require('gulp-notify');
var rename          = require('gulp-rename');
var config 			= require('../config').vendor;

gulp.task('vendor', function() {

	//Copy normalize.css and rename it to a scss file
	gulp.src('./node_modules/normalize.css/normalize.css')
		.pipe(rename("_normalize.scss"))
		.pipe(gulp.dest( config.paths.sass))
		.pipe(notify({ message: 'Copy normalize.css successful' }));

	//Copy _include-media.scss
	gulp.src('./node_modules/include-media/dist/_include-media.scss')
		.pipe(gulp.dest( config.paths.sass))
		.pipe(notify({ message: 'Copy _include-media.scss successful' }));

	//Copy JS Files from Config File
	gulp.src(config.js)
		.pipe(gulp.dest(config.paths.js))
		.pipe(notify({ message: 'Copy Vendor JS Files. Please check it out' }));

});
