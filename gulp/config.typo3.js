var src = 'Resources/Source/';
var dest = "Resources/Public/";
var assets = dest;

module.exports = {
	vendor: {
		paths: {
			sass: src + "Sass/vendor",
			js: assets + "JavaScript/Vendor"
		},
		js: [
			"node_modules/webfontloader/webfontloader.js",
			"node_modules/photoswipe/dist/photoswipe.min.js",
			"node_modules/photoswipe/dist/photoswipe-ui-default.min.js",
			"node_modules/flickity/dist/flickity.pkgd.min.js"
		]
	},
	sass: {
		src: src + "Sass",
		build: assets + "CSS/",
		autoprefixer: {
			browsers: ['last 2 versions', '> 5%', 'ie 9']
		},
		output: {
			outputStyle: 'compressed',
			precision: 10
		}
	},
	js: {
		src: src + "JS",
		build: assets + "JavaScript/"
	},
	img: {
		src: src + "Images",
		build: assets + "Images/",
		options: {
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		},
		svg: {
			src: src + "SVG",
			build: "",
			file: "sprite.svg",
			sass: src + "Sass/_____generic/_generic.svg-sprite.scss",
			template: src + "Sass/______tools/_tools.tmpl.svg.scss"
		}
	},
	html: {
		src: src + "html",
		build: dest
	},
	clean: [assets + 'CSS/**/*', assets + 'JavaScript/**/*', assets + 'Images/*'],
	watch: ['watch:sass', 'watch:scripts', 'watch:images', 'watch:svg'],
	build: ['vendor', 'svg', 'sass', 'scripts', 'images']
};
