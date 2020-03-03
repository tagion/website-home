<template>
  <layout-error>
    <template slot="title">404 | Page Not Found</template>
    <template slot="description">We couldn't find what you were looking for.</template>
    <template slot="description-extra">It will be very helpful, if you contact the owner of the site that linked you to this URL and let them know their link is broken.</template>
  </layout-error>
</template>

<script>
import LayoutError from "./Error";

export default {
  components: {
    LayoutError
  }
};
</script>