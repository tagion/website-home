const webpack = require("webpack");

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
          collapsable: false,
          children: [
            ["/wiki/synopsis/dex", "Decentralized Exchange"],
            ["/wiki/synopsis/node-governance", "Node Governance"],
            ["/wiki/synopsis/consensus", "Hashgraph Consensus"],
            ["/wiki/synopsis/data-storage", "Data Storage"]
          ]
        },
        {
          title: "Community",
          collapsable: false,
          children: [["/wiki/community/", "Social Media"]]
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
    externalLinks: { target: "_blank", rel: "noopener noreferrer nofollow" }
  },
  configureWebpack: (config, isServer) => {
    config.output.globalObject = "this";
    config.plugins.push(new webpack.EnvironmentPlugin(["NODE_ENV"]));
  }
};

if (process.env.NODE_ENV === "development") {
  config.head = [
    ...config.head,
    [
      "script",
      {},
      `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq("init", "1707211522748212");
    fbq("track", "PageView");`
    ],
    [
      "noscript",
      {},
      `
    <img height="1" width="1" style="display:none" 
    src="https://www.facebook.com/tr?id=1707211522748212&ev=PageView&noscript=1"/>
    `
    ]
  ];
}

module.exports = config;
