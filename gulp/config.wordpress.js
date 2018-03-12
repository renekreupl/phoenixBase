var src = 'src/';
var dest = "";
var assets = dest + "assets/";

module.exports = {
	vendor: {
		paths: {
			sass: src + "sass/vendor",
			js: assets + "js/vendor"
		},
		sass: [

		],
		js: [
			"node_modules/jquery/dist/jquery.min.js",
			"node_modules/webfontloader/webfontloader.js",
			"node_modules/photoswipe/dist/photoswipe.min.js",
			"node_modules/photoswipe/dist/photoswipe-ui-default.min.js",
			"node_modules/bxslider/dist/jquery.bxslider.min.js"
		]
	},
	sass: {
		src: src + "sass",
		build: assets + "css/",
		autoprefixer: {
			browsers: ['last 2 versions', '> 5%', 'ie 9']
		},
		output: {
			outputStyle: 'compressed',
			precision: 10
		}
	},
	js: {
		src: src + "js",
		build: assets + "js/"
	},
	img: {
		src: src + "images",
		build: assets + "images/",
		options: {
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		},
		svg: {
			src: src + "svg",
			build: "",
			file: "sprite.svg",
			sass: src + "sass/vendor/_svg-sprite.scss",
			template: src + "sass/core/sprite-template.scss"
		}
	},
	fonts: {
		src: src + "fonts",
		build: assets + "fonts/"
	},
	html: {
		src: src + "html",
		build: dest
	},
	clean: [assets + 'css/**/*', assets + 'js/**/*', assets + 'images/*'],
	watch: ['watch:sass', 'watch:scripts', 'watch:images', 'watch:svg'],
	build: ['vendor', 'svg', 'sass', 'scripts', 'images']
};
