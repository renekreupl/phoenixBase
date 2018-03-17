const gulp			= require('gulp');
const use			= require('gulp-load-plugins')();
const config 		= require('../config').img;


gulp.task('svg', function () {
	return gulp.src( config.svg.src+'/**/*.svg' )
		.pipe(use.plumber())
		.pipe(use.svgSprite({
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
			.on('error', use.notify.onError('SVG Compile Error!'))
		)
		.pipe(use.size({
			showFiles: true
		}))
		.pipe(gulp.dest(config.svg.build))
		.pipe(use.notify({ message: 'Yo, SVG task complete.' }));
});

gulp.task('watch:svg', function () {
	gulp.watch( config.svg.src+'/**/*.svg' , ['svg']);
});
