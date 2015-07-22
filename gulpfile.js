// variables
var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename');
	// concatCss = require('gulp-concat-css'),
	// scssCss = require('gulp-sass'),
	// slim = require('gulp-slim'),
	// spritesmith = require('gulp.spritesmith');


// prefixinig, minifying and renaming
gulp.task('minify-css', function() {
	gulp.src('src/css/main.css')
	.pipe(prefix('last 2 versions', 'ie 8', '>.5%'))
	.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(rename('main.min.css'))
	.pipe(gulp.dest('src/css'));
});


// default task
gulp.task('default', ['minify-css']);




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