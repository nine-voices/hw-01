// variables
var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename');
	concatCss = require('gulp-concat-css'),
	browserSync = require('browser-sync');
	// scssCss = require('gulp-sass'),
	// slim = require('gulp-slim'),
	// spritesmith = require('gulp.spritesmith');


// concatting
gulp.task('bundle', function() {
	gulp.src('src/css/*.css')
	.pipe(concatCss('bundle.css'))
	.pipe(prefix('last 2 versions', 'ie 8', '>.5%'))
	.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(rename('bundle.min.css'))
	.pipe(gulp.dest('src/css/'));
});

// server
gulp.task('server', function() {
	browserSync({
		port: 3000,
		server: {
			baseDir: 'src'
		}
	})
});

// default task
gulp.task('default', ['bundle', 'server']);


// // watching for changes
// gulp.task('watch', function() {
// 	gulp.watch('scss/*.scss', ['scssCss'])
// });



// // compiling scss to css
// gulp.task('scssCss', function() {
// 	gulp.src('scss/*.scss')
// 		.pipe(scssCss())
// 		.pipe(gulp.dest('./css'))
// 		.pipe(connect.reload());
// });