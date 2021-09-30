Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const index_1 = tslib_1.__importDefault(require('./app/index'));
const context_1 = tslib_1.__importDefault(require('./app/context'));

const ctx = context_1.default({
  port: process.env.PORT || 8080,
  root: __dirname,
  https: process.env.HTTPS === 'true',
  reload: process.env.RELOAD === 'true',
  template: 'index.html',
  manifest: 'ssr-manifest.json',
  entry: {
    dist: 'dist',
    client: 'client',
    server: 'server',
  },
});
index_1.default(ctx);
// # sourceMappingURL=app.js.map
