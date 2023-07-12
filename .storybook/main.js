/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const Icons = require('unplugin-icons/webpack')

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/preset-scss',
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: 'doc', // 默认 Documentation
  },
  webpackFinal: async (config) => {
    config.plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      Icons({ autoInstall: true})
    );
    return config;
  },
};
export default config;
