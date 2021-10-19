<template>
  <layout-default class="landing-page" id="landing-page">
    <template slot="root-content">
      <div class="landing">
        <div class="content-wrapper">
          <b-container>
            <Content />
          </b-container>
        </div>
      </div>
    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";

export default {
  components: {
    LayoutDefault,
  },
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
