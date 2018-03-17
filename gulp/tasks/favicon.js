const gulp			= require('gulp');
const notify          = require('gulp-notify');
const plumber 		= require('gulp-plumber');
const realFavicon 	= require ('gulp-real-favicon');
const runSequence 	= require('run-sequence');
const fs 				= require('fs');
const config 			= require('../config').favicon;


// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('favicon-generate', function(done) {
	realFavicon.generateFavicon({
		masterPicture: config.masterimage,
		dest: config.generatedpath,
		iconsPath: config.iconspath,
		design: {
			design: {
				ios: {
					pictureAspect: 'noChange',
					assets: {
						ios6AndPriorIcons: false,
						ios7AndLaterIcons: false,
						precomposedIcons: false,
						declareOnlyDefaultIcon: true
					}
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: config.colorwindows,
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
				themeColor: config.colorandroid,
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
				themeColor: config.colorsafari
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false,
			readmeFile: false,
			htmlCodeFile: false,
			usePathAsIs: false
		},
		markupFile: config.datafile
	}, function() {
		done();
	});
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('favicon-inject-markups', function() {
	return gulp.src( config.htmlfile )
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(config.datafile)).favicon.html_code))
		.pipe(gulp.dest( config.htmldir ));
});

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('check-for-favicon-update', function(done) {
	const currentVersion = JSON.parse(fs.readFileSync(config.datafile)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});

gulp.task('favicon', function() {
	runSequence.apply(null, ['favicon-generate', 'images', 'favicon-inject-markups']);
});
