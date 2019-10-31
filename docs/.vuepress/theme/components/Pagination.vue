<template>
  <component
    v-if="comp"
    :is="comp"
    v-model="page"
    :page-count="$pagination.length"
    :click-handler="clickCallback"
    :prev-text="'<'"
    :next-text="'>'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  ></component>
</template>

<script>
export default {
  data() {
    return {
      page: 0,
      comp: null
    };
  },

  created() {
    this.page = this.$pagination.paginationIndex + 1;
  },

  mounted() {
    import(/* webpackChunkName: "vuejs-paginate" */ "vuejs-paginate").then(
      comp => {
        this.comp = comp.default;
      }
    );
  },

  methods: {
    clickCallback(pageNum) {
      const link = this.$pagination.getSpecificPageLink(pageNum - 1);
      this.$router.push(link);
    }
  }
};
</script>