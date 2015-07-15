var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
 
gulp.task('default', function () {
    return gulp.src('images/*')
		.pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({quality: '60-70', speed: 4})]
         }))
        .pipe(gulp.dest('build/images'));
});

