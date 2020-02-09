const navigation = require("./config/navigation");
const markdown = require("./config/markdown");
const head = require("./config/head");
const webpack = require("./config/webpack");
const github = require("./config/github");
const data = require("./theme/data");

module.exports = {
  title: data.seo.title,
  description: data.seo.description,
  base: "/",
  themeConfig: {
    ...navigation,
    ...github
  },
  ...head,
  ...markdown,
  ...webpack
};
