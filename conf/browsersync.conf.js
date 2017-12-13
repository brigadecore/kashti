const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.dist,
        conf.paths.src
      ]
    },
    open: false
  };
};
