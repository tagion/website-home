<template>
  <header
    class="header header--static"
    id="header"
  >
    <b-container class="d-flex justify-content-between">
      <div class="header__logo-wrapper">
        <router-link to="/">
          <img
            class="header__logo"
            src="/logo.svg"
            alt="Tagion Logo"
          />
        </router-link>
        <NavLinks class="header__nav d-none d-lg-flex" />
      </div>
    </b-container>
  </header>
</template>

<script>
import NavLinks from "./NavLinks.vue";

export default {
  components: { NavLinks }
};
</script>
