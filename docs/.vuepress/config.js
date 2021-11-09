const webpack = require("webpack");
const markdownLinkPlugin = require("./theme/plugins/markdown/link");

let config = {
  title: "Tagion",
  description:
    "Tagion is an open banking protocol, that enables digital peer-to-peer cryptocurrency and a decentralized exchange, governed by its users. By design, Tagion network has no central authority and belongs to all its users. It will be open-sourced and open for everyone to join once the software is ready.",
  base: "/",
  themeConfig: {
    activeHeaderLinks: true,
    nav: [
      { text: "Software", link: "/software/" },
      { text: "Network", link: "/network/" },
      { text: "Wiki", link: "/wiki/" },
    ],
    footer: [

    ],
    sidebar: {
      "/wiki/": [
        ["/wiki/", "Welcome"],
      ],
      "/network/": [
        ["/network/", "Welcome"],
        ["/network/social-media", "Social Media"],
        ["/network/team", "Tagion Team"],
        ["/network/roadmap", "Tagion Roadmap"]
      ],
      "/software/": [
        ["/software/", "Welcome"],
        ["/software/social-media", "Social Media"],
        ["/software/team", "Tagion Team"],
        ["/software/roadmap", "Tagion Roadmap"]
      ]
    },
    docsRepo: "tagion/homepage/blob/release/docs"
  },
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,maximum-scale=6,maximum-scale=1"
      }
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "twitter:creator", content: "@tagionorg" }]
  ],
  markdown: {
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: "" },
    externalLinks: { target: "_blank", rel: "noopener noreferrer nofollow" },
    extendMarkdown: md => {
      md.use(require("markdown-it-footnote"));
      md.use(require("markdown-it-abbr"));
    },
    chainMarkdown(config) {
      // Replace default link converted, to have more control over which links are
      // considered external
      config.plugins.delete("convert-router-link");

      config
        .plugin("convert-router-link")
        .use(markdownLinkPlugin, [
          { target: "_blank", rel: "noopener noreferrer nofollow" }
        ])
        .end();
    }
  },
  chainWebpack(config, isServer) {
    const inlineLimit = 10000;
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: inlineLimit,
        name: `assets/img/[name].[hash:8].[ext]`
      });
  },
  configureWebpack: (config, isServer) => {
    config.output.globalObject = "this";
    config.plugins.push(new webpack.EnvironmentPlugin(["NODE_ENV", "APP_ENV"]));
  }
};

module.exports = config;
