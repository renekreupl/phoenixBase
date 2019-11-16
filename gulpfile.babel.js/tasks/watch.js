/*
 * @title Watch
 * @description A task to start the server and watch for changes.
 */

// Dependencies
import gulp from 'gulp';
import { series } from 'gulp';

// Tasks
//import { reload, serve } from './server';
import { styles } from './styles';
import { scripts } from './scripts';
import { html } from './html';
import { fonts } from './fonts';
import { images } from './images';

// Config
import { config } from '../config';

function watchFiles() {
	// this task watches files for changes and triggers compilation and BrowserSync reloads
	gulp.watch( config.paths.images.src, gulp.series('images'));
	gulp.watch( config.paths.fonts.src, gulp.series('fonts'));
	gulp.watch( config.paths.html.src, gulp.series('html'));
	gulp.watch( config.paths.js.src, gulp.series('scripts'));
	gulp.watch( config.paths.sass.src, gulp.series('styles'));
}

export const watch = series(
	// this task only serves (depending on your config) and watches files
	//serve,
	watchFiles
);
