/*
 * @title Scripts
 * @description A task to concatenate and compress js files
 */

// Dependencies
import { src, dest } from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';
import errorHandler from '../util/errorHandler.js';

// Config
import { config } from '../config';

// Task
export function scripts() {
	return src(config.paths.js.src)
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(sourcemaps.write('./maps'))
		.pipe(plumber({errorHandler}))
		.pipe(dest(config.paths.js.dest));
}
