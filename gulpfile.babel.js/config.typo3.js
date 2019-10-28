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
		fontsDir: "../Fonts/",
		cssDir: "../Sass/_____generic/",
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
				sass: "Resources/Source/Sass/vendor",
				js: "Resources/Public/JavaScript/vendor"
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
			src: "Resources/Source/Sass/**/*.scss",
			dest: "Resources/Public/CSS/",
		},
		js: {
			src: "Resources/Source/JS/**/*.js",
			srcRaw : "Resources/Source/JS",
			dest: "Resources/Public/JavaScript/"
		},
		images: {
			src: "Resources/Source/Images/**/*",
			dest: "Resources/Public/Images/"
		},
		fonts: {
			src: "Resources/Source/Fonts/*",
			dest: "Resources/Public/Fonts/",
			destGF: "Resources/Source/Fonts/"
		},
		favicon: {
			masterimage: "Resources/Source/Favicon/favicon.png", // Path to your master picture 512x512px
			datafile: "Resources/Source/Favicon/faviconData.json", // File where the favicon markups are stored
			generatedpath: "Resources/Source/Images/favicons", // Path to the directory where to store the icons
			iconspath: "/typo3conf/ext/phoenix_distribution/Resources/Public/Images/favicons/", //for typo3 use /typo3conf/ext/template/Ressources/Public/...
			htmlfile: ["Resources/Private/Templates/Favicons.html"], // List of the HTML files where to inject favicon markups
			htmldir: "Resources/Private/Templates/", // Path to the directory where to store the HTML files
		},
		html: {
			src: "Resources/Source/Html/*.html",
			dest: "Resources/Public/"
		},


	},
	clean: ['Resources/Public/CSS/**/*', 'Resources/Public/JavaScript/**/*', 'Resources/Public/Images/*']
};
