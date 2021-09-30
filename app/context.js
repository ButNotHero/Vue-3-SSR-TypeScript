Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const path_1 = tslib_1.__importDefault(require('path'));

function default_1(config) {
  const directories = {
    dist: () => path_1.default.join(config.root, config.entry.dist),
    client: () => path_1.default.join(directories.dist(), config.entry.client),
    server: () => path_1.default.join(directories.dist(), config.entry.server),
  };
  const paths = {
    template: () => path_1.default.join(directories.client(), config.template),
    manifest: () => path_1.default.join(directories.server(), config.manifest),
  };
  return { config, directories, paths };
}
exports.default = default_1;
// # sourceMappingURL=context.js.map
