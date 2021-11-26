<template>
  <div class="landing-page" id="landing-page">
    <div class="landing">
      <b-container>
        <div class="landing-logo__wrapper">
          <logo />
        </div>
        <Content />
      </b-container>
    </div>

  </div>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";
import Logo from "@theme/components/Logo";
import Footer from "@theme/components/Footer";

export default {
  components: {
    LayoutDefault,
    Logo,
    Footer,
  },
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
