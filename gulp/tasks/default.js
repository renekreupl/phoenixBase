const gulp			= require('gulp');
const tasks 		= require('gulp-task-listing');

gulp.task('default', function() {
	return tasks.withFilters(null, 'default')();
});
