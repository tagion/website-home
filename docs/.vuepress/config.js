const navigation = require("./config/navigation");
const markdown = require("./config/markdown");
const head = require("./config/head");
const webpack = require("./config/webpack");
const github = require("./config/github");
const redirect = require("./config/redirect");
const data = require("./theme/data");

module.exports = {
  domain: data.seo.domain,
  title: data.seo.title,
  description: data.seo.description,
  base: "/",
  redirect,
  themeConfig: {
    ...navigation,
    ...github
  },
  ...head,
  ...markdown,
  ...webpack,
  plugins: [require("./theme/plugins/redirect")]
};
