<template>
  <header class="header" id="header">
    <b-container class="d-flex justify-content-between">
      <div class="header__logo-wrapper">
        <router-link to="/">
          <img
            class="header__logo"
            src="../images/logomark-circle-black.svg"
            alt="Tagion Logo"
          />
          <div class="header__title">
            <div class="header__title-name">Tagion</div>
            <div class="header__title-sub">Money for #OpenEconomy</div>
          </div>
        </router-link>
      </div>

      <div class="header__menu justify-content-end">
        <SearchBox v-if="$site.themeConfig.search !== false" />
        <NavLinks class="d-none d-lg-flex" />
      </div>
    </b-container>
  </header>
</template>

<script>
import NavLinks from "./NavLinks.vue";
import SearchBox from "./SearchBox.vue";
import SocialButtons from "./SocialButtons";
import * as throttle from "lodash.throttle";

export default {
  components: { NavLinks, SearchBox, SocialButtons },
  data() {
    return {
      lastScrollY: undefined,
      headerElement: undefined,
    };
  },
  mounted() {
    this.headerElement = document.getElementById("header");
    window.addEventListener("scroll", this.throttleHeaderScrolled);
    this.throttleHeaderScrolled();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.throttleHeaderScrolled);
  },
  methods: {
    throttleHeaderScrolled: throttle(function () {
      let scrollY = window.scrollY;

      if (scrollY > 5) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }

      if (this.lastScrollY !== undefined) {
        let scrollDiff = this.lastScrollY - scrollY;
        if (scrollY > 100 && scrollDiff < -1) {
          document.body.classList.add("scrolled-down");
        } else if (scrollDiff > 1) {
          document.body.classList.remove("scrolled-down");
        }
      }

      this.lastScrollY = scrollY;
    }, 0),
  },
};
</script>
