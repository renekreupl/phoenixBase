/*
 * @title Build
 * @description A task to compile production code.
 */

// Dependencies
import { src, dest, series } from 'gulp';

// Config
import { config } from '../config';


// Function Copy Base Files

export function buildBaseFiles() {
	//Copy pace.min.js
	src('./node_modules/pace-progress/pace.min.js')
		.pipe(gulp.dest(config.js.src))
		.pipe(use.notify({ message: 'Copy pace.min.js successful' }));

	//Copy lazysizes.min.js
	src('./node_modules/lazysizes/lazysizes.js')
		.pipe(gulp.dest(config.js.src))
		.pipe(use.notify({ message: 'Copy lazysizes.js successful' }));

	// build modernizr
	src(config.js.src+'/**/*.js')
		.pipe(use.modernizr('modernizr.min.js'))
		.pipe(use.uglify())
		.pipe(gulp.dest( config.vendor.paths.js ))
		.pipe(use.notify({ message: 'modernizr.min.js generated' }));
}




import { styles } from './styles';
import { scripts } from './scripts';
import { templates } from './templates';
import { copyImages } from './copy-images';
import { fonts } from './fonts';
import { copy } from './copy';
import { buildSvgSprite } from './build-vectorsprite';
import { minifyImages } from './minify-images';


export const build = series(
	parallel(config.build),
	buildBaseFiles
);
