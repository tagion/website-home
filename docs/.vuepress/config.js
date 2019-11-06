const webpack = require("webpack");
const markdownLinkPlugin = require("./theme/plugins/markdown/link");

let config = {
  title: "Tagion",
  description:
    "Tagion is an open banking protocol, that enables digital peer-to-peer cryptocurrency and a decentralized exchange, governed by its users. By design, Tagion network has no central authority and belongs to all its users. It will be open-sourced and open for everyone to join once the software is ready.",
  base: "/",
  themeConfig: {
    activeHeaderLinks: true,
    nav: [{ text: "Wiki", link: "/wiki/" }],
    sidebar: {
      "/wiki/": [
        ["/wiki/", "Welcome"],
        {
          title: "Synopsis",
          collapsable: true,
          children: [
            "/wiki/synopsis/dex",
            "/wiki/synopsis/consensus",
            "/wiki/synopsis/energy-consumption",
            "/wiki/synopsis/governance",
            "/wiki/synopsis/money-supply",
            "/wiki/synopsis/proof-of-people",
            "/wiki/synopsis/transaction-volumes",
            "/wiki/synopsis/transaction-speed",
            "/wiki/synopsis/use-of-data",
          ]
        },
        {
          title: "Community",
          collapsable: false,
          children: [["/wiki/community/", "Social Media"]]
        },
        {
          title: "Foundation",
          collapsable: false,
          children: [
            ["/wiki/foundation/team", "Team"],
            ["/wiki/foundation/roadmap", "Roadmap"],
            ["/wiki/foundation/contribute", "Contribute"]
          ]
        },
        {
          title: "Other",
          collapsable: false,
          children: [["/wiki/terminology", "Terminology"]]
        }
      ],
      "/community/": [
        ["/community/", "Overview"],
        ["/community/news", "Official News"],
        ["/community/technical", "Technical Groups"],
        ["/community/general", "General Groups"]
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
    ["link", { rel: "icon", type: "image/png", href: "/favicon.ico" }],
    ["meta", { name: "twitter:site", content: "@TagionTeam" }],
    ["meta", { name: "twitter:creator", content: "@TagionTeam" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Tagion" }],
    ["meta", { property: "og:site_name", content: "tagion.org" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Tagion is an open banking protocol, that enables digital peer-to-peer cryptocurrency and a decentralized exchange, governed by its users. By design, Tagion network has no central authority and belongs to all its users. It will be open-sourced and open for everyone to join once the software is ready."
      }
    ],
    ["meta", { property: "og:url", content: "https://tagion.org" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://tagion.org/bgphoto1.jpg"
      }
    ]
  ],
  markdown: {
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: "" },
    externalLinks: { target: "_blank", rel: "noopener noreferrer nofollow" },
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
  configureWebpack: (config, isServer) => {
    config.output.globalObject = "this";
    config.plugins.push(new webpack.EnvironmentPlugin(["NODE_ENV", "APP_ENV"]));
  }
};

module.exports = config;
