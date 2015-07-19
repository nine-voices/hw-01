// variables
var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload'),
	scssCss = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
	slim = require('gulp-slim'),
	spritesmith = require('gulp.spritesmith');

// server connect and livereload
gulp.task('connect', function() {
	connect.server ({
		root: 'Project-00',
		livereload: true
	})
});

// doing nothing
gulp.task('html', function() {
	gulp.src('index.html')
	.pipe(connect.reload());
});

// compiling scss to css
gulp.task('scssCss', function() {
	gulp.src('scss/*.scss')
		.pipe(scssCss())
		.pipe(gulp.dest('./css'))
		.pipe(connect.reload());
});

// prefixing css
gulp.task('prefix', function() {
	gulp.src('css/*.css')
		.pipe(prefix('last 2 versions', 'ie 9', '>1%'))
		.pipe(gulp.dest('./css'))
});

// watching for changes
gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['scssCss'])
});

// default task
gulp.task('default', ['connect', 'html', 'scssCss', 'watch']);