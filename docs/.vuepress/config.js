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
      { text: "Meet", link: "/" },
      { text: "Learn", link: "/docs/" },
      { text: "Join", link: "/docs/" },
    ],
    footer: [

    ],
    sidebar: {
      "/docs/": [
        ["/docs/", "Welcome"],
        ["/docs/funnel", "Funnel"],
        ["/docs/scripting-engine", "Scripting Engine"]
      ],
      "/whitepaper/": [
        ["/whitepaper/", "Overview"],
        {
          title: "Synopsis",
          collapsable: false,
          children: [
            "/whitepaper/synopsis/dex",
            "/whitepaper/synopsis/consensus",
            "/whitepaper/synopsis/governance",
            "/whitepaper/synopsis/proof-of-people",
            "/whitepaper/synopsis/transaction-volumes",
            "/whitepaper/synopsis/transaction-speed",
            "/whitepaper/synopsis/energy-consumption",
            "/whitepaper/synopsis/money-supply",
            "/whitepaper/synopsis/use-of-data"
          ]
        },
        {
          title: "Other",
          collapsable: true,
          children: [["/whitepaper/terminology", "Terminology"]]
        }
      ],
      "/community/": [
        ["/community/", "Welcome"],
        ["/community/social-media", "Social Media"],
        ["/community/team", "Tagion Team"],
        ["/community/roadmap", "Tagion Roadmap"]
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
