var gulp			= require('gulp');
var notify          = require('gulp-notify');
var scsslint 		= require('gulp-scss-lint');
var config 			= require('../config').sass;

gulp.task('scss-lint', function() {
	return gulp.src( [config.src, '!src/sass/vendor/*.scss'] )
		.pipe(scsslint({
			'config': 'scss-lint.yml',
			'reporterOutput': 'scssReport.json',
			'maxBuffer': 300000000007200
		}));
});
