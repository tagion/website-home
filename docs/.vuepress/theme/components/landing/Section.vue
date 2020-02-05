<template>
  <div class="section">
    <div class="section__background">
      <slot name="background" />
    </div>
    <div class="section__container">
      <slot name="container" />
    </div>
  </div>
</template>

<script>
export default {
  props: {}
};
</script>

<style lang="scss" scoped>
.section {
  .section__backgorund {
  }

  .section__container {
  }
}
</style>