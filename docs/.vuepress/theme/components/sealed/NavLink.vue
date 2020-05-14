<template>
  <li
    v-if="isSeparator"
    class="nav-separator"
  ></li>
  <router-link
    class="nav-link"
    :to="link"
    v-else-if="!isExternal(link)"
    :exact="exact"
  >{{ item.text }}</router-link>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) || isDownload ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) || isDownload ? null : 'noopener noreferrer nofollow'"
  >
    {{ item.text }}
    <OutboundLink v-if="!isDownload" />
    <DownloadLink v-else-if="isDownload" />
  </a>
</template>

<script>
import DownloadLink from "./DownloadLink";
import { isExternal, isMailto, isTel, ensureExt } from "@theme/util";

export default {
  components: {
    DownloadLink
  },

  props: {
    item: {
      required: true
    }
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    },

    isDownload() {
      return this.item.kind == "download";
    },

    isSeparator() {
      return this.link.match(/sep.\.html/);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          rootLink => rootLink === this.link
        );
      }
      return this.link === "/";
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
};
</script>
