var gulp = require('gulp'),
  bower = require('gulp-bower'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat');

var path = {};

// Client
path.BOWER_COMPONENTS_DIR = './bower_components';
path.BUILD_DIR = './client/build/js';
path.DIST_DIR = './client/dist/js';

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

/* Dev Task
 * Watches the build directory for saved changes,
 * then automatically reruns the build task.
 */
gulp.task('dev', function() {
  gulp.watch(path.BUILD_DIR + '/*/*', ['build']);
});

/* Build Task
 * Fetches, uglifies, and concatenates bower and app components.
 */
gulp.task('build', ['bower', 'vendor', 'app']);
gulp.task('bower', function() {
  bower().pipe(gulp.dest(path.BOWER_COMPONENTS_DIR));
});
gulp.task('vendor', function() {
  gulp.src(path.VENDOR_SRC)
    .pipe(uglify())
    .pipe(concat(path.VENDOR_MIN))
    .pipe(gulp.dest(path.DIST_DIR));
});
gulp.task('app', function() {
  gulp.src(path.APP_SRC)
    .pipe(uglify())
    .pipe(concat(path.APP_MIN))
    .pipe(gulp.dest(path.DIST_DIR));
});
