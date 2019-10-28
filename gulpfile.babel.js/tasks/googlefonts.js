/*
 * @title Fonts
 * @description A task to copy fonts
 */

// Dependencies
import { src, dest } from 'gulp';
import googleWebFonts from 'gulp-google-webfonts';

// Config
import { config } from '../config';

// Task
export function googlefonts() {
	return src('./fonts.list')
		.pipe(googleWebFonts(config.googlefonts))
		.pipe(dest(config.paths.fonts.destGF));
}
