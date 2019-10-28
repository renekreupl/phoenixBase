/**
 * Contentimages
 * @description Copy and Compress all Images
 */

// Dependencies
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import errorHandler from '../util/errorHandler.js';
import imagemin from 'gulp-imagemin';

// Config
import { config } from '../config';

// Task
export function images() {
	return src(config.paths.images.src)
		.pipe(plumber({
			errorHandler
		}))
		.pipe(changed(config.paths.images.dest))
		.pipe(imagemin(config.images.options))
		.pipe(dest(config.paths.images.dest));
}
