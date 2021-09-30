Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const express_1 = tslib_1.__importDefault(require('express'));

exports.default = (function ({ directories }) {
  return {
    assets: () => express_1.default.static(directories.client(), { index: false }),
    https: () => (req, res, next) => {
      !req.secure ? res.redirect(`https://${req.headers.host}${req.url}`) : next();
    },
    reload: () => {
      const livereload = require('livereload');
      const server = livereload.createServer();
      server.watch(directories.dist());
      server.server.once('connection', () => {
        setTimeout(() => {
          server.refresh('/');
        }, 100);
      });
      return require('connect-livereload')({
        port: 35729,
      });
    },
  };
});
// # sourceMappingURL=middleware.js.map
