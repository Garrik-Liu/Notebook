import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from "@vuepress/plugin-search";

module.exports = {
  title: "Garrik 的笔记",
  base: "/notebook/",
  theme: hopeTheme({
    sidebar: "structure",
    navbar: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "Github",
        link: "https://github.com/Garrik-Liu/my-notebook",
        target: "blank",
        rel: "",
      },
    ],
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      orange: "#fb9b5f",
    },
  }),
  plugins: [
    searchPlugin({}),
  ],
}
