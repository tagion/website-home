export const PrivacyPlugin = {
  install(Vue, options) {
    let siteData = options.siteData;

    Vue.prototype.$privacy = {
      getCurrentVersion() {
        let privacyPolicyVersion = siteData.pages
          .filter(value => !!value.frontmatter.privacyVersion)
          .map(value => {
            return `${value.title} - ${value.frontmatter.privacyVersion}`;
          })
          .sort()
          .join(" / ");

        return privacyPolicyVersion;
      },
      getLatestAcceptedVersion() {
        if (typeof localStorage === "undefined") return false;
        let lastAcceptedVersion = localStorage.getItem(
          "privacyPolicyAcceptedVersion"
        );

        return lastAcceptedVersion;
      },
      isAccepted() {
        return this.getCurrentVersion() === this.getLatestAcceptedVersion();
      },
      accept() {
        if (typeof localStorage === "undefined") return false;

        localStorage.setItem(
          "privacyPolicyAcceptedVersion",
          this.getCurrentVersion()
        );

        return true;
      }
    };
  }
};
