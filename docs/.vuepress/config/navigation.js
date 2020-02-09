module.exports = {
  activeHeaderLinks: true,
  nav: [
    { text: "Tagion", link: "/" },
    // { text: "", link: "sep1" },
    // { text: "Community", link: "/community/" },
    // { text: "Developers", link: "/docs/" },
    // { text: "", link: "sep2" },
    { text: "Whitepaper", link: "/tagionwhitepaper.pdf" },
    { text: "Technical Paper", link: "/tagiontechpaper.pdf" }
  ],
  sidebar: {
    "/docs/": [
      ["/docs/", "Welcome"],
      ["/docs/funnel", "Funnel"],
      ["/docs/scripting-engine", "Scripting Engine"],
      ["/docs/node-demo", "Node Demonstration"]
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
      ["/community/roadmap", "Tagion Roadmap"],
      ["/community/executive-summary", "Executive Summary"]
    ]
  },
  footer: {
    quickLinks: [
      { text: "Tagion", link: "/" },
      { text: "Whitepaper", link: "/tagionwhitepaper.pdf" },
      { text: "Technical Paper", link: "/tagiontechpaper.pdf" }
    ],
    contact: [
      { text: "info@tagion.org", link: "mailto:info@tagion.org" },
      { text: "support@tagion.org", link: "mailto:support@tagion.org" }
    ]
  }
};
