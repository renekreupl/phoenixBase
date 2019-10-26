const gulp			= require('gulp');
const tasks 		= require('gulp-task-listing');

gulp.task('default', function(done) {
	tasks.withFilters(null, 'default')();
	done();
});



gulp.task("help", help);
