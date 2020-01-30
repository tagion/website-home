<template>
  <b-nav v-if="userLinks.length">
    <li v-for="item in userLinks" :key="item.link">
      <NavLink :item="item" />
    </li>
  </b-nav>
</template>

<script>
import { isActive, resolveNavLinkItem } from "../util";
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
    isActive
  }
};
</script>

