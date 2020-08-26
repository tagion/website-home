<template>
  <b-nav v-if="userLinks.length">
    <li v-for="item in userLinks" :key="item.link" :class="linkClasses(item)">
      <NavLink :item="item" />
    </li>
  </b-nav>
</template>

<script>
import { isActive, resolveNavLinkItem } from "@theme/util";
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },
  computed: {
    nav() {
      return this.$site.themeConfig.nav || [];
    },
    userLinks() {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        });
      });
    }
  },
  methods: {
    linkClasses(item) {
      let classes = {}
      if (item.showOnly) {
        classes[`menu-item--show-only-${item.showOnly}`] = true;
      }

      if (item.hideOnly) {
        classes[`menu-item--hide-only-${item.hideOnly}`] = true;
      }

      return classes;
    },
    isActive
  }
};
</script>

