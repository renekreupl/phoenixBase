const gulp			= require('gulp');
const notify          = require('gulp-notify');
const svgSprite		= require('gulp-svg-sprite');
const size			= require('gulp-size');
const plumber 		= require('gulp-plumber');
const config 			= require('../config').img;


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
