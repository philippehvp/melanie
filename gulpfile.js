var gulp = require('gulp');
var livereload = require('gulp-livereload');

/* Configuration */
var cssSource = [
     './assets/css/main.css'
    ,'./assets/css/styles.css'
];
var cssTarget = 'styles.css';

var imgSource = [
    './assets/images_site/*.png', './assets/images_site/*.jpg'
];

var jsSource = [
    './assets/js/scripts.js'
];

gulp.task('js', function() {
	return	gulp.src(jsSource)
			.pipe(gulp.dest('./dist/js/'))
			.pipe(livereload());
});

gulp.task('css', function() {
    return gulp.src(cssSource)
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();

    gulp.watch(jsSource, ['js']);
    gulp.watch(cssSource, ['css']);
    gulp.watch('index.html', function() {
        livereload.reload('./index.html');
    });
});
