# [phoenixBase - a Frontend Boilerplate]

* NPM
* Gulp Tasks
* Build Config (TYPO3 and WordPress Examples includes)
* SASS Base

Feel free creating issues for bugs and wishes.


## Table of contents

* [Quick start](#quick-start)
* [Dokumentation](#dokumentation)
* [ToDo](#todo)
* [Creator](#creator)
* [Copyright and license](#copyright-and-license)


## Quick start

* clone or download the repo
* install editorconfig in your ide (if you want use it - plugins aviable for phpstorm, coda and a lot more)
* install packages with npm and run building task in gulp

```
npm install
gulp build
```

* now you can start developing with

```
gulp watch
```


### What's included

a lot

## Dokumentation

### NPM and GULP

you need install node/npm and gulp

### SCSS Lint

if you want use scss-lint install it

```
gem install scss_lint
or
sudo gem install scss_lint
```

gulp task for scss-lint

```
gulp scss-lint
```

SCSS-Lint Doku
https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md

### SVG USe

```
.class {
	&:before {
		@include sprite(twitter);
		content: '';
		float: left;
		margin-right: 0.5em;
	}

	&:hover {
		&:before {
			@include sprite(twitterHover, bg);
		}
	}
}
```

## ToDo


//TODO Sass WP & T3 styles  
//TODO ADD Magnific PopUp  
//TODO Copy Font / Webfontloader  


http://zellwk.com/blog/nunjucks-with-gulp/  
https://www.npmjs.com/package/gulp-svgstore  
https://github.com/addyosmani/critical  


## Creator

**Rene Kreupl**

* <https://renekreupl.de/>

**Credits**

* http://www.sassmeister.com/gist/ac4322cc0564cd37c432
* http://www.sassmeister.com/gist/7f22e44ace49b5124eec
* https://davidhellmann.com/blog/development/responsive-typography-modular-scale-und-fluid-type/

## Copyright and license

Code and documentation copyright 2016 Rene Kreupl,  
Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).
