const { containerPlugin } = require("@vuepress/plugin-container");

export default () =>
  containerPlugin({
    type: "horizontal",
    before: (info) => `<div class="horizontal-display ${info}">`,
    after: () => "</div>\n",
  });
