/*
 * @title Fonts
 * @description A task to copy fonts
 */

// Dependencies
import {src, dest, series, parallel} from 'gulp';
import fs from "fs";
import realFavicon from "gulp-real-favicon";
import { images } from './images';

// Config
import { config } from '../config';

// Task
function faviconGenerate(done) {
	realFavicon.generateFavicon({
		masterPicture: config.paths.favicon.masterimage,
		dest: config.paths.favicon.generatedpath,
		iconsPath: config.paths.favicon.iconspath,
		design: {
			ios: {
				pictureAspect: 'noChange',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: config.favicon.colorwindows,
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: config.favicon.colorandroid,
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'silhouette',
				themeColor: config.favicon.colorsafari
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false,
			readmeFile: false,
			htmlCodeFile: false,
			usePathAsIs: false
		},
		markupFile: config.paths.favicon.datafile
	}, function() {
		done();
	});
}

function faviconMarkup(done) {
	return src(config.paths.favicon.htmlfile)
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(config.paths.favicon.datafile)).favicon.html_code))
		.pipe(dest(config.paths.favicon.htmldir));
}

export const favicon = series(
	faviconGenerate,
	images,
	faviconMarkup
);

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
export function faviconCheck(done) {
	const currentVersion = JSON.parse(fs.readFileSync(config.paths.favicon.datafile)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
	done();
}
