const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_vars";
          @import "@/assets/scss/_mixins";
        `,
      },
    },
  },

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: true,
        __VUE_I18N_PROD_DEVTOOLS__: true,
        __INTLIFY_PROD_DEVTOOLS__: false,
      }),
    ],
  },

  // !!! NOT SUPPORTED IN PRODUCTION MODE !!!
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: process.env.BASE_URL,
  //       pathRewrite: {
  //         '^/api': '',
  //       },
  //     },
  //   },
  // },

  chainWebpack: (webpackConfig) => {
    if (!process.env.VUE_APP_SSR) {
      webpackConfig.resolve.alias.set(
        'vue3-component-library/components',
        path.resolve(__dirname, 'node_modules/vue3-component-library/dist/esm'),
      );
    } else {
      webpackConfig.resolve.alias.set(
        'vue3-component-library/components',
        path.resolve(__dirname, 'node_modules/vue3-component-library/dist/cjs'),
      );
    }
    if (!process.env.VUE_APP_SSR) {
      // This is required for repl.it to play nicely with the Dev Server
      webpackConfig.devServer.disableHostCheck(true);
      webpackConfig.entry('app').clear().add('./src/entry-client.ts');
      return;
    }

    webpackConfig.entry('app').clear().add('./src/entry-server.ts');

    webpackConfig.target('node');
    webpackConfig.output.libraryTarget('commonjs2');

    webpackConfig.plugin('manifest').use(new ManifestPlugin({ fileName: 'ssr-manifest.json' }));

    webpackConfig.externals(
      nodeExternals({
        allowlist: [/\.(css|vue)$/, 'vue3-component-library/components/testworld'],
      }),
    );

    webpackConfig.optimization.splitChunks(false).minimize(false);

    webpackConfig.plugins.delete('hmr');
    webpackConfig.plugins.delete('preload');
    webpackConfig.plugins.delete('prefetch');
    webpackConfig.plugins.delete('progress');
    webpackConfig.plugins.delete('friendly-errors');
    webpackConfig.plugin('limit').use(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    );
  },
};

// exports.chainWebpack = (webpackConfig) => {
//   if (!process.env.VUE_APP_SSR) {
//     webpackConfig.resolve.alias.set(
//       'vue3-component-library/components',
//       path.resolve(__dirname, 'node_modules/vue3-component-library/dist/esm'),
//     );
//   } else {
//     webpackConfig.resolve.alias.set(
//       'vue3-component-library/components',
//       path.resolve(__dirname, 'node_modules/vue3-component-library/dist/cjs'),
//     );
//   }
//   if (!process.env.VUE_APP_SSR) {
//     // This is required for repl.it to play nicely with the Dev Server
//     webpackConfig.devServer.disableHostCheck(true);
//     webpackConfig
//       .entry('app')
//       .clear()
//       .add('./src/entry-client.ts');
//     return;
//   }
//
//   webpackConfig
//     .entry('app')
//     .clear()
//     .add('./src/entry-server.ts');
//
//   webpackConfig.target('node');
//   webpackConfig.output.libraryTarget('commonjs2');
//
//   webpackConfig
//     .plugin('manifest')
//     .use(new ManifestPlugin({ fileName: 'ssr-manifest.json' }));
//
//   webpackConfig.externals(
//     nodeExternals({
//       allowlist: [/\.(css|vue)$/, 'vue3-component-library/components/testworld'],
//     }),
//   );
//
//   webpackConfig.optimization.splitChunks(false).minimize(false);
//
//   webpackConfig.plugins.delete('hmr');
//   webpackConfig.plugins.delete('preload');
//   webpackConfig.plugins.delete('prefetch');
//   webpackConfig.plugins.delete('progress');
//   webpackConfig.plugins.delete('friendly-errors');
//   webpackConfig.plugin('limit').use(
//     new webpack.optimize.LimitChunkCountPlugin({
//       maxChunks: 1,
//     }),
//   );
// };
