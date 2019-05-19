/**
 * Gulp Modules
 */
const gulp            = require('gulp'),
      autoprefixer    = require('gulp-autoprefixer'),
      babelify        = require('babelify'),
      browserify      = require('browserify'),
      buffer          = require('vinyl-buffer'),
      newer           = require('gulp-newer'),
      rename          = require('gulp-rename'),
      source          = require('vinyl-source-stream'),
      uglify          = require('gulp-uglifyes');

/**
 * Error Handler
 * Logs error and eats it up
 * to keep stuff running.
 */
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}


function bundleJS(file) {
   let url = `src/assets/js/${file}.js`;
   return browserify(url).transform('babelify', {
    presets: [
      ['@babel/preset-env', {
        targets: {
          browsers: ['last 2 versions', 'ie >= 11']
        }
      }]
    ]
  })
}

/**
 * JavaScript
 */
gulp.task('build-js', () => {

  let bundler = bundleJS('app');

  return bundler.bundle()
    .on('error', handleError)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify({
      mangle: false,
      compress: true,
      output: {
        beautify: true
      }
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./Map/'));
})


/**
 * Runner
 */
gulp.task('run', [
  'build-js'
]);

/**
 * Watcher
 */
gulp.task('watch', () => {
  gulp.watch('src/Map/**/*', ['build-js'])
});

/**
 * Gulp
 */
gulp.task('default', ['run', 'watch'])
