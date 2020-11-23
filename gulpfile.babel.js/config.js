/*
 * @title Config
 */

export const config = {
	sass: {
		stylelint: false,
		output: {
			outputStyle: 'compressed',
			precision: 10
		}
	},
	images: {
		options: {
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}
	},
	googlefonts: {
		fontsDir: "../fonts/",
		cssDir: "../sass/_____generic/",
		cssFilename: "_generic.googlefonts.scss",
		fontDisplayType: "swap"
	},
	favicon: {
		colorwindows: '#da532c',
		colorandroid: '#ffffff',
		colorsafari: '#5bbad5'
	},
	paths: {
		vendor: {
			paths: {
				sass: "src/sass/vendor",
				js: "dist/assets/js/vendor"
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
				"node_modules/lightgallery/dist/js/lightgallery.js",
				"node_modules/cookieconsent/build/cookieconsent.min.js"
			]
		},
		sass: {
			src: "src/sass/**/*.scss",
			dest: "dist/assets/css/",
		},
		js: {
			src: "src/js/**/*.js",
			srcRaw : "src/js",
			dest: "dist/assets/js/"
		},
		images: {
			src: "src/images/**/*",
			dest: "dist/assets/images/"
		},
		fonts: {
			src: "src/fonts/*",
			dest: "dist/assets/fonts/",
			destGF: "src/fonts/"
		},
		favicon: {
			masterimage: "src/favicon/favicon.png", // Path to your master picture 512x512px
			datafile: "src/favicon/faviconData.json", // File where the favicon markups are stored
			generatedpath: "src/images/favicons", // Path to the directory where to store the icons
			iconspath: "assets/images/favicons/", //for typo3 use /typo3conf/ext/template/Ressources/Public/...
			htmlfile: ["src/html/partials/favicon.html"], // List of the HTML files where to inject favicon markups
			htmldir: "src/html/partials/", // Path to the directory where to store the HTML files
		},
		html: {
			src: "src/html/*.html",
			watch: "src/html/**/*.html",
			dest: "dist/"
		},


	},
	clean: ['dist/assets/css/**/*', 'dist/assets/js/**/*', 'dist/assets/images/*']
};
