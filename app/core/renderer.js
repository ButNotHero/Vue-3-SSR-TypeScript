Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const server_renderer_1 = require('@vue/server-renderer');
const fs_1 = tslib_1.__importDefault(require('fs'));
const vue_1 = require('vue');
const bundle_1 = tslib_1.__importDefault(require('./bundle'));

exports.default = (function (ctx) {
  const renderer = {
    response: (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
      const context = yield bundle_1.default(ctx).entry(req);
      const content = yield renderer.context(context);
      if (fs_1.default.existsSync(ctx.paths.template())) {
        fs_1.default.readFile(ctx.paths.template(), (err, template) => {
          if (err) {
            throw err;
          }
          res.setHeader('Content-Type', 'text/html');
          res.send(renderer.hydrate(template, content));
        });
      }
    }),
    context: ({ app, state }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
      return ({
        app: yield server_renderer_1.renderToString(app),
        state: JSON.stringify(state),
        meta: yield server_renderer_1.renderToString(vue_1.h(app._context.components.PageMeta)),
      });
    }),
    hydrate: (template, { app, meta, state }) => template
      .toString()
      .replace('<meta name="meta">', meta)
      .replace('<div id="app"></div>', `<div id="app">${app}</div>`)
      .replace('<div id="state"></div>', `<script>window.__STATE__ = ${state}</script>`),
  };
  return renderer;
});
// # sourceMappingURL=renderer.js.map
