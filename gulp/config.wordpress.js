const src = 'src/';
const dest = "";
const assets = dest + "assets/";

module.exports = {
	vendor: {
		paths: {
			sass: src + "sass/vendor",
			js: assets + "js/vendor"
		},
		sass: [
		],
		css: [
			"node_modules/normalize.css/normalize.css",
			"node_modules/cookieconsent/build/cookieconsent.min.css",
			"node_modules/lightgallery/dist/css/lightgallery.css"
		],
		js: [
			"node_modules/jquery/dist/jquery.min.js",
			"node_modules/webfontloader/webfontloader.js",
			"node_modules/lightgallery/dist/js/lightgallery.js",
			"node_modules/cookieconsent/build/cookieconsent.min.js"
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
			sass: src + "Sass/_____generic/_generic.svg-sprite.scss",
			template: src + "Sass/______tools/_tools.tmpl.svg.scss"
		}
	},
	favicon: {
		masterimage: src + "favicon/favicon.png", // Path to your master picture 512x512px
		datafile: src + "favicon/faviconData.json", // File where the favicon markups are stored
		generatedpath: src + "images/favicons", // Path to the directory where to store the icons
		iconspath: assets + "images/favicons/", //for typo3 use /typo3conf/ext/template/Ressources/Public/...
		htmlfile: [src + 'html/partials/favicon.html'], // List of the HTML files where to inject favicon markups
		htmldir: src + 'html/partials/', // Path to the directory where to store the HTML files
		colorwindows: '#da532c',
		colorandroid: '#ffffff',
		colorsafari: '#5bbad5'
	},
	fonts: {
		src: src + "fonts",
		build: assets + "fonts/",
		googlefonts: {
			fontsDir: "../fonts/",
			cssDir: "../sass/_____generic/",
			cssFilename: "_generic.googlefonts.scss"
		}
	},
	html: {
		src: src + "html",
		build: dest
	},
	clean: [assets + 'css/**/*', assets + 'js/**/*', assets + 'images/*'],
	watch: ['watch:sass', 'watch:scripts', 'watch:images', 'watch:svg'],
	build: ['vendor', 'svg', 'sass', 'scripts', 'images', 'favicon']
};
