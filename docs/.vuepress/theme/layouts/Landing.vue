<template>
  <layout-default class="landing-page" id="landing-page">
    <template slot="root-content">
      <div class="landing">
        <b-container>
          <div class="landing-logo__wrapper">
            <logo />
          </div>
          <Content />
        </b-container>
      </div>
    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";
import Logo from "@theme/components/Logo";

export default {
  components: {
    LayoutDefault,
    Logo,
  },
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
