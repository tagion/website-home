<template>
  <layout-default :sidebarItems="sidebarItems">
    <div class="typography" :class="{'typography--full': $page.frontmatter.fullwidth}">
      <Content />

      <div class="forkbox">
        <div v-if="$page.lastUpdated">
          <span>Last edit:</span>
          <span class="forkbox__secondary-date">{{$page.lastUpdated}}</span>
        </div>
        <div class="forkbox__secondary" v-if="editLink">
          <a :href="editLink" target="_blank" title="Edit on Github">
            <span>Edit on GitHub</span>
            <OutboundLink />
          </a>
        </div>
      </div>
    </div>
    <template slot="footer-pagenav">
      <b-container>
        <page-nav v-if="pageNavEnabled" :sidebarItems="sidebarItems" />
      </b-container>
    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";
import PageNav from "@theme/components/PageNav";
import { resolveSidebarItems } from "../util";

export default {
  components: {
    LayoutDefault,
    PageNav,
  },

  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      );
    },

    shareEnabled() {
      return this.$page.frontmatter.shareButtons;
    },

    pageNavEnabled() {
      if (this.$page.frontmatter.pageNav === false) {
        return false;
      }

      return true;
    },

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