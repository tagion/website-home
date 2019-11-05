<template>
  <router-link
    @click="$emit('click')"
    v-if="to"
    :to="to"
    v-bind="$attrs"
    class="brand-button"
    :class="{['brand-button--'+variant]: true}"
  >
    <span class="brand-button__wrapper">
      <span class="brand-button__icon"></span>
    </span>
    <span :scroll-reveal-child="reveal" scroll-reveal-right data-reveal-delay="250">
      <div class="brand-button__text">
        <slot />
      </div>
    </span>
  </router-link>
  <a
    v-else
    @click="$emit('click')"
    :href="href"
    v-bind="$attrs"
    class="brand-button"
    :class="{['brand-button--'+variant]: true}"
  >
    <span class="brand-button__wrapper">
      <span class="brand-button__icon"></span>
    </span>
    <span :scroll-reveal-child="reveal" scroll-reveal-right data-reveal-delay="250">
      <div class="brand-button__text">
        <slot />
      </div>
    </span>
  </a>
</template>

<script>
export default {
  props: ["variant", "reveal", "to", "href", "bottom"]
};
</script>
