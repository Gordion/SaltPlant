// var gulp = require('gulp');
// var sass = require('gulp-sass');
//
// gulp.task('sass', function() {
//   return gulp.src('scss/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('/'));
// });
//
// gulp.task('watch', function() {
//   gulp.watch('scss/*.scss', ['sass']);
// });
//
// gulp.task('default', ['sass', 'watch']);

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src('src/scss/*.scss')
    .pipe(sass())
    .on("error", sass.logError)
    // Use postcss with autoprefixer and compress the compiled file using cssnano
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./build'))
    // Add browsersync stream pipe after compilation
    .pipe(browserSync.stream());
}

function html() {
  return gulp
    .src('src/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
}

function images() {
  return gulp
    .src('src/images/*.*')
    .pipe(gulp.dest('./build/images'))
    .pipe(browserSync.stream());
}

// A simple task to reload the page
function reload(done) {
  browserSync.reload();
  done();
}

// Add browsersync initialization at the start of the watch task
function watch() {
  browserSync.init({
    // You can tell browserSync to use this directory and serve it as a mini-server
    server: {
      baseDir: "./build"
    }
    // If you are already serving your website locally using something like apache
    // You can use the proxy setting to proxy that instead
    // proxy: "yourlocal.dev"
  });
  gulp.watch('./src/scss', style);
  gulp.watch('./src/*.html', html);
  gulp.watch('./src/images/*.*', images);
  // We should tell gulp which files to watch to trigger the reload
  // This can be html or whatever you're using to develop your website
  // Note -- you can obviously add the path to the Paths object
  gulp.watch('./src/**.*', reload);
}

// We don't have to expose the reload function
// It's currently only useful in other functions


// Don't forget to expose the task!
exports.watch = watch;

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;
exports.html = html;
exports.images = images;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.parallel(style, html, images, watch);

/*
 * You can still use `gulp.task` to expose tasks
 */
//gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);
