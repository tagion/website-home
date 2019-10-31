<template>
  <layout-default :isEditable="false">
    <!-- <div class="typography typography--full mb-8">
      <h1>
        Blog
        <span
          class="text-muted small font-weight-bold"
        >/ Page {{$pagination.paginationIndex + 1}}</span>
      </h1>
    </div>
    <div class="blog-post-list">
      <router-link
        class="page-link blog-post-preview"
        v-for="page in $pagination.pages"
        :to="page.path"
      >
        <div class="blog-post-preview__cover" :style="{background: page.frontmatter.color}">
          <img :src="`/covers/${page.frontmatter.cover}`" :alt="page.title" />
        </div>
        <div class="blog-post-preview__content">
          <h4>{{ page.title }}</h4>
          <div class="blog-post-preview__meta">
            <div class="small">{{page.filedate}}</div>
            <div class="small">
              by
              <span>{{ page.frontmatter.author }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="blog-pagination d-flex justify-content-center mt-8">
      <pagination />
    </div> -->
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";
import Pagination from "@theme/components/Pagination";

export default {
  components: {
    LayoutDefault,
    Pagination
  }
};
</script>