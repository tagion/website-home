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

      const docsRepo = this.$site.themeConfig.docsRepo;

      if (docsRepo && this.$page.relativePath) {
        return this.createEditLink(docsRepo, this.$page.relativePath);
      }
    }
  },

  methods: {
    createEditLink(docsRepo, path) {
      const base = `https://github.com/${docsRepo}/`;
      return base.replace(this.endingSlashRE, "") + path;
    }
  }
};
</script>