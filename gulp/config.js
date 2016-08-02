var src = './src';
var dest = "./dist";
var assets = dest + "/assets";

// TYPO3
//var src = './Resources/Private';
//var dest = "./Resources/Public";
// Assets Dir called "Sass, JavaScript, Stylesheets, Images, Js"

// WordPress
//var src = './src';
//var dest = ".";
//var assets = dest + "/";

module.exports = {
	vendor: {
		paths: {
			sass: src + "/sass/vendor",
			js: assets + "/js/vendor"
		},
		js: [
			"node_modules/jquery/dist/jquery.min.js",
			"node_modules/bxslider/dist/jquery.bxslider.min.js"
		]
	},
	sass: {
		src: src + "/sass/**/*.scss",
		build: assets + "/css/",
		autoprefixer: {
			browsers: ['last 2 versions', '> 5%', 'ie 9']
		},
		output: {
			outputStyle: 'compressed',
			precision: 10
		}
	},
	js: {
		src: src + "/js/**/*.js",
		build: assets + "/js/"
	},
	img: {
		src: src + "/images/*",
		build: assets + "/images/",
		options: {
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}
	},
	html: {
		src: src + "/html/*.html",
		build: dest
	},
	clean: [assets + '/css/**/*', assets + '/js/**/*', assets + '/images/*'],
	watch: ['watch:sass', 'watch:scripts', 'watch:images', 'watch:html'],
	build: ['vendor', 'sass', 'scripts', 'images', 'html']
};
