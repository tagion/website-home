<template>
  <b-nav v-if="userLinks.length">
    <li v-for="item in userLinks" :key="item.link">
      <NavLink :item="item" />
    </li>
    <li>
      <a class="nav-link nav-link--button" href="/tagionwhitepaper.pdf" target="_blank" rel="noopener noreferrer nofollow">
       Whitepaper <OutboundLink />
      </a>
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

