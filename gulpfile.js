var gulp = require("gulp"),
	sass = require("gulp-sass"),
	watch = require('gulp-watch');

// default
gulp.task("default", function() {
    console.log("Hello world")
})

// compile-sass
gulp.task('compile-sass', function () {
    return gulp.src("./*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"));
});

// watch
gulp.task("watch", function() {
	gulp.watch("./*.scss", ['compile-sass']);
});
