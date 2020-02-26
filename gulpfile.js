
const gulp            = require('gulp'),
      babelify        = require('babelify'),
      browserify      = require('browserify'),
      buffer          = require('vinyl-buffer'),
      rename          = require('gulp-rename'),
      source          = require('vinyl-source-stream'),
      terser          = require('gulp-terser');


// Error handler
function handleError(err) {
  console.log(err.toString())
  this.emit('end')
}

function buildJS() {
  const bundler = browserify('src/index.js').transform(
    'babelify',
    { presets: ['@babel/preset-env'] }
  )
  return bundler.bundle()
  .on('error', handleError)
  .pipe(source('src/index.js'))
  .pipe(buffer())
  .pipe(terser({
    mangle: false,
    compress: true
  }))
  .pipe(rename("es6-gmap.js"))
  .pipe(gulp.dest('dist/'))
}


function watch() {
  gulp.watch('src/**/*', buildJS)
}

var build = gulp.parallel(
  buildJS,
  watch
)

gulp.task(build)
gulp.task('default', build)
