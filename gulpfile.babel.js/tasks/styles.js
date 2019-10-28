/*
 * @title Styles
 * @description A task to compile Sass to CSS
 */

// Dependencies
import { src, dest, series } from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
//import sassGlob from 'gulp-sass-glob';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
//import gulpStylelint from 'gulp-stylelint';
import errorHandler from '../util/errorHandler.js';

// import { reload } from '../tasks/server';
//import browserSync from 'browser-sync';

// Config
import { config } from '../config';

export function scss() {
	return src(config.paths.sass.src, '!src/sass/core/sprite-template.scss')
		.pipe(plumber({ errorHandler }))
		.pipe(sourcemaps.init())
		.pipe(rename({ suffix: '.min'}))
		//.pipe(sassGlob())
		.pipe(sass( config.sass.output )
			.on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./maps'))
		.pipe(dest(config.paths.sass.dest));
		//.pipe(browserSync.stream())
}

/*export function stylelint() {
	return src(config.paths.styles.watch)
		.pipe(gulpStylelint({
			failAfterError: isProd,
			reporters: [{ formatter: 'string', console: true }],
			syntax: 'scss'
		}));
}*/

if (config.sass.stylelint) {
	//styles = series(stylelint, scss);
}
else {
	styles = scss;
}
export var styles;
