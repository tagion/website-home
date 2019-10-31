module.exports = {
  title: "Tagion",
  description: "Tagion resources",
  base: "/",
  themeConfig: {
    activeHeaderLinks: true,
    nav: [
      { text: "Wiki", link: "/wiki/" },
      // { text: "Blog", link: "/blog/" }
    ],
    sidebar: {
      "/wiki/": [
        ["/wiki/", "Welcome"],
        {
          title: "Synopsis",
          collapsable: false,
          children: [
            ["/wiki/synopsis/dex", "Decentralized Exchange"],
            ["/wiki/synopsis/node-governance", "Node Governance"],
            ["/wiki/synopsis/consensus", "Hashgraph Consensus"],
            ["/wiki/synopsis/data-storage", "Data Storage"],
          ]
        },
        {
          title: "Community",
          collapsable: false,
          children: [
            ["/wiki/community/", "Social Media"],
          ]
        },
        {
          title: "Development",
          collapsable: false,
          children: [
            ["/wiki/development/team", "Team"],
            ["/wiki/development/roadmap", "Roadmap"],
            ["/wiki/development/contribute", "Contribute"]
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
    repo: "vladpazych/sandboxtagpage",
    editLinks: "tree",
    docsBranch: "source/docs",
    docsRepo: "vladpazych/sandboxtagpage"
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
    ["meta", { name: "twitter:site", content: "@Tagion" }],
    ["meta", { name: "twitter:creator", content: "@Tagion" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Tagion" }],
    ["meta", { property: "og:site_name", content: "tagion.org" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Tagion is a digital peer-to-peer cash, governed by people, not corporations. To reach consensus, Tagion uses Hashgraph algorithm instead of Blockchain, which makes it fast and scalable."
      }
    ],
    ["meta", { property: "og:url", content: "https://tagion.org" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://tagion.org/logo-dark.png"
      }
    ]
  ],
  markdown: {
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: "" },
    externalLinks: { target: "_blank", rel: "noopener noreferrer nofollow" }
  },
  configureWebpack: (config, isServer) => {
    config.output.globalObject = "this";
  }
};
