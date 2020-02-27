<template>
  <layout-error>
    <template slot="title">500 | Internal Server Error</template>
    <template slot="description">Unfortunately an error happened and your request was not processed..</template>
    <template slot="description-extra">Please, try again. If error persists, we will appreciate if you tell us about it via email <a href="mailto:support@tagion.org"></a></template>
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