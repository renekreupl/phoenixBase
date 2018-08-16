const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const config 		= require('../config').vendor;

gulp.task('vendor', function() {

	//Copy JS Files from Config File
	gulp.src(config.js)
		.pipe(gulp.dest(config.paths.js))
		.pipe(use.notify({ message: 'Copy Vendor JS Files. Please check it out' }));

	//Copy CSS Files from Config File
	gulp.src(config.css, { base: process.cwd() })
		.pipe(use.rename({
			dirname: "",
			extname: ".scss"
		}))
		.pipe(use.replace('../img/', '../Images/'))
		.pipe(use.replace('../fonts/', '../Fonts/'))
		.pipe(gulp.dest(config.paths.sass))
		.pipe(use.notify({ message: 'Copy Vendor CSS Files. Please check it out' }));

	//Copy Sass Files from Config File
	gulp.src(config.sass)
		.pipe(gulp.dest(config.paths.sass))
		.pipe(use.notify({ message: 'Copy Vendor Sass Files. Please check it out' }));





});
