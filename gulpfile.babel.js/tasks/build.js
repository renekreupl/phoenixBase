/*
 * @title Build
 * @description A task to compile production code.
 */

// Dependencies
import { src, dest, series, parallel } from 'gulp';
import uglify from 'gulp-uglify';
import modernizr from 'gulp-modernizr';

// Tasks
import { vendor } from './vendor';
import { favicon } from './favicon';
import { images } from './images';
import { googlefonts } from './googlefonts';
import { fonts } from './fonts';
import { html } from './html';
import { styles } from './styles';
import { scripts } from './scripts';


// Config
import { config } from '../config';

// Function Copy Base Files
function buildBaseFiles(cb) {
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
	buildBaseFiles,
	vendor, favicon, images, googlefonts, fonts, html, styles, scripts
);
