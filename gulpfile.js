var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var minify      = require('gulp-minify');

//Browsersync task
gulp.task('browser-sync', function() {
browserSync.init({
server: {
baseDir: "./"
}
});
gulp.watch('./*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./public/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('sass:watch', function () {
  gulp.watch('./public/scss/**/*.scss', ['sass']);
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});


//Concatenate script files task
gulp.task("concatScripts", function() {
gulp.src([
  "lib/angular/angular.min.js",
  "lib/angular/angular-route.min.js",
  //"lib/jquery/jquery.min.js",
  "js/app.js",
  "js/businessCtrl.js",
  "js/commentsService.js",
  "js/displayComments.js",
  "js/getSearchCtrl.js",
  "js/receiveCommentsCtrl.js",
  "js/searchResultsService.js",
  "js/searchTermsService.js",
  "js/setSearchCtrl.js"
])
.pipe(concat("script.js"))
.pipe(gulp.dest('js'));
});

//Minify script files task
gulp.task('compress', function() {
  gulp.src('script.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});


gulp.task('default', ['serve']);
