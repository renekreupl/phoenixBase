var src = 'Resources/Private/';
var dest = "Resources/Public/";
var assets = dest;

module.exports = {
	vendor: {
		paths: {
			sass: src + "Sass/vendor",
			js: assets + "JavaScript/vendor"
		},
		js: [
			"node_modules/jquery/dist/jquery.min.js",
			"node_modules/pace-progress/pace.min.js",
			"node_modules/bxslider/dist/jquery.bxslider.min.js"
		]
	},
	sass: {
		src: src + "Sass/**/*.scss",
		build: assets + "Stylesheets/",
		autoprefixer: {
			browsers: ['last 2 versions', '> 5%', 'ie 9']
		},
		output: {
			outputStyle: 'compressed',
			precision: 10
		}
	},
	js: {
		src: src + "Js/**/*.js",
		build: assets + "JavaScript/"
	},
	img: {
		src: src + "Images/**/*",
		build: assets + "Images/",
		options: {
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}
	},
	html: {
		src: src + "html/*.html",
		build: dest
	},
	clean: [assets + 'Stylesheets/**/*', assets + 'JavaScript/**/*', assets + 'Images/*'],
	watch: ['watch:sass', 'watch:scripts', 'watch:images'],
	build: ['vendor', 'sass', 'scripts', 'images']
};
