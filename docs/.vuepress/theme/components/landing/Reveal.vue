<template>
  <div
    :scroll-reveal="!child"
    :scroll-reveal-child="child"
    :scroll-reveal-up="direction === 'up'"
    :scroll-reveal-down="direction === 'down'"
    :scroll-reveal-left="direction === 'left'"
    :scroll-reveal-right="direction === 'right'"
    :scroll-reveal-opacity="opacity"
    :data-reveal-delay="delay"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    child: {
      type: Boolean
    },
    opacity: {
      type: Boolean
    },
    direction: {
      type: String,
    },
    delay: {
        type: Number,
        default: 0
    }
  }
};
</script>