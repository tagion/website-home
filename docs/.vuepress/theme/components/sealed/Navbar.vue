<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <router-link :to="$localePath" class="home-link">
      <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
    </router-link>

    <div class="links" :style="{
        'max-width': linksWrapMaxWidth + 'px'
      }">
      <SearchBox v-if="$site.themeConfig.search !== false" />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import SidebarButton from "./SidebarButton.vue";
import NavLinks from "./NavLinks.vue";

export default {
  components: {
    NavLinks,
    SidebarButton
  },

  data() {
    return {
      linksWrapMaxWidth: null
    };
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    }
  }
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>
