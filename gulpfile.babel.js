import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';

import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import assign from 'object-assign';
import del from 'del';

import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import stringify from 'stringify';

gulp.task('build', () => {
  const b = browserify('ui/src/index.js', { debug: true })
    .transform(stringify({
      appliesTo: { includeExtensions: ['.html', '.css'] }
    }))
    .transform(babelify);
  return bundle(b);
});

gulp.task('watch', () => {
  const b = browserify('ui/src/index.js', assign({ debug: true }, watchify.args))
    .transform(stringify({
      appliesTo: { includeExtensions: ['.html', '.css'] }
    }))
    .transform(babelify);
  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);
  return bundle(w)
});

gulp.task('clean', () => {
  return del('ui/build');
});

function bundle(b) {
  return b.bundle()
    .on('error', (e) => {
      gutil.log(e);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('ui/build'));
}
