const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const config 		= require('../config').html;

gulp.task('html', function() {
	return gulp.src( config.src+'/*.html' )
		.pipe(use.twig())
		.pipe(use.htmlmin({collapseWhitespace: true}))
		.pipe(use.plumber({errorHandler: use.notify.onError("Error: <%= error.message %>")}))
		.pipe(gulp.dest( config.build ))
		.pipe(use.notify({ message: 'Yo, HTML task complete.' }));
});

gulp.task('watch:html', function () {
	gulp.watch( config.src+'/**/*.html' , ['html']);
});




/*
 * @title Templates
 * @description A task to compile templates via Twig.js
 */

// Dependencies
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import twig from 'gulp-twig';
import errorHandler from '../util/errorHandler.js';

// Config
import { config } from '../config';

// Task
export function templates() {
	return src(config.paths.templates.src)
		.pipe(plumber({ errorHandler }))
		.pipe(twig())
		.pipe(dest(config.paths.templates.dest));
}
