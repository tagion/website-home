<template>
  <header class="header" id="header">
    <b-container class="d-flex justify-content-between">
      <div class="header-logo__wrapper">
        <logo />
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
import Logo from "./Logo.vue";

export default {
  components: {
    NavLinks,
    SearchBox,
    Logo,
  },
};
</script>
