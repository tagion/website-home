const markdownLinkPlugin = require("../theme/plugins/markdown/link");

module.exports = {
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
};
