"use strict";

/*
 gulpfile.js
 ===========
 */


import gulp from "gulp";
import { help } from './tasks/default';
import { vendor } from './tasks/vendor';
import { fonts } from './tasks/fonts';
import { googlefonts } from './tasks/googlefonts';
import { images } from './tasks/images';
import { favicon, faviconCheck } from './tasks/favicon';
import { html } from './tasks/html';
import { clean } from './tasks/clean';
import { scripts } from './tasks/scripts';
import { styles } from './tasks/styles';
import { watch } from './tasks/watch';
import { build } from './tasks/build';

exports.vendor = vendor;
exports.fonts = fonts;
exports.googlefonts = googlefonts;
exports.images = images;
exports.favicon = favicon;
exports.faviconCheck = faviconCheck;
exports.html = html;
exports.clean = clean;
exports.scripts = scripts;
exports.styles = styles;
exports.watch = watch;
exports.build = build;

exports.default = help;
