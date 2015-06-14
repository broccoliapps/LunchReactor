var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  minifyCSS = require('gulp-minify-css');

var path = {};
path.BUILD_DIR = './client/build';
path.DIST_JS_DIR = './client/dist/js';
path.DIST_CSS_DIR = './client/dist/css';
path.VENDOR_JS_MIN = 'vendor.min.js';
path.VENDOR_JS_SRC = [
  './bower_components/moment/moment.js',
  './bower_components/underscore/underscore.js',
  './bower_components/jquery/dist/jquery.js',
  './bower_components/backbone/backbone.js'
];
path.VENDOR_CSS_MIN = 'vendor.min.css';
path.VENDOR_CSS_SRC = [
  './bower_components/normalize.css/normalize.css'
];
path.APP_JS_MIN = 'app.min.js';
path.APP_JS_SRC = [
  './client/build/js/collections/*',
  './client/build/js/models/*',
  './client/build/js/views/BackgroundView.js',
  './client/build/js/views/TitleView.js',
  './client/build/js/views/RsvpView.js',
  './client/build/js/views/CounterView.js',
  './client/build/js/views/DashboardView.js',
  './client/build/js/views/MessageView.js',
  './client/build/js/views/AppView.js',
  './client/build/js/app.js'
];
path.APP_CSS_MIN = 'style.min.css';
path.APP_CSS_SRC = [
  './client/build/css/style.css',
  './client/build/css/shapes.css',
  './client/build/css/background.css',
  './client/build/css/title.css',
  './client/build/css/dashboard.css',
  './client/build/css/message.css'
];

/* Dev Task
 * Watches the build directory and gulpfile for saved changes,
 * then automatically reruns the build task.
 */
gulp.task('dev', ['build', 'dev-watch']);
gulp.task('dev-watch', function() {
  gulp.watch([
    './gulpfile.js',
    path.BUILD_DIR + '/**/**/*'
  ], ['build']);
});

/* Build Task
 * Uglifies and concatenates vendor, app, and css components.
 */
gulp.task('build', ['vendor', 'app']);
gulp.task('vendor', function() {
  gulp.src(path.VENDOR_JS_SRC)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(path.VENDOR_JS_MIN))
    .pipe(gulp.dest(path.DIST_JS_DIR));
  gulp.src(path.VENDOR_CSS_SRC)
    .pipe(plumber())
    .pipe(minifyCSS())
    .pipe(concat(path.VENDOR_CSS_MIN))
    .pipe(gulp.dest(path.DIST_CSS_DIR));
});
gulp.task('app', function() {
  gulp.src(path.APP_JS_SRC)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(path.APP_JS_MIN))
    .pipe(gulp.dest(path.DIST_JS_DIR));
  gulp.src(path.APP_CSS_SRC)
    .pipe(plumber())
    .pipe(concat(path.APP_CSS_MIN))
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.DIST_CSS_DIR));
});
