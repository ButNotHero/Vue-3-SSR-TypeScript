Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const path_1 = tslib_1.__importDefault(require('path'));

exports.default = (function ({ config, directories, paths }) {
  const bundle = {
    manifest: () => require(paths.manifest()),
    path: () => path_1.default.join(directories.server(), bundle.manifest()[`${config.entry.server}.js`]),
    entry: (req) => tslib_1.__awaiter(this, void 0, void 0, function* () { return yield require(bundle.path()).default(req); }),
  };
  return bundle;
});
// # sourceMappingURL=bundle.js.map
