/*
 * @title Fonts
 * @description A task to copy fonts
 */

// Dependencies
import { src, dest } from 'gulp';
import rename from 'gulp-rename';
import replace from 'gulp-replace';

// Config
import { config } from '../config';

function vendorJS() {
	console.log("Copy Vendor JS Files. Please check it out");
	return src(config.paths.vendor.js)
		.pipe(dest(config.paths.vendor.paths.js));
}
function vendorCSS() {
	console.log("Copy Vendor CSS Files. Please check it out");
	return src(config.paths.vendor.css, { base: process.cwd() })
		.pipe(rename({
			dirname: "",
			prefix: "_",
			extname: ".scss"
		}))
		.pipe(replace('../img/', '../Images/'))
		.pipe(replace('../fonts/', '../Fonts/'))
		.pipe(dest(config.paths.vendor.paths.sass));
}
function vendorSASS() {
	if(config.paths.vendor.sass.length === 0) {
		return;
	} else {
		console.log("Copy Vendor Sass Files. Please check it out");
		return src(config.paths.vendor.sass)
			.pipe(dest(config.paths.vendor.paths.sass));
	}
}

// Task
export function vendor(cb) {

	vendorJS();
	vendorCSS();
	vendorSASS();
	cb();

}
