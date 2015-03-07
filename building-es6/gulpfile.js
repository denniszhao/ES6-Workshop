/**
 *  gulpfile.js 
 *
 */

var gulp = require('gulp'),
    babel = require('gulp-babel');

var paths = {
    "js": {
        "src": "js/**/*.js",
        "dst": "build/"
    }
};

// By default, builds JS into paths.js.dst
gulp.task('default', function () {
    return gulp.src(paths.js.src)
        .pipe(babel())
        .pipe(gulp.dest(paths.js.dst));
});

// Watches for change in JS files
gulp.task('watch', function () {
    gulp.watch(paths.js.src, ['default']);
})
