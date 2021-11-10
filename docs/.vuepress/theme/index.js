const moment = require("moment");

let config = {
  plugins: [
    ["check-md"],
    ["img-lazy"],
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => "summary_large_image",
        type: $page =>
          ["articles", "posts", "blog"].some(folder =>
            $page.regularPath.startsWith("/" + folder)
          )
            ? "article"
            : "website",
        url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image
            ? ($site.themeConfig.domain || "") + $page.frontmatter.image
            : ($site.themeConfig.domain || "") + "/logomark-square-black.png",
        publishedAt: $page =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
      }
    ],
    [
      "vuepress-plugin-canonical",
      {
        baseURL: "https://tagion.org",
        stripExtension: true
      }
    ],

    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor"
      }
    ],

    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).format("MMMM DD, YYYY");
        }
      }
    ]
  ]
};

if (process.env.APP_ENV === "production") {
  config.plugins.push([
    "sitemap",
    {
      hostname: "https://tagion.com",
      exclude: [
        "/meta/500.html",
        "/404.html",
        "/contacts.html",
        "/press.html"
      ]
    }
  ]);
}

module.exports = config;
