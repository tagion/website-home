const path = require("path");
const moment = require("moment");

let config = {
  plugins: [
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
      hostname: "https://tagion.org",
      exclude: [
        "/meta/cookie-policy.html",
        "/meta/privacy-policy.html",
        "/meta/terms-of-use.html",
        "/meta/500.html",
        "/404.html"
      ]
    }
  ]);
}

module.exports = config;
