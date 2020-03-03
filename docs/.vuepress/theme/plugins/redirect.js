const { logger, fs, path } = require("@vuepress/shared-utils");
const redirect = require("../../config/redirect");

function createRedirectTemplate(to) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
          <title>Redirecting...</title>
          <meta http-equiv = "refresh" content = "0; url = ${to}" />
          <style>
              body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                  font-family: Arial, Helvetica, sans-serif;
                  min-height: 100vh;
              }
            
              p {
                  display: block;
                  margin: 16px;
              }

              p.small {
                  font-size: .8em;
                  margin: 3px;
              }
          </style>
      </head>
      <body>
          <p><b>Oops, this page does not exist anymore.</b></p>
          <p class="small">Redirecting to...</p>
          <p class="small"><a href="${to}">${to}</a></p>
      </body>
    </html>
    `;
}

function createRedirects() {
  for (let key in redirect) {
    try {
      let redirectUrl = redirect[key];
      let redirectTemplate = createRedirectTemplate(redirectUrl);

      let fromUrlArray = key.split("/");
      fromUrlArray.shift();

      let fromUrlFilename = "index.html";

      for (let dirPart of fromUrlArray) {
        if (!fs.existsSync(path.resolve(`docs/.vuepress/dist/${dirPart}`))) {
          fs.mkdirSync(path.resolve(`docs/.vuepress/dist/${dirPart}`));
        }
      }

      let fromUrlDir = fromUrlArray.join("/");

      let resultFilename = path.resolve(
        `docs/.vuepress/dist/${fromUrlDir}/${fromUrlFilename}`
      );
      if (fs.existsSync(resultFilename)) {
        fs.unlinkSync(resultFilename);
      }
      fs.writeFileSync(resultFilename, redirectTemplate);
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = (options, ctx) => {
  return {
    generated() {
      createRedirects();
    }
  };
};
