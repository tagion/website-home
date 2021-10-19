<template>
  <div id="wrapper" :class="pageClasses" class="layout-page">
    <div class="layout-header">
      <Header
        :class="{ 'home': isLanding }"
        @toggle-sidebar="toggleSidebar"
        @toggle-mode="toggleMode"
      />
    </div>
    <div class="layout-body">
      <slot name="root-content">
        <b-container class="d-flex">
          <div class="layout-content">
            <main :class="contentClasses">
              <slot />
            </main>
          </div>
        </b-container>
      </slot>
      <div class="layout-sidebar">
        <Sidebar class="layout-sidebar__inner" :items="sidebarItems" @close-sidebar="closeSidebar" />
      </div>
    </div>
    <div class="layout-footer-nav">
      <slot name="footer-pagenav" />
    </div>
    <div class="layout-footer">
      <Footer :class="{ 'home': isLanding }" />
    </div>
    <SidebarButton @toggle-sidebar="toggleSidebar()" />
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SidebarButton from "./SidebarButton.vue";

export default {
  props: ["sidebarItems"],
  data() {
    return {
      isSidebarOpen: false,
      darkMode: false
    };
  },
  components: {
    Footer,
    Header,
    Sidebar,
    SidebarButton
  },
  mounted() {
    this.$analytics.recordUtm(this.$route);
    this.$analytics.init();

    const hash = this.$route.hash;
    if (hash) {
      this.$scrollTo(hash);
    }

    if (localStorage) {
      this.darkMode = localStorage.getItem("dark-mode") || false;
    }
  },
  updated() {
    this.$analytics.init();
  },
  computed: {
    isLanding() {
      return this.$page.title === "Home";
    },
    isRelaunch() {
      return this.$page.path === "/relaunch.html";
    },
    posts() {
      return this.$site.pages.filter(
        page =>
          page.path.endsWith(".html") && page.path.startsWith(this.$page.path)
      );
    },

    showSidebar() {
      return this.$page.frontmatter.sidebar;
    },
    contentClasses() {
      return {
        "content-block": this.isLanding,
        page: !this.isLanding
      };
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          home: this.isLanding,
          "has-sidebar": this.showSidebar,
          "sidebar-open": this.isSidebarOpen,
          "dark-mode": this.darkMode === "true"
        },
        userPageClass
      ];
    }
  },
  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    toggleMode() {
      this.darkMode = this.darkMode === "true" ? "false" : "true";

      if (localStorage) {
        localStorage.setItem("dark-mode", this.darkMode);
      }
    }
  }
};
</script>

<style src="../styles/global.scss" lang="scss"></style>
