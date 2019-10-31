<template>
  <div class="sidebar">
    <div class="sidebar__inner" @click="handleNavClick">
      <NavLinks class="d-flex d-lg-none" />
      <slot name="top" />
      <b-nav vertical class="sidebar-links" v-if="items.length">
        <li v-for="(item, i) in items" :key="i">
          <SidebarGroup
            v-if="item.type === 'group'"
            :item="item"
            :first="i === 0"
            :open="i === openGroupIndex"
            :collapsable="item.collapsable || item.collapsible"
            @toggle="toggleGroup(i)"
          />
          <SidebarLink v-else :item="item" />
        </li>
      </b-nav>
      <slot name="bottom" />
    </div>
  </div>
</template>

<script>
import SidebarGroup from "./SidebarGroup.vue";
import SidebarLink from "./SidebarLink.vue";
import NavLinks from "./NavLinks.vue";
import { isActive } from "../util";

export default {
  components: { SidebarGroup, SidebarLink, NavLinks },

  props: ["items"],

  data() {
    return {
      openGroupIndex: 0
    };
  },

  created() {
    this.refreshIndex();
  },

  watch: {
    $route() {
      this.refreshIndex();
    }
  },

  methods: {
    handleNavClick(e) {
      if (e.target.tagName === "A") {
        this.$emit("close-sidebar");
      }
    },

    refreshIndex() {
      const index = resolveOpenGroupIndex(this.$route, this.items, this);
      if (index > -1) {
        this.openGroupIndex = index;
      }
    },

    toggleGroup(index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index;
    },

    isActive(page) {
      return isActive(this.$route, page.path);
    }
  }
};

function resolveOpenGroupIndex(route, items, instance) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (
      item.type === "group" &&
      item.children.some(c => isActive(route, c.path))
    ) {
      return i;
    }
  }
  return -1;
}
</script>
