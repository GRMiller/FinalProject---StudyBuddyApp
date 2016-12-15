var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var minify      = require('gulp-minify');
var concat      = require('gulp-concat');
var postcss     = require ('gulp-postcss');
var autoprefixer= require('autoprefixer');
var sourcemaps  = require('gulp-sourcemaps');

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

// Default gulp task, inits browserSync & compiles scss
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        proxy: "localhost:3000",
        files: ["./public"]
    });

    gulp.watch("public/scss/*.scss", ['sass']);
    gulp.watch("public/**/*.html").on('change', browserSync.reload);
});

//Concatenate script files task
gulp.task("concat", ['compress']function() {
gulp.src([
  "./public/lib/angular/angular.min.js",
  "./public/lib/angular/angular-route.min.js",
  //"lib/jquery/jquery.min.js",
  "./public/js/app.js",
  "./public/js/businessCtrl.js",
  "./public/js/commentsService.js",
  "./public/js/displayComments.js",
  "./public/js/getSearchCtrl.js",
  "./public/js/indexCtrl.js",
  "./public/js/receiveCommentsCtrl.js",
  "./public/js/searchResultsService.js",
  "./public/js/setSearchCtrl.js",
  ".public/js/timeService.js"
])
.pipe(concat("script.js"))
.pipe(gulp.dest('./public/jsmin'));
});

//Minify script files task
gulp.task('compress', function() {
  gulp.src('./public/jsmin/script.js')
    .pipe(minify({
        ext:{
            src:'-min.js',
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js']
    }))
    .pipe(gulp.dest('./public/jsmin'))
});

gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 2 versions']}),
  ];
  return gulp.src('./public/css/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('default', ['serve']);
