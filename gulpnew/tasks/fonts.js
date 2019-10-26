const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const config 		= require('../config').fonts;

gulp.task('fonts', function() {
	return gulp.src(config.src+'/*')
		.pipe(use.changed(config.build))
		.pipe(gulp.dest(config.build))
		.pipe(use.notify({ message: 'Yo, Fonts task complete.' }));
});

gulp.task('watch:fonts', function () {
	gulp.watch( config.src+'/*' , ['fonts']);
});





/*
 * @title Fonts
 * @description A task to copy fonts
 */

// Dependencies
import { src, dest } from 'gulp';
import changed from 'gulp-changed';

// Config
import { config } from '../config';

// Task
export function fonts() {
	return src(config.paths.fonts.src)
		.pipe(changed(config.paths.fonts.dest))
		.pipe(dest(config.paths.fonts.dest));
}
