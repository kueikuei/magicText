var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var gulpUglify = require('gulp-uglify');
// var rename = require('gulp-rename');


gulp.task('scripts',function(){
	return gulp.src('./src/**.js')
	// .pipe($.gulpUglify())
	.pipe($.uglify())
	.pipe($.rename({ extname: '.min.js' }))
	.pipe(gulp.dest('./dist'));
});


