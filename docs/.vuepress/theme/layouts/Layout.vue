<template>
  <layout-default>
    <div class="typography" :class="{'typography--full': $page.frontmatter.fullwidth}">
      <Content />
      <div class="forkbox" v-if="editLink">
        <a :href="editLink" target="_blank" title="Edit page on Github">
          <span>Edit page on GitHub</span>
          <OutboundLink />
        </a>
        <div class="forkbox__secondary" v-if="$page.lastUpdated">
          <span>Last update:</span>
          <span class="forkbox__secondary-date">{{$page.lastUpdated}}</span>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";
import CookiesNotification from "@theme/components/CookiesNotification";

export default {
  components: {
    LayoutDefault,
    CookiesNotification
  },

  computed: {
    editLink() {
      if (this.$page.frontmatter.editLink === false) {
        return;
      }

      const {
        editLinks,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo
      } = this.$site.themeConfig;

      if (docsRepo && editLinks && this.$page.relativePath) {
        return this.createEditLink(
          docsRepo,
          docsDir,
          docsBranch,
          this.$page.relativePath
        );
      }
    }
  },

  methods: {
    createEditLink(docsRepo, docsDir, docsBranch, path) {
      const base = `https://github.com/${docsRepo}`;
      return (
        base.replace(this.endingSlashRE, "") +
        `/tree` +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
        path
      );
    }
  }
};
</script>