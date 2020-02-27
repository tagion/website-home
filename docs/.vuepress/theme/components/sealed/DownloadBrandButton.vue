<template>
  <a
    v-else
    :href="href"
    v-bind="$attrs"
    class="brand-button brand-button--download"
    :class="{['brand-button--'+variant]: true}"
  >
    <span :scroll-reveal-child="reveal" scroll-reveal-right data-reveal-delay="250">
      <div class="brand-button__text">
        <slot />
      </div>
    </span>
    <span class="brand-button__wrapper">
      <span class="brand-button__icon"></span>
    </span>
  </a>
</template>

<script>
export default {
  props: ["variant", "reveal", "href", "bottom"]
};
</script>
