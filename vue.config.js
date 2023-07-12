const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const Icons = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ['ep'],
          })],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  },
});
