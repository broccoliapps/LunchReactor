var gulp = require('gulp'),
  bower = require('gulp-bower'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css');

var path = {};
path.BOWER_COMPONENTS_DIR = './bower_components';
path.BUILD_DIR = './client/build';
path.DIST_JS_DIR = './client/dist/js';
path.DIST_CSS_DIR = './client/dist/css';

path.VENDOR_SRC = [
  './bower_components/moment/moment.js',
  './bower_components/underscore/underscore.js',
  './bower_components/jquery/dist/jquery.js',
  './bower_components/backbone/backbone.js'
];
path.VENDOR_MIN = 'vendor.min.js';

path.APP_SRC = [
  './client/build/js/collections/*',
  './client/build/js/models/*',
  './client/build/js/views/BackgroundView.js',
  './client/build/js/views/TitleView.js',
  './client/build/js/views/AppView.js',
  './client/build/js/app.js'
];
path.APP_MIN = 'app.min.js';

path.CSS_SRC = [
  './client/build/css/style.css'
];
path.CSS_MIN = 'style.min.css';

/* Dev Task
 * Watches the build directory for saved changes,
 * then automatically reruns the build task.
 */
gulp.task('dev', function() {
  gulp.watch([
    path.BUILD_DIR + '/*/*',
    path.BUILD_DIR + '/*/*/*'
  ], ['build']);
});

/* Build Task
 * Fetches, uglifies, and concatenates bower, app, and css components.
 */
gulp.task('build', ['bower', 'vendor', 'app', 'css']);
gulp.task('bower', function() {
  bower().pipe(gulp.dest(path.BOWER_COMPONENTS_DIR));
});
gulp.task('vendor', function() {
  gulp.src(path.VENDOR_SRC)
    .pipe(uglify())
    .pipe(concat(path.VENDOR_MIN))
    .pipe(gulp.dest(path.DIST_JS_DIR));
});
gulp.task('app', function() {
  gulp.src(path.APP_SRC)
    .pipe(uglify())
    .pipe(concat(path.APP_MIN))
    .pipe(gulp.dest(path.DIST_JS_DIR));
});
gulp.task('css', function() {
  gulp.src(path.CSS_SRC)
    .pipe(minifyCSS())
    .pipe(concat(path.CSS_MIN))
    .pipe(gulp.dest(path.DIST_CSS_DIR));
});
