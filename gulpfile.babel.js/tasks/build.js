/*
 * @title Build
 * @description A task to compile production code.
 */

// Dependencies
import { src, dest, series, parallel } from 'gulp';
import uglify from 'gulp-uglify';
import modernizr from 'gulp-modernizr';

// Tasks
/*
//import { reload, serve } from './server';
import { styles } from './styles';
import { scripts } from './scripts';
import { templates } from './templates';
import { copyImages } from './copy-images';
import { fonts } from './fonts';
import { copy } from './copy';
import { buildSvgSprite } from './build-vectorsprite';
import { minifyImages } from './minify-images';
*/
// TODO: Set tasks

// Config
import { config } from '../config';

// Function Copy Base Files
export function buildBaseFiles(cb) {
	console.log("Copy pace.min.js successful");
	src('./node_modules/pace-progress/pace.min.js')
		.pipe(dest(config.paths.js.srcRaw));

	console.log("Copy lazysizes.js successful");
	src('./node_modules/lazysizes/lazysizes.js')
		.pipe(dest(config.paths.js.srcRaw));

	console.log("modernizr.min.js generated");
	src(config.paths.js.src)
		.pipe(modernizr('modernizr.min.js'))
		.pipe(uglify())
		.pipe(dest( config.paths.vendor.paths.js ));

	cb();
}

export const build = series(
	//parallel('vendor', 'svg', 'sass', 'scripts', 'images', 'html', 'googlefonts', 'fonts', 'favicon'),
	buildBaseFiles
);
