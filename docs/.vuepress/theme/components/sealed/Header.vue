<template>
  <header class="header" id="header">
    <b-container class="d-flex justify-content-between">
      <div class="header__logo-wrapper">
        <router-link to="/">
          <img class="header__logo" src="/logo-tagion.svg" alt="Tagion Logo" />
        </router-link>
        <NavLinks class="header__nav d-none d-lg-flex" />
      </div>

      <div class="header__menu justify-content-end">
        <SearchBox v-if="$site.themeConfig.search !== false" />
      </div>
    </b-container>
  </header>
</template>

<script>
import NavLinks from "./NavLinks.vue";
import SearchBox from "./SearchBox.vue";

export default {
  components: { NavLinks, SearchBox }
};
</script>
