const gulp = require('gulp');
require('require-dir')('gulp_tasks');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

gulp.task('watch', watch);
gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('default', gulp.series('serve'));
gulp.task('build', gulp.series(gulp.parallel('other', 'webpack:dist')));
gulp.task('build:dev', gulp.series(gulp.parallel('other', 'webpack:dev')));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch(conf.path.tmp('index.html'), reloadBrowserSync);
  done();
}
