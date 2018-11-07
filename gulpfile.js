let gulp = require("gulp");
let autoprefixer = require("gulp-autoprefixer");

// hello example
gulp.task("sayHello", function() {
    console.log("hello");
});

gulp.task("styles", function() {
    gulp.src("css/**/*.scss")
        .pipe(autoprefixer())
        .pipe(gulp.dest("dist"))
});

// gulp.task("minify", function(){
//    return gulp.src("app/css/reset.css")
//        .pipe("")
//        .pipe(gulp.dest("dist/css/reset.css"))
// });