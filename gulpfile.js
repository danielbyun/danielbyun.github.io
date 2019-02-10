const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const prefixer = require("autoprefixer");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const browsersync = require("browser-sync");

// autoprefixer
gulp.task("styles", function() {
    gulp.src("css/*.css")
        .pipe(autoprefixer())
        .pipe(gulp.dest("/dist/css"))
});

// prefixer
gulp.task("prefix", function() {
    gulp.src("css/*.css")
        .pipe(prefixer())
        .pipe(gulp.dest("/dist/css"))
});

// gulp.task("minify", function(){
//    return gulp.src("app/css/reset.css")
//        .pipe("")
//        .pipe(gulp.dest("dist/css/reset.css"))
// });

// optimize images
gulp.task("imageMin", () =>
    gulp.src("app/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
);

// concatenate javascript
gulp.task("scripts", () =>
    gulp.src("app/js/*.js")
        .pipe(concat("main.js"))

        // uglify
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
);

// array of tasks to run
gulp.task("default", ["styles", "imageMin", "scripts"]);

// browsersync
gulp.task('serve', function() {
   browsersync.init({
       server:"./app",
       notify: false
   });

   gulp.watch("app/css/*.css");
   gulp.watch("app/*.html").on("change", browsersync.reload);
});

// watch task
gulp.task("watch", function(){
    gulp.watch("app/js/*.js", ["scripts"]);
    gulp.watch("app/img/*", ["imageMin"]);
    gulp.watch("app/css/*.css", ["styles"]);
});

