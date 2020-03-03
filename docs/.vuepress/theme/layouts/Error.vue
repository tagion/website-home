<template>
  <layout-default>
    <div class="typography typography--full">
      <h1 class="mb-0">
        <slot name="title">Unknown Error</slot>
      </h1>
      <h4 class="mb-2 text-muted">
        <slot name="description">Something went wrong...</slot>
      </h4>
      <p class="text-muted">
        <slot name="description-extra"></slot>
      </p>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/layout/LayoutDefault";

export default {
  components: {
    LayoutDefault
  }
};
</script>