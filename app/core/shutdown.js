Object.defineProperty(exports, '__esModule', { value: true });
const SIGNALS = ['SIGINT', 'SIGUR1', 'SIGUR2', 'SIGTERM', 'uncaughtException'];
function default_1() {
  const handler = (options, code) => {
    options.clean && console.log(code);
    options.exit && process.exit();
  };
  SIGNALS.forEach((code) => process.on(code, handler.bind(null, { exit: true })));
  process.on('exit', handler.bind(null, { clean: true }));
}
exports.default = default_1;
// # sourceMappingURL=shutdown.js.map
