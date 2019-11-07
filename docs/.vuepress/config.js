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
      // { text: "Docs", link: "/docs/" },
      { text: "Community", link: "/community/" },
      { text: "Whitepaper", link: "/whitepaper/" }
    ],
    sidebar: {
      "/docs/": [["/docs/", "Welcome"]],
      "/whitepaper/": [
        ["/whitepaper/", "Introduction"],
        {
          title: "Synopsis",
          collapsable: true,
          children: [
            "/whitepaper/synopsis/dex",
            "/whitepaper/synopsis/consensus",
            "/whitepaper/synopsis/energy-consumption",
            "/whitepaper/synopsis/governance",
            "/whitepaper/synopsis/money-supply",
            "/whitepaper/synopsis/proof-of-people",
            "/whitepaper/synopsis/transaction-volumes",
            "/whitepaper/synopsis/transaction-speed",
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
  configureWebpack: (config, isServer) => {
    config.output.globalObject = "this";
    config.plugins.push(new webpack.EnvironmentPlugin(["NODE_ENV", "APP_ENV"]));
  }
};

module.exports = config;
