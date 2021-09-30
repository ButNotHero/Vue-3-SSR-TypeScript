Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const express_1 = tslib_1.__importDefault(require('express'));
const compression_1 = tslib_1.__importDefault(require('compression'));
const middleware_1 = tslib_1.__importDefault(require('./core/middleware'));
const renderer_1 = tslib_1.__importDefault(require('./core/renderer'));
const shutdown_1 = tslib_1.__importDefault(require('./core/shutdown'));

exports.default = function (ctx) {
  const { assets, https, reload } = middleware_1.default(ctx);
  const app = express_1.default();
  app.use(compression_1.default());
  app.use(assets());
  const { config } = ctx;
  config.https && app.use(https());
  config.reload && app.use(reload());
  app.get('*', (req, res) =>
    tslib_1.__awaiter(this, void 0, void 0, function* () {
      yield renderer_1.default(ctx).response(req, res);
    }));
  app.listen(config.port, () => console.log(`Server started at http://localhost:${config.port}`));
  shutdown_1.default();
};
// # sourceMappingURL=index.js.map
