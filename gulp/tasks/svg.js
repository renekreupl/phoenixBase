var gulp			= require('gulp');
var notify          = require('gulp-notify');
var svgSprite		= require('gulp-svg-sprite');
var size			= require('gulp-size');
var plumber 		= require('gulp-plumber');
var config 			= require('../config').img;


gulp.task('svg', function () {
	return gulp.src( config.svg.src+'/**/*.svg' )
		.pipe(plumber())
		.pipe(svgSprite({
			shape: {
				spacing: {
					padding: 5
				}
			},
			mode: {
				css: {
					dest: "./",
					layout: "diagonal",
					sprite: config.build + config.svg.file,
					bust: false,
					render: {
						scss: {
							dest: config.svg.sass,
							template: config.svg.template
						}
					}
				}
			},
			variables: {
				mapname: "icons"
			}
		})
			.on('error', notify.onError('SVG Compile Error!'))
		)
		.pipe(size({
			showFiles: true
		}))
		.pipe(gulp.dest(config.svg.build))
		.pipe(notify({ message: 'Yo, SVG task complete.' }));
});

gulp.task('watch:svg', function () {
	gulp.watch( config.svg.src+'/**/*.svg' , ['svg']);
});
