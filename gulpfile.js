var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var minify      = require('gulp-minify');
var concat      = require('gulp-concat');

//Browsersync task
gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        server: "./public"
    });

    gulp.watch("./public/scss/*.scss", ['sass']);
    gulp.watch("./public/views/*.html").on('change', browserSync.reload);
    gulp.watch('./public/css/*.css').on('change', browserSync.reload);
    gulp.watch('.public/index.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./public/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('sass:watch', function () {
  gulp.watch('./public/scss/**/*.scss', ['sass']);
});

//Concatenate script files task
gulp.task("concatScripts", function() {
gulp.src([
  "./public/lib/angular/angular.min.js",
  "./public/lib/angular/angular-route.min.js",
  //"lib/jquery/jquery.min.js",
  "./public/js/app.js",
  "./public/js/businessCtrl.js",
  "./public/js/commentsService.js",
  "./public/js/displayComments.js",
  "./public/js/getSearchCtrl.js",
  "./public/js/receiveCommentsCtrl.js",
  "./public/js/searchResultsService.js",
  "./public/js/searchTermsService.js",
  "./public/js/setSearchCtrl.js"
])
.pipe(concat("script.js"))
.pipe(gulp.dest('./public/jsmin'));
});

//Minify script files task
gulp.task('compress', function() {
  gulp.src('./public/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./public/jsmin'))
});
