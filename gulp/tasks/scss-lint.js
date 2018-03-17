const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const config 		= require('../config').sass;

gulp.task('scss-lint', function() {
	return gulp.src( [config.src, '!src/sass/vendor/*.scss'] )
		.pipe(use.scsslint({
			'config': 'scss-lint.yml',
			'reporterOutput': 'scssReport.json',
			'maxBuffer': 300000000007200
		}));
});
