/*
 * @title Templates
 * @description A task to compile templates via Twig.js
 */

// Dependencies
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import twig from 'gulp-twig';
import htmlmin from 'gulp-htmlmin';
import errorHandler from '../util/errorHandler.js';

// Config
import { config } from '../config';

// Task
export function html() {
	return src(config.paths.html.src)
		.pipe(plumber({ errorHandler }))
		.pipe(twig())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(dest(config.paths.html.dest));
}
