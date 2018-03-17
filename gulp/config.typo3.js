const src = 'Resources/Source/';
const dest = "Resources/Public/";
const assets = dest;

module.exports = {
	vendor: {
		paths: {
			sass: src + "Sass/vendor",
			js: assets + "JavaScript/Vendor"
		},
		sass: [

		],
		js: [
			"node_modules/jquery/dist/jquery.min.js",
			"node_modules/webfontloader/webfontloader.js",
			"node_modules/bxslider/dist/jquery.bxslider.min.js"
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
	favicon: {
		masterimage: src + "Favicon/favicon.png", // Path to your master picture 512x512px
		datafile: src + "Favicon/faviconData.json", // File where the favicon markups are stored
		generatedpath: src + "Images/favicons", // Path to the directory where to store the icons
		iconspath: "Images/favicons/", //for typo3 use /typo3conf/ext/template/Ressources/Public/...
		htmlfile: ['Resources/Private/Partials/Favicon.html'], // List of the HTML files where to inject favicon markups
		htmldir: "Resources/Private/Partials/", // Path to the directory where to store the HTML files
		colorwindows: '#da532c',
		colorandroid: '#ffffff',
		colorsafari: '#5bbad5'
	},
	fonts: {
		src: src + "fonts",
		build: assets + "Fonts/"
	},
	html: {
		src: src + "Html",
		build: dest
	},
	clean: [assets + 'CSS/**/*', assets + 'JavaScript/**/*', assets + 'Images/*'],
	watch: ['watch:sass', 'watch:scripts', 'watch:images', 'watch:svg'],
	build: ['vendor', 'svg', 'sass', 'scripts', 'images', 'favicon']
};
