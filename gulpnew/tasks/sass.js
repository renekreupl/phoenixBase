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
		.pipe(use.autoprefixer())
		.pipe(use.sourcemaps.write('./maps'))
		.pipe(gulp.dest( config.build ))
		.pipe(use.notify({ message: 'Yo, Sass task complete.' }));
});

gulp.task('watch:sass', function () {
	gulp.watch( config.src+'/**/*.scss' , ['sass']);
});




/*
 * @title Styles
 * @description A task to compile Sass to CSS
 */

// Dependencies
import { src, dest, series } from 'gulp';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import gulpStylelint from 'gulp-stylelint';
import errorHandler from '../util/errorHandler.js';

// import { reload } from '../tasks/server';
import browserSync from 'browser-sync';

// Config
import { config, isProd } from '../config';

export function scss() {
	return src(config.paths.styles.src)
		.pipe(plumber({ errorHandler }))
		.pipe(gulpif(isProd, sourcemaps.init()))
		.pipe(sassGlob())
		.pipe(sass({
			includePaths: [
				'node_modules'
			],
			outputStyle: 'compressed'
		}))
		.pipe(postcss([autoprefixer()]))
		.pipe(gulpif(isProd, sourcemaps.write('.')))
		.pipe(dest(config.paths.styles.dest))
		.pipe(browserSync.stream());
}

export function stylelint() {
	return src(config.paths.styles.watch)
		.pipe(gulpStylelint({
			failAfterError: isProd,
			reporters: [{ formatter: 'string', console: true }],
			syntax: 'scss'
		}));
}

if (config.stylelint) {
	styles = series(stylelint, scss);
}
else {
	styles = scss;
}
export var styles;
