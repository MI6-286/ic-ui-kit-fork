module.exports = {
  "core": {
    disableTelemetry: true
  },

  "stories": ["../src/**/**/*.mdx", "../src/**/**/*.stories.@(js|jsx|ts|tsx)"],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel"
  ],

  "framework": {
    name: "@storybook/web-components-webpack5",
    options: {}
  },

  docs: {}
}