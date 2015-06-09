var gulp = require('gulp'),
  bower = require('gulp-bower'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  foreman = require('gulp-foreman'),
  minifyCSS = require('gulp-minify-css');

var path = {};
path.BOWER_COMPONENTS_DIR = './bower_components';
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
  './client/build/js/views/DashboardView.js',
  './client/build/js/views/RsvpView.js',
  './client/build/js/views/CounterView.js',
  './client/build/js/views/AppView.js',
  './client/build/js/app.js'
];
path.APP_CSS_MIN = 'style.min.css';
path.APP_CSS_SRC = [
  './client/build/css/style.css'
];

/* Dev Task
 * Watches the build directory for saved changes,
 * then automatically reruns the build task.
 */
gulp.task('dev', ['build', 'foreman', 'dev-watch']);
gulp.task('foreman', function() {
  foreman({
    procfile: 'Procfile.dev',
    env: '.env'
  });
});
gulp.task('dev-watch', function() {
  gulp.watch([
    path.BUILD_DIR + '/**/**/*'
  ], ['build']);
});

/* Build Task
 * Fetches, uglifies, and concatenates bower, app, and css components.
 */
gulp.task('build', ['bower', 'vendor', 'app']);
gulp.task('bower', function() {
  bower().pipe(gulp.dest(path.BOWER_COMPONENTS_DIR));
});
gulp.task('vendor', function() {
  gulp.src(path.VENDOR_JS_SRC)
    .pipe(uglify())
    .pipe(concat(path.VENDOR_JS_MIN))
    .pipe(gulp.dest(path.DIST_JS_DIR));
  gulp.src(path.VENDOR_CSS_SRC)
    .pipe(minifyCSS())
    .pipe(concat(path.VENDOR_CSS_MIN))
    .pipe(gulp.dest(path.DIST_CSS_DIR));
});
gulp.task('app', function() {
  gulp.src(path.APP_JS_SRC)
    .pipe(uglify())
    .pipe(concat(path.APP_JS_MIN))
    .pipe(gulp.dest(path.DIST_JS_DIR));
  gulp.src(path.APP_CSS_SRC)
    .pipe(minifyCSS())
    .pipe(concat(path.APP_CSS_MIN))
    .pipe(gulp.dest(path.DIST_CSS_DIR));
});
