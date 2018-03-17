const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const config 		= require('../config').sass;

gulp.task('sass', function() {
	return gulp.src( [
		config.src+'/**/*.scss',
		'!src/sass/core/sprite-template.scss'
	] )
		.pipe(use.sourcemaps.init())
		.pipe(use.rename({ suffix: '.min'}))
		.pipe(use.sass( config.output )
			.on('error', use.sass.logError)
			.on('error', use.notify.onError('Sass Compile Error!')))
		.pipe(use.autoprefixer( config.autoprefixer ))
		.pipe(use.sourcemaps.write('./maps'))
		.pipe(gulp.dest( config.build ))
		.pipe(use.notify({ message: 'Yo, Sass task complete.' }));
});

gulp.task('watch:sass', function () {
	gulp.watch( config.src+'/**/*.scss' , ['sass']);
});
